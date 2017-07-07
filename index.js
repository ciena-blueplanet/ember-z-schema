/* eslint-env node */
'use strict'

module.exports = {
  name: 'z-schema',

  included (parent) {
    this._super.included(parent)

    this.import({
      development: 'vendor/z-schema/z-schema.js',
      production: 'vendor/z-schema/z-schema.min.js'
    })
  }
}
