"use strict"
const splitNum = require ('@sovpro/split-num')
const unfloat = require ('@sovpro/unfloat')
splitFloat.lazy = splitLazy

module.exports = splitFloat

function splitFloat (val) {
  const faf = getFixedAndFloating (val)
  return [
    splitNum (faf[0]) ,
    splitNum (faf[1])
  ]
}

function splitLazy (val) {
  const faf = getFixedAndFloating (val)
  return [
    splitNum.lazy (faf[0]) ,
    splitNum.lazy (faf[1])
  ]
}

function getFixedAndFloating (val) {
  const num = Math.abs (val)
  return [
    Math.floor (num) ,
    unfloat (num)
  ]
}

