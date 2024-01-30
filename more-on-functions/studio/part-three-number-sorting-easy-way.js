//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
function findMinValue(arr){
    let min = arr[0];
    
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
        } 
   
    }
   
    return min;
  
  }
  function sortArray(arr){
    let sorted = [];
    let arrCopy= [] 
    arrCopy= arr;
    while(arrCopy.length !=0){
  let min = findMinValue(arr)
  sorted.push(min)
  arrCopy.splice(arrCopy.indexOf(min),1) 
  }
  return sorted
  }
//Sort each array in ascending order.

    console.log(sortArray(nums1))  
    console.log(sortArray(nums2))
    console.log(sortArray(nums3))
//Sort each array in decending order.
    
function findMaxValue(arr){
    let max = arr[0];
    
    for (i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i]
        } 
   
    }
   
    return max;
  
  }

  function sortArrayDescending(arr){
    let sorted = [];
    while(arr.length !=0){
  let max = findMaxValue(arr)
  sorted.push(max)
  arr.splice(arr.indexOf(max),1) 
  }
  return sorted
  }

  console.log(sortArrayDescending(nums1))
  console.log(sortArrayDescending(nums2))
  console.log(sortArrayDescending(nums3))