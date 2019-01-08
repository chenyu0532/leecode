// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例 1:

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
var reverseWords = function(s) {
	let res = "";
    let t = s.split(" ");
    for(let v of t){
    	let tt = v.split("").reverse().join("");
    	res += (tt + " ");
    }
    return res.replace(/(^\s*)|(\s*$)/g, "");
};
console.log(reverseWords("Let's take LeetCode contest"));
