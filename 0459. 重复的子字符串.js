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
// var repeatedSubstringPattern = function(s) {
// 	if(s === null || s.length === 0){
// 		return true;
// 	}
// 	if(s.length === 1){
// 		return false;
// 	}
// 	for(let [index, value] of [...s].entries()){
// 		if(index >= s.length / 2){
// 			break;
// 		}
// 		let current = s.slice(0, index + 1);
// 		let times = s.length / current.length;
// 		if(current.repeat(times) === s){
// 			return true;
// 		}
// 	}
// 	return false;
// };


////////////////////这个方法也很6///////////////////////////////////
////////////////////不过这个方法取巧太多////////////////////////////
// 假设给定字符串s可由一个子串x重复n次构成，即s=nx。
// 现构造新字符串t=2s，即两个s相加，由于s=nx，则t=2nx。
// 去掉t的开头与结尾两位，则这两处的子串被破坏掉，此时t中包含2n-2个子串。
// 由于t中包含2n-2个子串，s中包含n个子串，若t中包含s，则有2n-2>=n，可得n>=2，
// 由此我们可知字符串s可由一个子串x重复至少2次构成，判定为true；反之，若t中不包含s，则有2n-2<n，可得n<2，n只能为1，
// 由此我们可知字符串s=x，假定的子串就为s本身，判定为false。

var repeatedSubstringPattern = function(s) {
	let s1 = (s + s).slice(1, -1);
    return s1.indexOf(s) != -1;
};

console.log(repeatedSubstringPattern("a"));