
import createWithBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = createWithBundleAnalyzer({
  // enabled: process.env.ANALYZE === 'true',
  enabled:false,
  openAnalyzer: true, 
});

export default withBundleAnalyzer({
  compress: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'], 
  },
});
