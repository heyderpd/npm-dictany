// requided's

const assert = require('assert')
const fs = require('fs')

const DICT = require('../npm/index')


// start test

const DictResponse = DICT({
  '20*': 'Sucess',
  '307': 'Use Proxy',
  '404': 'Not Found',
  '5*': 'Server Error',
  'DEFAULT': 'Unknown Error...' 
})

DictResponse('201') // 'Sucess'
DictResponse('503') // 'Server Error'
DictResponse('100') // 'Unknown Error...' 

describe('cleardep', function() {
  it('201', function() {
    assert.deepEqual(
      DictResponse('201'),
      'Sucess'
    )
  })

  it('307', function() {
    assert.deepEqual(
      DictResponse('307'),
      'Use Proxy'
    )
  })

  it('404', function() {
    assert.deepEqual(
      DictResponse('404'),
      'Not Found'
    )
  })

  it('503', function() {
    assert.deepEqual(
      DictResponse('503'),
      'Server Error'
    )
  })

  it('600', function() {
    assert.deepEqual(
      DictResponse('600'),
      'Unknown Error...'
    )
  })
})