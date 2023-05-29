// Problem 
// Given an array of integers, sort the array

// examples:
//1 const arr = [-6, 20, 8, -2, 4] - bubblesort(arr)=> should return [-6, -2, 4, 8, 20]
//2 const arr = [-6, 20, 8, -2, 4]
//3 const arr = [-6, 20, 8, -2, 4]

//pseudocode:
//Start looping from with a variable called i the end of the array towards the beginning
//Start an inner loop with a variable called j from the beginning until i - 1
//if arr[j] is greater than arr[j+1], swap those two values
//return the sorted array

1. function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

2. function bubbleSort(arr){
  let noSwaps
  
  const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

for (let i = arr.length; i > 0; i--) {
  noSwaps=true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              swap(arr, j, j + 1)
              noSwaps=false
            }
        }
        if(noSwaps) break
    }
    return arr
}
 

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) //[-6, -2, 4, 8, 20] 

// Big-O = O(nˆ2)g

// Notes
// poor sorting algo, usually used to introduction to sort algos

*** Swapping in JS

1. function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

2. const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}