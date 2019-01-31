// 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，
// 那么整个数组都会变为升序排序。
// 你找到的子数组应是最短的，请输出它的长度。

// 示例 1:

// 输入: [2, 6, 4, 8, 10, 9, 15]
// 输出: 5
// 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。

// 说明 :
//     输入的数组长度范围在 [1, 10000]。
//     输入的数组可能包含重复元素 ，所以升序的意思是<=。

//原来是复制出一个排序号的数组，跟原数组相比较。。。。66666大神果然多
var findUnsortedSubarray = function(nums) {
    let clone = [...nums];
    clone.sort(function(a, b){
    	return a- b;
    });
    let begin = 0;
    for(let i = 0; i < nums.length; i++){
    	if(nums[i] !== clone[i]){
    		begin = i;
    		break;
    	}
    }
    let end = 0;
    for(let i = nums.length - 1; i >= 0; i--){
    	if(nums[i] !== clone[i]){
    		end = i;
    		break;
    	}
    }
    return (begin === end) ? 0 : (end- begin + 1);
};
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));