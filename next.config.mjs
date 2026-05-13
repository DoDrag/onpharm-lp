/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// GitHub Pages serves under /<repo>/. Override REPO to match the actual GitHub repo name.
const repo = process.env.GH_PAGES_REPO || 'onpharm-lp';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};

export default nextConfig;
