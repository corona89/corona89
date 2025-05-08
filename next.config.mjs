/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.google.co.kr',
                port: '',
                pathname: '/logos/**',
            },
        ],
    },
};

export default nextConfig;
