// 给定一个整数数组 A，只有我们可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

// 形式上，如果我们可以找出索引 i+1 < j 且满足 
// (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

// 示例 1：
// 输出：[0,2,1,-6,6,-7,9,1,2,0,1]
// 输出：true
// 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// 示例 2：
// 输入：[0,2,1,-6,6,7,9,-1,2,0,1]
// 输出：false

// 示例 3：
// 输入：[3,3,6,5,-2,2,5,1,-9,4]
// 输出：true
// 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

// 提示：

//     3 <= A.length <= 50000
//     -10000 <= A[i] <= 10000

/**
 * @param {number[]} A
 * @return {boolean}
 */
// var canThreePartsEqualSum = function(A) {
//     let sum = A.reduce((prev, cur)=> prev + cur);
//     if (sum % 3 !== 0) return false;
//     let avg = sum / 3;
//     let res = 0;
//     let o = 0;
//     for(let i = 0; i < A.length; i++) {
//     	o += A[i];
//     	if (o === avg) {
//     		res++;
//     		o = 0;
//     	}
//     }
//     return res === 3;
// };

var canThreePartsEqualSum = function(A) {
    let sum = A.reduce((prev, cur)=> prev + cur);
    if (sum % 3 !== 0) return false;
    let avg = sum / 3;
    let i = 0, j = A.length - 1, lsum = 0, rsum = 0, res = false;
    while(i < j) {
    	if (lsum !== avg) {
    		lsum += A[i];
    		i++;
    	}
    	if (rsum !== avg) {
    		rsum += A[j];
    		j--;
    	}
    	if (lsum === avg && rsum === avg) {
    		res = true;
    		break;
    	}
	}
	return res;    
};
console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]));

