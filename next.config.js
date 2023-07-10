/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    distDir: 'dist',
    experimental: {
        mdxRs: true,
    },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
