<#
Compresses every .jpg in src/assets (recursively) for web use:
- scales down so the longest side is max 1600px (only if larger)
- re-encodes as JPEG at high quality (q:v 4)
Run again any time you drop a new photo in.
#>

$assetsDir = Join-Path $PSScriptRoot "..\src\assets"

Get-ChildItem -Path $assetsDir -Filter "*.jpg" -Recurse | ForEach-Object {

    $input = $_.FullName
    $temp = "$input.tmp.jpg"
    $originalSizeKB = [math]::Round($_.Length / 1KB, 0)

    Write-Host "Compressing $($_.Name) ($originalSizeKB KB)..."

    ffmpeg -y -i "$input" -vf "scale='if(gt(iw,ih),min(1600,iw),-2)':'if(gt(ih,iw),min(1600,ih),-2)'" -q:v 4 "$temp" 2>$null

    Move-Item -Force $temp $input

    $newSizeKB = [math]::Round((Get-Item $input).Length / 1KB, 0)

    Write-Host "  -> $newSizeKB KB"

}

Write-Host "`nDone."
