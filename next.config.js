const withAntdLess = require('next-plugin-antd-less')
const withSVG = require('./webpack-extends/svgr')
const env = require('./next-env')

const lessConfig = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  javascriptEnabled: true,
  webpack(config) {
    return config
  },
})

const svgConfig = withSVG(lessConfig)

module.exports = {
  ...svgConfig,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/ubox-api/:path*{/}?',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
      },
    ]
  },
env: {
   ...env
  },

}
