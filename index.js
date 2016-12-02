'use strict'

const commonJsTransform = require('5to6-codemod/transforms/cjs')
const exportsTransform = require('5to6-codemod/transforms/exports')
const jscodeshift = require('jscodeshift')
const json = require('broccoli-json-module')
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

  _convertJsonFilesToEs6Modules (tree) {
    return json(tree)
  },

  _fixZSchemaConversionBugs (tree) {
    return replace(tree, {
      files: [
        '**/*.js'
      ],
      patterns: [
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
          match: /var ([^=]+)\s*=\s*require\(("|')lodash\.([^"']+)("|')\)/g,
          replacement: 'var _ = require($2lodash$4);\nvar $1 = _.$3'
        },
        {
          match: /isequal/g,
          replacement: '= isEqual'
        },
        {
          match: /require\(("|')([^"']+)\.json("|')\)/g,
          replacement: 'require($1$2$3)'
        }
      ]
    })
  },

  _getZSchemaTree () {
    const zSchemaPath = path.dirname(require.resolve('z-schema/src/ZSchema.js'))
    const zSchemaTree = this.treeGenerator(zSchemaPath)

    return [
      this._prepForConversion,
      this._convertJsonFilesToEs6Modules,
      this._fixZSchemaRequirePaths,
      this._convertCommonJsToEs6,
      this._fixZSchemaConversionBugs
    ]
      .reduce((tree, broccoliFn) => broccoliFn.call(this, tree), zSchemaTree)
  },

  _prepForConversion (tree) {
    return replace(tree, {
      files: [
        '**/*.js'
      ],
      patterns: [
        {
          match: /exports\.([a-zA-Z0-9]+) = function \(/g,
          replacement: 'exports.$1 = function $1 ('
        },
        {
          match: /process\.nextTick/g,
          replacement: 'Ember.run.next'
        }
      ]
    })
  },

  treeForAddon (tree) {
    const zSchemaTree = this._getZSchemaTree()

    if (!tree) {
      return this._super.treeForAddon.call(this, zSchemaTree)
    }

    const trees = mergeTrees([zSchemaTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
