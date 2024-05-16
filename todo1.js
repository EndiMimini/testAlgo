function addFirstElement(myArray, desiredValue){
    for (i= myArray.length; i>0; i--) {
        myArray[i]= myArray[i-1]
    } 
    myArray[0]= desiredValue
  return myArray
}
console.log(addFirstElement([2,3,7,], 6))

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
    
