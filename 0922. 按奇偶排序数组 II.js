// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
// 你可以返回任何满足上述条件的数组作为答案。

// 示例：
// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

// 提示：
//     2 <= A.length <= 20000
//     A.length % 2 == 0
//     0 <= A[i] <= 1000
var sortArrayByParityII = function(A) {
    let len = A.length;
    for(let i = 0, j = 1; i < len; i += 2,j += 2){
    	while(i < len && A[i] % 2 === 0){
    		i += 2;
    	}
    	while(j < len && A[j] % 2 !== 0){
    		j += 2;
    	}
    	if(i < len && j < len){
			[A[i], A[j]] = [A[j], A[i]];
    	}
    	
    }
    return A;
};
console.log(sortArrayByParityII([2, 3]));