var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  chocolateBars = ['foo', 1]
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element) {
  chocolateBars = [1, "foo"]
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo")
  return array
}

function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift()
   return array
}

function removeElementFromBeginningOfArray(array) {
   array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, -1)
  return array
}
