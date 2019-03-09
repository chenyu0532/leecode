// 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。
// 每次移动可以使 n - 1 个元素增加 1。

// 示例:
// 输入:
// [1,2,3]
// 输出:
// 3

// 解释:
// 只需要3次移动（注意每次移动会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

////////这是一道数学题，不用看了///////////////
var minMoves = function(nums) {
    let min = Number.MAX_VALUE;
    for( let i = 0; i < nums.length; i++){
        if( min > nums[i])
            min = nums[i];
    }
    
    let result = 0;
    for( let i = 0; i < nums.length; i++){
        result += nums[i];
    }
    return result - nums.length * min;
};
console.log(minMoves([1,2,3]));


