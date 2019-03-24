// 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。
// 最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。
// 以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。

// 示例 1：
// 输入：[1,2,3,4]
// 输出："23:41"

// 示例 2：
// 输入：[5,5,5,5]
// 输出：""

// 提示：
//     A.length == 4
//     0 <= A[i] <= 9
var largestTimeFromDigits = function(A) {
	let result = '';
    for(let i = 0; i < 4; i++) {
    	for(let j = 0; j < 4; j++) {
    		for (let k = 0; k < 4; k++) {
    			if(i == j || j == k || i == k) continue;
    			let h = "" + A[i] + A[j];
    			let m = "" + A[k] + A[6 - i - j - k];
    			let t = h + ":" + m;
    			if(h < '24' && m < "60" && result < t) {
    				result = t;
    			}
    		}
    	}
    }
    return result;
};
console.log(largestTimeFromDigits([0,0,0,0]));


