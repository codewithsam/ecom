/** @type {import('next').NextConfig} */

import { NextFederationPlugin } from "@module-federation/nextjs-mf";
const nextConfig = {
    images: {
        domains: ['placehold.co']
    },
    webpack(config) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'remoteEntry.js',
                remotes: {
                    remote: 'remote@http://localhost:8082/remoteEntry.js',
                },
                exposes: {
                    // Expose modules from the Host application
                },
                shared: {
                    // Shared dependencies between the Host and Remote applications
                },
            })
        )
    }
};

export default nextConfig;
