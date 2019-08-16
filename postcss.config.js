const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
  sourceMap: true,
  ident: 'postcss',
  plugins: [
    postcssFlexbugsFixes,
    tailwindcss('./tailwind.js'),
    autoprefixer({
      grid: true,
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9' // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009' // I'd opt in for this - safari 9 & IE 10.
    })
  ]
}
