// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，
// 并且长度不超过10000。

// 示例 1:
// 输入: "abab"
// 输出: True
// 解释: 可由子字符串 "ab" 重复两次构成。

// 示例 2:
// 输入: "aba"
// 输出: False

// 示例 3:
// 输入: "abcabcabcabcabc"
// 输出: True
// 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

//网友的方法。。。。太棒了！！！用了两个es6的新特性  entries()  repeat()
var repeatedSubstringPattern = function(s) {
	if(s === null || s.length === 0){
		return true;
	}
	if(s.length === 1){
		return false;
	}
	for(let [index, value] of [...s].entries()){
		if(index >= s.length / 2){
			break;
		}
		let current = s.slice(0, index + 1);
		let times = s.length / current.length;
		if(current.repeat(times) === s){
			return true;
		}
	}
	return false;
};

console.log(repeatedSubstringPattern("a"));