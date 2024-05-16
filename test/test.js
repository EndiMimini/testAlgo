// requirement
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

function addFirstElement(myArray, desiredValue) {
  for (let i = myArray.length; i > 0; i--) {
    myArray[i] = myArray[i - 1];
  }
  return myArray;
}

console.log(addFirstElement([2, 3, 7], 6));
