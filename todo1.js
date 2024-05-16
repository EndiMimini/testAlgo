// requirement
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

function addFirstElement(myArray, desiredValue) {
  for (let i = myArray.length; i > 0; i--) {
    myArray[i] = myArray[i - 1];
  }
  myArray[0] = desiredValue;
  return myArray;
}

console.log(addFirstElement([2, 3, 7], 6));

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!


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



// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
  function insert(arr, index, value){
    for (i=arr.length; i>index; i--){
      temp= arr[i-1]
      arr[i]= temp
    }
    arr[index]= value
    return arr
  }
  console.log(insert([4,7,3,9], 1, 0))
// Examples:

// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
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

// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.


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
  

