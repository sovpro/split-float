# Split Float

Split a floating number into two arrays or two iterable values of single-digit numbers.

[![Build status for Node.js 4.x and newer](https://github.com/sovpro/split-float/workflows/Node.js%204.x%20and%20newer%20/badge.svg?branch=master)](https://github.com/sovpro/split-float/commits/master)

## Split into two arrays

```js
let split_arrays = splitFloat (123.456)
let integer_digits = split_arrays[0]
let floating_digits = split_arrays[1]
```

## Split into two iterable values

```js
let split_iterables = splitNum.lazy (123.456)
let integer_sigits = split_iterables[0]
let floating_sigits = split_iterables[1]
for (let digit of integer_digits) {
  // ... do stuff with integer digit
}
for (let digit of floating_digits) {
  // ... do stuff with floating digit
}
```
