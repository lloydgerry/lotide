# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lloydgerry/lotide`

**Require it:**

`const _ = require('@lloydgerry/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1,array2)`: takes in two arrays and compares them in JSON as strings to see if they are equal, logs to screen.
* `assertEqual(actual,expected)`: takes in two primitives as variables and compares to see if they are equal.
* `assertObjectsEqual(object1,object2)`: compares two objects to see if they are equal.
* `countLetters(stringCounted)`: input a string and returns an object with keys as letters, and their subsequent count as key value.
* `countOnly(allItems,itemsToCount)`: inputs two arrays, and returns an object. Keys are items that match from both arraysys and the count matching values as the key value.
* `eqArrays(array1,array2)`: using JSON stringify to compare two arrays, a match is true.
* `eqObjects(object1,object2)`: compares two objects to see if they are equal.
* `findKey(object,callback)`: takes in an object and a callback function, the function should be the the key we would like to return(find); finds first only.
* `head(array)`: inputs an array and finds the value if the first(zero) index
* `letterPositions(sentence)`: inputs a string and returns an object.  Keys are the letters, and the key values are the count of those letters in string.
* `map(array,callback)`: inputs an array and a callback function and returns an array.
* `middle(arrayMid)`: inputs array, and finds the middle value (odd) or middle two values (even) as a new array.
* `tail(array)`: inputs an array and returns a new array splicing out first index.
* `takeUntil(array, callback)`: inputs an array and a callback function, returns new array using the callback function as a cutoff point.
* `without(sourceArr,removeItemsArr)`: takes in two arrays, using the second(removeItemsArr) as items to remove from first array, returns new array.
