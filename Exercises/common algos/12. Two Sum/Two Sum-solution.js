// Brute force

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

// Two pointers technique

function twoSum(nums, target) {
  let start = 0,
    end = nums.length - 1
  while (start < end) {
    let sum = nums[start] + nums[end]
    if (sum === target) {
      return [start, end]
    } else if (sum < target) {
      start++
    } else {
      end--
    }
  }
  return []
}

// with hash map

function twoSum(nums, target) {
  let numMap = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i]
    }
    numMap[nums[i]] = i
  }
  return []
}
