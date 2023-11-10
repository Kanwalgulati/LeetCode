//@https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

 //Using Loop And Switch Case
/*var finalValueAfterOperations = function(operations) {
    let count = 0;
    for(let i=0;i<operations.length;i++)
    {
        switch(operations[i])
        {
            case "--X":
            case "X--":
            {
                count=count-1;
                break;
            }
            case "X++":
            case "++X":
            {
                count=count+1;
                break;
            }
            
        }
    }
  return count;  
};
*/
//Using reduce and includes js function 
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acc, operation) => {
        if (["++X", "X++"].includes(operation)) {
            acc++;
        } else {
            acc--;
        }
        return acc;
    }, 0);
};