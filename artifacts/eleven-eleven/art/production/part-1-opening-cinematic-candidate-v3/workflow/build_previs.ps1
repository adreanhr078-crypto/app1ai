$ErrorActionPreference = "Stop"

$candidate = Split-Path -Parent $MyInvocation.MyCommand.Path
$project = (Resolve-Path (Join-Path $candidate "..\..\..")).Path
$source = Join-Path $project "public\assets\cinematics\promotional\echo-network-part1-opening-anime-animatic-v1.webm"

if (-not (Test-Path -LiteralPath $source)) {
    throw "Approved clean animatic source is missing: $source"
}

$audio = Join-Path $candidate "original-sound-design.wav"
$webm = Join-Path $candidate "PREVIS.webm"
$mp4 = Join-Path $candidate "PREVIS.mp4"
$poster = Join-Path $candidate "poster.webp"
$sheet = Join-Path $candidate "contact-sheet.jpg"

# Original procedural sound design: room tone, sub-drone, restrained heartbeat,
# one glass fracture, and a short transfer signal. No external music or samples.
ffmpeg -y `
  -f lavfi -i "anoisesrc=d=40:c=pink:r=48000" `
  -f lavfi -i "sine=f=48:d=40:r=48000" `
  -f lavfi -i "sine=f=72:d=40:r=48000" `
  -f lavfi -i "anoisesrc=d=0.55:c=white:r=48000" `
  -f lavfi -i "sine=f=111:d=1.2:r=48000" `
  -filter_complex "[0:a]highpass=f=90,lowpass=f=6000,volume='0.012+0.012*between(t,9,25)+0.025*between(t,25,34)':eval=frame[room];[1:a]lowpass=f=85,volume='0.025+0.04*between(t,9,34)':eval=frame[drone];[2:a]lowpass=f=100,volume='if(lt(mod(t,1.12),0.10),0.16,0.0)':eval=frame[heart];[3:a]highpass=f=1800,lowpass=f=7600,afade=t=out:st=0:d=0.55,volume=0.20,adelay=25000|25000[glass];[4:a]afade=t=in:st=0:d=0.12,afade=t=out:st=0.55:d=0.65,volume=0.09,adelay=32000|32000[signal];[room][drone][heart][glass][signal]amix=inputs=5:duration=longest:normalize=0,alimiter=limit=0.70,loudnorm=I=-24:LRA=8:TP=-2[a]" `
  -map "[a]" -t 40 -ar 48000 -ac 2 -c:a pcm_s16le $audio

# Preserve the already-approved clean VP9 picture and add the new Opus mix.
ffmpeg -y -i $source -i $audio -map 0:v:0 -map 1:a:0 -c:v copy -c:a libopus -b:a 96k -shortest $webm

# Review-friendly H.264 copy kept below the repository's 10 MiB budget.
ffmpeg -y -i $source -i $audio -map 0:v:0 -map 1:a:0 -c:v libx264 -preset medium -b:v 1400k -maxrate 1750k -bufsize 3500k -pix_fmt yuv420p -r 24 -c:a aac -b:a 96k -shortest -movflags +faststart $mp4

ffmpeg -y -ss 31 -i $mp4 -frames:v 1 -c:v libwebp -q:v 72 $poster
ffmpeg -y -i $mp4 -vf "fps=1/2,scale=384:216,tile=5x4" -frames:v 1 -q:v 3 $sheet

ffprobe -v error -show_format -show_streams -of json $webm | Set-Content -Encoding utf8 (Join-Path $candidate "ffprobe-webm.json")
ffprobe -v error -show_format -show_streams -of json $mp4 | Set-Content -Encoding utf8 (Join-Path $candidate "ffprobe-mp4.json")

$manifest = [ordered]@{
    version = "v3-previs"
    status = "PREVIS_NOT_RUNTIME_APPROVED"
    visual_source = "public/assets/cinematics/promotional/echo-network-part1-opening-anime-animatic-v1.webm"
    visual_source_method = "clean project-authored seven-plate Blender animatic"
    sound_source = "procedural FFmpeg synthesis; no external music or samples"
    duration_seconds = 40
    resolution = "1920x1080"
    fps = 24
    build_script = "build_previs.ps1"
}
$manifest | ConvertTo-Json -Depth 4 | Set-Content -Encoding utf8 (Join-Path $candidate "workflow.json")

Write-Host "Built candidate PREVIS outputs in $candidate"
