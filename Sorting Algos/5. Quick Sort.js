// Problem 
//Given an array of integers, sort the array

// examples:
// const arr = [-6, 20, 8, -2, 4]
// quickSort(arr) => Should return [-6, -2, 4, 8,20]

//pseudocode:
//1. Identify first element as pivot
//2. Pick first element as pivot 
//3. Pick last element as pivot (my approach)
//4. Pick a random element as pivot
//5. Pick median as pivot
//Put everything that's smaller than the pivot into a 'left'array and everything that's greater than the pivot into a 'right'array
//Repeat the process for the individual left and right arrays till you have an array of length 1 which is sorted by definition
//Repeatedly concatenate the left array, pivot and right array till one sorted array remains

function quickSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [-6, 20, 8, -2, 4]
console.log(quickSort(arr)) // [-6, -2, 4, 8,20]

// Big-O = O(nlogn)

// Notes

// like merge sort, exploits the fact that arrays of 0 or 1 are always sorted.
// Works by selecting one element(called the pivot) and finding the index where the pivot should end up in the sorted array

// Compared to merge sort it does not require extra storage has it is an in-place algo, for this it is preferred with large arrays arrays where memory it's a concern. Also better for numeric arrays