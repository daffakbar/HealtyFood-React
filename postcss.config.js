const tailwindcss = require('tailwindcss');

module.exports = {
  // plugins: {
  //   tailwindcss: { config: './tailwindcss-config.js' },
  //   autoprefixer: {},
  // },
  plugins: [
    require('autoprefixer'),
    tailwindcss('./tailwind.config.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.js', './public/index.html'],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
}
