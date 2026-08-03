<#
Compresses every .mp4 in src/assets/videos for web use:
- scales down to max 1280px width (background banner videos never need more)
- H.264, CRF 30, no audio, faststart (progressive playback)
Run again any time you drop a new video into that folder.
#>

$videosDir = Join-Path $PSScriptRoot "..\src\assets\videos"
$tempDir = Join-Path $videosDir "_compressed"

New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

Get-ChildItem -Path $videosDir -Filter "*.mp4" | ForEach-Object {

    $input = $_.FullName
    $output = Join-Path $tempDir $_.Name
    $originalSizeMB = [math]::Round($_.Length / 1MB, 1)

    Write-Host "Compressing $($_.Name) ($originalSizeMB MB)..."

    ffmpeg -y -i "$input" -vf "scale='min(1280,iw)':-2,fps=15" -c:v libx264 -crf 30 -preset slow -an -movflags +faststart "$output" 2>$null

    $newSizeMB = [math]::Round((Get-Item $output).Length / 1MB, 1)

    Write-Host "  -> $newSizeMB MB"

}

Get-ChildItem -Path $tempDir -Filter "*.mp4" | ForEach-Object {
    Move-Item -Force $_.FullName (Join-Path $videosDir $_.Name)
}

Remove-Item -Force -Recurse $tempDir

Write-Host "`nDone. Originals were overwritten in place."
