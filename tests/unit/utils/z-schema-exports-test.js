import {expect} from 'chai'
import {it} from 'mocha'
import ZSchema from 'z-schema'

it('z-schema is a single module that has been exported', function () {
  expect(ZSchema).to.be.defined
  expect(typeof ZSchema).to.equal('function')
})
