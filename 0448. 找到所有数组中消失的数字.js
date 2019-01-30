// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

// 示例:

// 输入:
// [4,3,2,7,8,2,3,1]

// 输出:
// [5,6]

//首先一点：最好不要用排序，因为速度会变慢

//discuss里的方法太技巧了。。。以下是：
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++){
    	let index = Math.abs(nums[i]) - 1;
    	if(nums[index] > 0){
    		nums[index] = -nums[index];
    	}
    }
    console.log(nums)
    let result = [];
    for(let i = 0; i < nums.length; i++){
    	if(nums[i] > 0){
    		result.push(i + 1);
    	}
    }
    return result;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))