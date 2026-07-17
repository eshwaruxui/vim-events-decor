#!/bin/bash
set -e

cd "$(dirname "$0")/.."

mkdir -p public/images/gallery
mkdir -p public/images/case-studies

cat > public/images/placeholder.svg <<'SVG'
<svg xmlns="http://www.w3.org/2000/svg"
     width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#F0ECE5"/>
  <text x="50%" y="48%"
        font-family="serif"
        font-size="24"
        fill="#C9A96E"
        text-anchor="middle">VIM Events &amp; Décor</text>
  <text x="50%" y="56%"
        font-family="serif"
        font-size="14"
        fill="#bba89a"
        text-anchor="middle">Photo coming soon</text>
</svg>
SVG

echo "Created public/images/placeholder.svg"
echo "Created public/images/gallery/ and public/images/case-studies/"
echo "Real photos for gallery items and case studies are not yet uploaded — components fall back to placeholder.svg via onError until they are."
