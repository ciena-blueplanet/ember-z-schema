import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'
import ZSchema from 'z-schema'

it('z-schema is a single module that has been exported', function () {
  expect(typeof ZSchema).to.equal('function')
})

;[
  'getRegisteredFormats',
  'registerFormat',
  'setSchemaReader'
]
  .forEach((key) => {
    it(`has ${key} method`, function () {
      expect(typeof ZSchema[key]).to.equal('function')
    })
  })

describe('new instance', function () {
  let validator

  beforeEach(function () {
    validator = new ZSchema()
  })

  ;[
    'getLastError',
    'getLastErrors',
    'setRemoteReference',
    'validate',
    'validateSchema'
  ]
    .forEach((key) => {
      it(`has ${key} method`, function () {
        expect(typeof validator[key]).to.equal('function')
      })
    })
})
