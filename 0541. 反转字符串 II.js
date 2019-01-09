// 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。
// 如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，
// 并将剩余的字符保持原样。

// 示例:

// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"

// 要求:

//     该字符串只包含小写的英文字母。
//     给定字符串的长度和 k 在[1, 10000]范围内。

var reverseStr = function(s, k) {
	let res = "";
	let temp = ""
  	for(let i = 0; i < s.length; i += 2 * k){
  		temp = s.substr(i, 2 * k);
  		if(temp.length < k){
  			res = res + reversestr(temp);
  		} else if(temp.length >= k && temp.length <= 2 * k){
  			res = res + reversestr(temp.substr(0, k)) + temp.substr(k);
  		}
  	}
  	return res;
};
function reversestr(str){
	return str.split("").reverse().join("");
}
console.log(reverseStr("abcdefg", 2));