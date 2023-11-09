//@Link  : https://leetcode.com/problems/two-sum/description/ 

var twoSum = function(nums, target) {
    // basic approch
    //iterate in both array from beginning 
    /*
    for(let i=0;i<nums.length;i++)
    {
        for(let j=0;j<nums.length;j++)
        {
            if(nums[i] + nums[j] == target && i!=j)
            {
                return [i,j];
            }
        }
    }*/

    //optimization according to me
    //we can reduce the count of loop child loop does not need to start from beginning every time, we can start it from i+1
    
    /*for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]+nums[j]==target)
            {
                return [i,j]
            }
        }
    }*/
    
    //optimized approach using Object in O(n)
    
    let map = {};
    let len = nums.length;
  
    for (let i=0; i<len; i++){
        let el = nums[i];
        let diff = target - el;
        if((map[diff] !== undefined)){
            let posX = map[diff].position;
                return [posX, i]
        }
        map[el] = {position: i};
    }

};