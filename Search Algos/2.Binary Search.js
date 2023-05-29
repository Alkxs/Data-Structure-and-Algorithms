// Problem 
// Given a sorted array of 'n' elements and a target element 't',find the index of 't'in the array. Return -1 if the element is not found.

// examples:
//1 arr = [-5, 2, 4, 6, 10], t=10 -> should return 4
//2 arr = [-5, 2, 4, 6, 10], t=6 -> should return 3
//3 arr = [-5, 2, 4, 6, 10], t=20 -> should return -1

//pseudocode:
// - If the array is empty, return -1 as the element cannot be found
// - If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
// - If target is less than the middle element, binary search left half of the array
// - If target is greater than middle element, binary search right half of the array

 

function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length-1

  while (leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )
    if (target === arr[middleIndex]){
      return middleIndex
    }
    if(target < arr[middleIndex]) {
      rightIndex = middleIndex -1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10],10)) //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) //-1 

// Big-O = O(logn)

//Notes:
// binary search only works on sorted Array; if the array is not sorted, either you use linear search or sort the array first

// Follows the divide and conquer approach