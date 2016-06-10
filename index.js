'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'z-schema',

  treeForAddon (tree) {
    const zSchemaPath = path.dirname(require.resolve('z-schema/src/ZSchema.js'))
    const zSchemaTree = this.treeGenerator(zSchemaPath)

    const zSchemaModifiedTree = replace(zSchemaTree, {
      files: [
        '**/*.js'
      ],
      patterns: [
        // Replace things like "require('./Polyfills')" with "require('z-schema/Polyfills')"
        {
          match: /require\(("|')\.\/([^"']+)("|')\)/g,
          replacement: 'require($1z-schema/$2$3)'
        },
        // Replace things like "require('lodash.get')" with "require('lodash').get"
        {
          match: /require\(("|')lodash\.([^"']+)("|')\)/g,
          replacement: 'require($1lodash$3).$2'
        }
      ]
    })

    const trees = mergeTrees([zSchemaModifiedTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
