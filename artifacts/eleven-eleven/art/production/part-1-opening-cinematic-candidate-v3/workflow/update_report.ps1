$ErrorActionPreference = "Stop"
$out_dir = "artifacts\eleven-eleven\art\production\part-1-opening-cinematic-candidate-v3"

Write-Host "Calculating file sizes and hashes..."
$mp4 = Get-Item "$out_dir\master.mp4"
$webm = Get-Item "$out_dir\master.webm"
$poster = Get-Item "$out_dir\poster.webp"
$sheet = Get-Item "$out_dir\contact_sheet.jpg"

$mp4_hash = (Get-FileHash "$out_dir\master.mp4" -Algorithm SHA256).Hash
$webm_hash = (Get-FileHash "$out_dir\master.webm" -Algorithm SHA256).Hash

$report_path = "$out_dir\report.md"

$content = Get-Content $report_path -Raw
$content = $content -replace "\*\(To be populated after generation and transcoding\)\*", ""
$content = $content -replace "- `master.webm`: VP9 \+ Opus", "- `master.webm`: VP9 + Opus (Size: $([math]::Round($webm.Length / 1MB, 2)) MiB, SHA256: $webm_hash)"
$content = $content -replace "- `master.mp4`: H.264 \+ AAC", "- `master.mp4`: H.264 + AAC (Size: $([math]::Round($mp4.Length / 1MB, 2)) MiB, SHA256: $mp4_hash)"
$content = $content -replace "- `poster.webp`: WebP \(frame extracted at 00:25\)", "- `poster.webp`: WebP (Size: $([math]::Round($poster.Length / 1KB, 2)) KB, frame at 00:25)"
$content = $content -replace "- `contact_sheet.jpg`: 5x4 Grid", "- `contact_sheet.jpg`: 5x4 Grid (Size: $([math]::Round($sheet.Length / 1KB, 2)) KB)"

Set-Content -Path $report_path -Value $content
Write-Host "Report updated!"
