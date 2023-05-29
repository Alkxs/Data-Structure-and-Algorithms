// Problem
// Given an array of integers, sort the array.

// examples:
//1 const arr = [-6, 20, 8, -2, 4] - insertionSort(arr)=> should return [-6, -2, 4, 8, 20]

// Notes:
// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// Pseudocode

//1. Store the first element as the smallest value you've seen so far.
//2. Compare this item to the next item in the array until you find a smaller number
//3. If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array.
//4 If the minimum is not the value index you initially began with, swap the two values.
//5. Repeat this with the next element until the array is sorted

// Solution

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for(let i = 0; i < arr.length; i++) {
    let lowest = i
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if(i !== lowest) {
      swap(arr, i, lowest)
    } 
  }
  
  return arr
}

//Tests

console.log(selectionSort([34, 22, 10, 19, 17])) // [10,17,19,22,34]

//Big 0 = O(nˆ2)