$ErrorActionPreference = "Stop"
$input_file = "artifacts\eleven-eleven\art\production\part-1-opening-cinematic-candidate-v3\master_original.mp4"
$out_dir = "artifacts\eleven-eleven\art\production\part-1-opening-cinematic-candidate-v3"

Write-Host "Transcoding to WebM..."
ffmpeg -y -i $input_file -c:v libvpx-vp9 -b:v 1500k -pass 1 -an -f null NUL
ffmpeg -y -i $input_file -c:v libvpx-vp9 -b:v 1500k -pass 2 -c:a libopus -b:a 128k "$out_dir\master.webm"

Write-Host "Transcoding to MP4..."
ffmpeg -y -i $input_file -c:v libx264 -b:v 1500k -pass 1 -an -f null NUL
ffmpeg -y -i $input_file -c:v libx264 -b:v 1500k -pass 2 -c:a aac -b:a 128k "$out_dir\master.mp4"

Write-Host "Generating poster..."
ffmpeg -y -i $input_file -ss 00:00:25 -vframes 1 -q:v 50 "$out_dir\poster.webp"

Write-Host "Generating contact sheet..."
ffmpeg -y -i $input_file -vf "select=not(mod(n\,48)),scale=320:-1,tile=5x4" -frames:v 1 -q:v 2 "$out_dir\contact_sheet.jpg"

Write-Host "Running FFprobe validation..."
ffprobe -v error -show_format -show_streams "$out_dir\master.webm" > "$out_dir\ffprobe_webm.txt"
ffprobe -v error -show_format -show_streams "$out_dir\master.mp4" > "$out_dir\ffprobe_mp4.txt"

Write-Host "Done!"
