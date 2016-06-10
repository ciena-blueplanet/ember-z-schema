import {expect} from 'chai'
import {it} from 'mocha'
import zSchema from 'z-schema'

it('z-schema is a single module that has been exported', function () {
  expect(zSchema).to.be.defined
  expect(typeof zSchema).to.equal('object')
})
