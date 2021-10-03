const assert = require('assert')
const should = require('should')
const mod = require('../foo')

describe('foo module', function () {
    describe('foo.foo()', function () {
        it('should return a string', function () {
            const val = mod.foo()
            should(val).be.String()
        })
    })
})
