/** @type {import('next').NextConfig} */

export const images = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.metmuseum.org',
            port: '',
            pathname: '/CRDImages/**',
        },
    ],
};

