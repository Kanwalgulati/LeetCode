//@https://leetcode.com/problems/concatenation-of-array/description/


var getConcatenation = function(nums) {
  
    //using spread operator
    return [...nums,...nums];
    //using loop
    let ans = [];
    for(let i=0;i<nums.length;i++)
    {
        ans[i] = nums[i];
        ans[nums.length+i] = nums[i];
    }
    return ans;
};