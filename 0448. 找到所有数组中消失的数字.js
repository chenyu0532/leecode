// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

// 示例:

// 输入:
// [4,3,2,7,8,2,3,1]

// 输出:
// [5,6]

//首先一点：最好不要用排序，因为在数组很大的时候速度会变慢

var findDisappearedNumbers = function(nums) {
    if (nums.length === 0) return [];
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], true);
    }
    let res = [];
    for(let i = 1; i <= nums.length; i++) {
        if (!map.get(i)) {
            res.push(i);
        }
    }
    return res;
};

// 原地哈希(其实跟上面方法差不多，只是不另外开辟空间而已)
// 推荐上述方法，易于理解
// var findDisappearedNumbers = function(nums) {
//     if (nums.length === 0) return [];
//     for(let i = 1; i < nums.length; i++) {
//         const v = nums[i];
//         if(nums[v - 1] > 0) {
//             nums[v - 1] *= -1;
//         }
//     }
//     let res = [];
//     for(let i = 1; i <= nums.length; i++) {
//         if (nums[i - 1] > 0) {
//             res.push(i);
//         }
//     }
//     return res;
// };
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))