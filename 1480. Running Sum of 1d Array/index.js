//@https://leetcode.com/problems/running-sum-of-1d-array/description/

var runningSum = function(nums) {
    let result = [nums[0]];
    for(let i=1;i<nums.length;i++)
    {
        result.push(result[i-1]+nums[i])
    }
    return result;
    
};