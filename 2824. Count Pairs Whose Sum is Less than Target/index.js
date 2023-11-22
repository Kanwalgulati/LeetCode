//@https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Naive Approch
/*var countPairs = function(nums, target) {
    let pairCount = 0;
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]+nums[j]<target)
            {
                pairCount++;
            }
        }
    }
    return pairCount;
};*/

//Optimized Approach {Two Pointers Approch} O(N)2

/*var countPairs = function(nums, target){
    let left = 0;
    let right = 1;
    let counter = 0;
    while(left < nums.length -1){
        let sum = nums[left] + nums[right];
        if(sum < target) { 
            counter++;
        } 

        if(right === nums.length -1){
            left++;
            right = left+1;
        } else {
            right++;
        }
    }
    return counter;
}*/

//By sorting O(nLogn)

var countPairs = function(nums, target) {
    let counter = 0;
    let left = 0;
    let right = nums.length - 1;
    nums.sort((a,b) => a-b);
  while(left <= right) {
      if(nums[left] + nums[right] < target) {
        counter += (right - left);
        left++;
      } else{
        right--;
      }
  }
  
  return counter;
  
};
