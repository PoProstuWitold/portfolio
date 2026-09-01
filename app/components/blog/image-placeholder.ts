function shimmer(width: number, height: number): string {
	return `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#333" />
  <rect width="${width}" height="${height}" fill="url(#g)" />
</svg>`
}

export function createImagePlaceholder(width: number, height: number): string {
	return `data:image/svg+xml,${encodeURIComponent(shimmer(width, height))}`
}
