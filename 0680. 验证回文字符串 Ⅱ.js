// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:
// 输入: "aba"
// 输出: True

// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

// 注意:字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

//这个方法竟然只超过了10%。。。。。。。

var validPalindrome = function(s) {
    if(typeof s === "undefined" || s === null || s === ""){
		return true;
	}
	if(s.length === 3){
		if(s[0] !== s[2]){
			return false;
		}
	}
    let ll;
    if(s.length % 2 === 0){
    	ll = s.length / 2;
    } else {
    	ll = Math.floor(s.length) / 2 - 1;
    }
 	for(let i = 0; i < ll; i++){
 		let j = s.length - i - 1;
 		if(s[i] !== s[j]){
 			return equal(s, i + 1, j) || equal(s, i, j - 1);
 		}
 	}
    return true;
};
var equal = function(s, i, j) {
	// let subs = s.substring(i, j + 1);
	// let temp = subs.split("").reverse().join("");
	// return subs === temp;

	/////下面这个竟然比上面的es6的方法要快？我觉得es6的比较fashion啊。。。
	while (i < j) {
        if (s[i++] != s[j--]) {
            return false;
        }
    }
    return true;
}
//"ebcbbececabbacecbbcbe"
// beeee
// abc

console.log(validPalindrome("abc"));