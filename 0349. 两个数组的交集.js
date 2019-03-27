// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]

// 示例 2:
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]

// 说明:
//     输出结果中的每个元素一定是唯一的。
//     我们可以不考虑输出结果的顺序。

var intersection = function(nums1, nums2) {
    // let result = [];
    let set1 = new Set(nums1);
    let arr1 = [...set1];
    let set2 = new Set(nums2);
    let arr2 = [...set2];
    var arr3 = arr2.filter(function(v){
            return arr1.indexOf(v) !== -1;
        });
    return arr3;
};
console.log(intersection([4,9,5], [9,4,9,8,4]));

