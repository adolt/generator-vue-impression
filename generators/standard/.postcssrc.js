// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['last 90 version', '> 90%']
    },
    'postcss-pxtorem': {
      rootValue: 14,
      propList: ['*'],
      minPixelValue: 1,
      selectorBlackList: [/^html$/]
    }
  }
}
