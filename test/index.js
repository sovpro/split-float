"use strict";
const splitFloat = require ('./../')
const assert = require ('assert')

let error_count = 0

function assertWithInfo (actual, expected, message) {
  process.stdout.write (message)
  try {
    assert.deepEqual (actual, expected, message)
    console.log (' ... OK')
  }
  catch (error) {
    console.log (' ... FAIL')
    console.error (error)
    error_count += 1
  }
}

process.once ('exit', function (code) {
  process.exit (Math.min (1, error_count))
})

let result = splitFloat (123.456)
assertWithInfo (
    result
  , [[1, 2, 3], [4, 5, 6]]
  , 'The result array for 123.456 should contain all fixed and floating digits'
)

result = splitFloat (100)
assertWithInfo (
    result
  , [[1, 0, 0], []]
  , 'The result array for 100 should contain all fixed and no floating digits'
)

result = splitFloat.lazy (123.456)
assertWithInfo (
    [Array.from (result[0]), Array.from (result[1])]
  , [[1, 2, 3], [4, 5, 6]]
  , 'The lazy result array for 123.456 should contain all fixed and floating digits'
)

result = splitFloat.lazy (100)
assertWithInfo (
    [Array.from (result[0]), Array.from (result[1])]
  , [[1, 0, 0], []]
  , 'The lazy result array for 100 should contain all fixed and no floating digits'
)

