/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [
      [require.resolve("./my_first_plugin.wasm"),{}]
    ]
  },
}

module.exports = nextConfig
