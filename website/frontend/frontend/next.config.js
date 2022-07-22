const path = require('path');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*/',
        destination: ${process.env.BACKEND_BASE_URL}/api/:path*/,
      },
    ];
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['ar'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. /hello
    defaultLocale: 'ar',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    // ],
  },
  exclude: /\.svg$/,
  poweredByHeader: false,
  inlineImageLimit: false,
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
        // test: /\.(js|ts)x?$/,
      },
      use: [require.resolve('@svgr/webpack')],
      // use: ['@svgr/webpack'],
      // use: [
      //   {
      //     loader: require.resolve('@svgr/webpack'),
      //     options: {
      //       prettier: false,
      //       svgo: true,
      //       svgoConfig: { plugins: [{ removeViewBox: false }] },
      //       titleProp: true,
      //     },
      //   },
      // ],
    });

    return config;
  },

};

module.exports = nextConfig;