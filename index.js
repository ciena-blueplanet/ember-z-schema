'use strict'

const commonJsTransform = require('5to6-codemod/transforms/cjs')
const exportsTransform = require('5to6-codemod/transforms/exports')
const jscodeshift = require('jscodeshift')
const mergeTrees = require('broccoli-merge-trees')
const metal = require('broccoli-metal')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'z-schema',

  _convertCommonJsToEs6 (tree) {
    return metal(tree, (files) => {
      Object.keys(files).forEach((key) => {
        // Ignore non-Javascript files
        if (!/\.js$/.test(key)) {
          return
        }

        const source = files[key]

        const transformedSource = [
          commonJsTransform,
          exportsTransform
        ]
          .reduce(
            (source, transformFn) => {
              return transformFn({source}, {jscodeshift})
            },
            source
          )

        files[key] = transformedSource
      })
    })
  },

  _fixZSchemaConversionBugs (tree) {
    return replace(tree, {
      files: [
        '**/*.js'
      ],
      patterns: [
        {
          match: /export function \(/g,
          replacement: 'export function validate ('
        },
        {
          match: /export let getRemotePath = getRemotePath/g,
          replacement: ''
        },
        {
          match: /function getRemotePath/g,
          replacement: 'export function getRemotePath'
        }
      ]
    })
  },

  _fixZSchemaRequirePaths (tree) {
    return replace(tree, {
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
  },

  _getZSchemaTree () {
    const zSchemaPath = path.dirname(require.resolve('z-schema/src/ZSchema.js'))
    const zSchemaTree = this.treeGenerator(zSchemaPath)

    return [
      this._fixZSchemaRequirePaths,
      this._convertCommonJsToEs6,
      this._fixZSchemaConversionBugs
    ]
      .reduce((tree, broccoliFn) => broccoliFn.call(this, tree), zSchemaTree)
  },

  treeForAddon (tree) {
    const zSchemaTree = this._getZSchemaTree()

    const trees = mergeTrees([zSchemaTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
