const path = require('path')
const { readdirSync, existsSync } = require('fs')

module.exports = function (moduleOptions) {
  const filename = 'nacelle-justuno-plugin.client.js'
  const options = {
    ...this.options.nacelle,
    ...moduleOptions
  }

  // Copy components
  const componentsDir = path.resolve(__dirname, 'components')

  if (existsSync(componentsDir)) {
    for (const file of readdirSync(componentsDir)) {
      this.addTemplate({
        src: path.resolve(__dirname, './components', file),
        fileName: path.join('nacelle', 'integrations', file)
      })
    }
  }

  // Add plugin to nuxt
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: filename,
    options
  })
}

module.exports.meta = require('../package.json')
