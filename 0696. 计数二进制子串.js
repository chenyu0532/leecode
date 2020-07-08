// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
// 并且这些子字符串中的所有0和所有1都是组合在一起的。

// 重复出现的子串要计算它们出现的次数。

// 示例 1 :
// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 请注意，一些重复出现的子串要计算它们出现的次数。

// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

// 示例 2 :
// 输入: "10101"
// 输出: 4
// 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。

// 注意：

//     s.length 在1到50,000之间。
//     s 只包含“0”或“1”字符。
// var countBinarySubstrings = function(s) {
// 	let result = 0;
// 	for(let i = 0; i < s.length - 1; i++){
// 		if(s[i] !== s[i + 1]){ //01或10
// 			result++;
// 			let j = 1;
// 			while(s[i - j] === s[i] && s[i + 1 + j] === s[i + 1]){ //比较01 10的两侧
// 				result++;
// 				j++;
// 			}
// 		}
// 	}
// 	return result;
// };


///////按照字符来/////////////////
///'0' * k + '1' * k 或者 '1' * K + '0' * k
/// 例如，如果 s=“11000111000000”，则 groups=[2，3，3，6]。
///'00111' '11000' 可以生成 2个和 2个，则正好是min(group[i], grouo[i + 1]);
////找到上面那个规律是重点，略取巧
var countBinarySubstrings = function(s) {
	let groups = [];
	groups[0] = 1;
	let cnt = 1, t = 0, i = 0;
	for (let i = 1; i < s.length; i++) {
        if (s[i-1] != s[i]) {
        	t++;
            groups[t] = 1;
        } else {
            groups[t]++;
        }
    }
	let res = 0;
    for (let i = 1; i <= t; i++) {
        res += Math.min(groups[i-1], groups[i]);
    }
    return res;
};
console.log(countBinarySubstrings('10101'));