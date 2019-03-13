module.exports = {
  plugins: [
    require('postcss-import')({
      importPaths: ['src/style'],
    }),
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('cssnano')
  ]
}