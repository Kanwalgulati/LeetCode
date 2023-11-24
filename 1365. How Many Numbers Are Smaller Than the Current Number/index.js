//Naive Approch O(n)2

var smallerNumbersThanCurrent = function (nums) {
  let result = [...Array(nums.length).fill(0)];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        result[i] = result[i] + 1;
      }
    }
  }
  return result;
};

//Slightly  Optimized Approch Using sort O(nLogn)

var smallerNumbersThanCurrent = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b); // Create a sorted copy of the input array
  const map = {}; // Use a map to store the index of the smallest occurrence of each number
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    const num = sortedNums[i];
    if (!(num in map)) {
      map[num] = i; // Store the index of the smallest occurrence of the number
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(map[nums[i]]); // Retrieve the smallest index from the map for each number
  }

  return result;
};

// Optimized Approch O(n) Using Count Sort

var smallerNumbersThanCurrent = function (nums) {
  const counts = new Array(101).fill(0); // Create an array to count occurrences, considering the range of numbers from 0 to 100 inclusive
  const result = [];

  // Count occurrences of each number
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++;
  }
  // Calculate the cumulative count
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  // Build the result based on counts
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result.push(0);
    } else {
      result.push(counts[nums[i] - 1]);
    }
  }

  return result;
};
