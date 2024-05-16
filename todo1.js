// requirement
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]
// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]
// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:

// swap([1,2,3,4]) => [2,1,4,3]
// swap​(["Brendan",true,42]) => [true,"Brendan",42]
// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]

function addFirstElement(myArray, desiredValue) {
  for (let i = myArray.length-1; i > 0; i--) {
    myArray[i] = myArray[i - 1];
  }
  myArray[0] = desiredValue;
  return myArray;
}

console.log(addFirstElement([2, 3, 7], 6));

function popFront(myArray){
    myValue= myArray[0]
      for (i=0; i<myArray.length; i++) {
        temp= myArray[i+1]
        myArray[i]= temp
      } 
      myArray.length= myArray.length-1
    console.log(myValue)
    return myArray
  }
  console.log(popFront([1,2,3,4]))


  function insert(arr, index, value){
    for (i=arr.length; i>index; i--){
      temp= arr[i-1]
      arr[i]= temp
    }
    arr[index]= value
    return arr
  }
  console.log(insert([4,7,3,9], 1, 0))

  function remove(arr, index){
    val= arr[index]
    for (i=index; i<arr.length; i++){
      temp= arr[i+1]
      arr[i]= temp
    }
    console.log(val)
    arr.length= arr.length-1
    
    return arr
  }
  console.log(remove([4,7,3,9], 1))

  function swap(arr){
    for (i=0; i<arr.length; i+=2){
      if (arr[i+1] === undefined){
        break;
      }
      temp= arr[i]
      arr[i]= arr[i+1]
      arr[i+1]=temp
    }
    return arr
  }
  
  var array1 = [4,7,3,9]
  console.log(swap(array1))
  
  
  function swap(arr){
    var counter = 0
    for (i=0; i<arr.length; i++){
      if (arr[i] === arr[i+1]){
        arr[i+1] = arr[i+2]
        counter++
      }
      arr.length= arr.length-counter
    }
    return arr
  }
  
  var array1 = ['Nicole', 'Justin', 'Endi', 'Endi', 'Flogert', 'Angela', 'Angela', 'Mario']
  console.log(swap(array1))
    
