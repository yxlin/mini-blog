import remarkMath from 'remark-math'
import createMDX from '@next/mdx'


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [],
      },
})
   
// Merge MDX config with Next.js config
export default withMDX(nextConfig)