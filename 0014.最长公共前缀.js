// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 输入: ["flower","flow","flight"]
// 输出: "fl"


//////感觉这个比较好理解////////////
// var longestCommonPrefix = function(strs) {
// 	if(strs.length === 0) return "";
//     strs.sort((a, b)=>{
//         return a.length - b.length;
//     });
//     let len = strs.length - 1;
//     let res = ''
//     for(let i = 0; i < strs[0].length; i++) {
//         let j = -1;
//         let pre = strs[0][i];
//         let flag = true;
//         while(j < len) {
//             ++j;
//             const s1 = strs[j][i];
//             if (pre !== s1) {
//                 flag = false;
//                 break;
//             }
//             pre = s1;
//         }
//         if (flag) {
//             res += pre;
//         } else {
//             break;
//         }

//     }
//     return res;
// };


////上面实现更优雅的写法
// var longestCommonPrefix = function(strs) {
//     if(strs.length === 0) return "";
//     let prev = strs[0];
//     let res = '';
//     for(let i = 1; i < strs.length; i++) {
//         let j = 0;
//         for(; j < prev.length && j < strs[i].length; j++) {
//             if (prev[j] !== strs[i][j]) break;
//         }
//         prev = prev.substring(0, j);
//         if (prev === '') return '';
//     }
//     return prev;
// };


////取出最大和最小字符串，比较这两个就行
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    if(strs.length === 1) return strs[0];
    let min = 0, max = 0;
    for(let i = 1; i < strs.length; i++) {
        if (strs[i] < strs[min]) min = i;
        if (strs[i] > strs[max]) max = i;
    }
    for(let j = 0; j < strs[min].length; j++) {
        if(strs[min][j] !== strs[max][j]) {
            return strs[min].substring(0, j)
        }
    }
    return strs[min]
};
console.log(longestCommonPrefix(["flower","flow","flight"]));