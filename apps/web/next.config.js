/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['placehold.co']
    },
    transpilePackages: [
        "@repo/ui",
    ],
};

export default nextConfig;
