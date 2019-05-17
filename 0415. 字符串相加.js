// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：
//     num1 和num2 的长度都小于 5100.
//     num1 和num2 都只包含数字 0-9.
//     num1 和num2 都不包含任何前导零。
//     你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
//let a = pos < 0? 0: (num1.charCodeAt(pos) - 48);
var addStrings = function(num1, num2) {
	let arr = []
    let carry = 0;
    for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {

    	let a = (i < 0? 0: (num1.charCodeAt(i) - 48));
    	let b = (j < 0? 0: (num2.charCodeAt(j) - 48));
    	let sum = a + b + carry;
    	if (sum >= 10) {
    		carry = 1;
    		arr.unshift(sum % 10);
    	} else {
    		arr.unshift(sum);
    		carry = 0;
    	}
    }
    if (carry == 1) {
    	arr.unshift(1);
    }
    return arr.join('');
};
console.log(addStrings('123', '459'));



