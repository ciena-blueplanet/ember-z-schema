'use strict'

const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'z-schema',

  treeForAddon (tree) {
    // NOTE: we are using the "dist" directory instead of "src" because with "src" we get
    // errors about failing to require "./Polyfills"
    const zSchemaPath = path.dirname(require.resolve('z-schema/dist/ZSchema-browser.js'))

    // NOTE: we are using a funnel to only select the file we want because if we use:
    //
    //   const zSchemaTree = this.treeGenerator(zSchemaPath)
    //
    // instead we get an error from the ZSchema-browser-test.js file
    const zSchemaFunnel = new Funnel(zSchemaPath, {
      include: [
        'ZSchema-browser.js'
      ]
    })

    const trees = mergeTrees([zSchemaFunnel, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
