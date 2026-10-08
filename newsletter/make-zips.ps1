# Packs each newsletter/*.html into a ZIP for MailerLite's "Import HTML code".
# MailerLite only shows images reliably when they're inside the ZIP, so the
# images from public/email/ are copied in and the <img> links made relative.
#
# Run (after `node newsletter/build.mjs`):
#   powershell -File newsletter/make-zips.ps1

$root = Split-Path $PSScriptRoot -Parent
$tmp = Join-Path $env:TEMP "sk-zip"

Get-ChildItem "$PSScriptRoot\*.html" | ForEach-Object {

    Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
    New-Item -ItemType Directory "$tmp\images" -Force | Out-Null

    $html = Get-Content $_.FullName -Raw -Encoding UTF8

    foreach ($m in [regex]::Matches($html, 'src="https://www\.statuskay\.com/email/([^"]+)"')) {
        Copy-Item "$root\public\email\$($m.Groups[1].Value)" "$tmp\images\"
    }

    $html = $html -replace 'src="https://www\.statuskay\.com/email/', 'src="images/'
    [IO.File]::WriteAllText("$tmp\index.html", $html, (New-Object Text.UTF8Encoding($false)))

    $zip = Join-Path $PSScriptRoot ($_.BaseName + ".zip")
    Remove-Item $zip -ErrorAction SilentlyContinue
    Compress-Archive -Path "$tmp\index.html", "$tmp\images" -DestinationPath $zip

    "{0}: {1}" -f (Split-Path $zip -Leaf), ((Get-ChildItem "$tmp\images").Name -join ", ")

}

Remove-Item $tmp -Recurse -Force
