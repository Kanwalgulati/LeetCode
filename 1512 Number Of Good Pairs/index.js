//@https://leetcode.com/problems/number-of-good-pairs/description/

var numIdenticalPairs = function(nums) {
    //Naive Approach
    /*let goodPairsCount = 0;
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length;j++)
        {
            if(nums[i]==nums[j] && i<j)
            {
                goodPairsCount++;
            }
        }
    }
    return goodPairsCount; 
    */
    //Slightly optimized
    /*
    let goodPairsCount = 0;
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]==nums[j])
            {
                goodPairsCount++;
            }
        }
    }
    return goodPairsCount; 
    */
    //Using Object and in O(n)
    // Initialize a counter variable to keep track of the number of identical pairs
    let counter = 0;
    
    // Create an empty object to serve as a map for counting occurrences of each number
    let map = {};
    
    // Iterate through each number in the input array 'nums'
    for (let num of nums) {
        // Check if the current number already exists in the map
        if (map[num]) {
            // If the number already exists, increment the counter by the current count in the map
            counter += map[num];
            
            // Increment the count for the current number in the map
            map[num]++;
        } else {
            // If the number doesn't exist in the map, initialize its count to 1
            map[num] = 1;
        }
    }
    
    // Return the final count of identical pairs
    return counter;

};