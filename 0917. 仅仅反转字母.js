// 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。

// 示例 1：
// 输入："ab-cd"
// 输出："dc-ba"

// 示例 2：
// 输入："a-bC-dEf-ghIj"
// 输出："j-Ih-gfE-dCba"

// 示例 3：
// 输入："Test1ng-Leet=code-Q!"
// 输出："Qedo1ct-eeLg=ntse-T!"

// 提示：
//     S.length <= 100
//     33 <= S[i].ASCIIcode <= 122 
//     S 中不包含 \ or ""
var reverseOnlyLetters = function(S) {
	let s = S.split('');
	for(let i = 0, j = s.length - 1; i < j; i++, j--){
		while(i < j && !(/^[a-zA-Z]*$/.test(s[i]))){
			i++;
		}
		while(i < j && !(/^[a-zA-Z]*$/.test(s[j]))){
			j--;
		}
		//交换
		[s[i], s[j]] = [s[j], s[i]];
	}
	return s.join('');
};
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));
