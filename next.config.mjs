/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to plain static files in out/ so GitHub Pages can host the site
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig