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

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)
}

  function search(arr, target, leftIndex, rightIndex) {
    if(leftIndex > rightIndex){
      return - 1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
      return middleIndex
    }

    if(target < arr[middleIndex]) {
      return search(arr, target, leftIndex, middleIndex - 1)
    } else {
      return search(arr, target, middleIndex + 1, rightIndex)
    }
  }



console.log(recursiveBinarySearch([-5, 2, 4, 6, 10],10)) //4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) //3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) //-1  

// Big-O = O(logn)

// Notes