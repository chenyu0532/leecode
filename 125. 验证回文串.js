// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 示例 2:

// 输入: "race a car"
// 输出: false

var isPalindrome = function(s) {
	if(typeof s === "undefined" || s === null || s === ""){
		return true;
	}
	let result = ""
    for(let i = 0; i < s.length; i++){
    	let v = s[i];
    	if(v >= "A" && v <= "Z"){
    		result += v.toLowerCase();
    	} else if((v >= "a" && v <= "z") || (v >= "0" && v <= "9")){
    		result += v;
    	}
    }
    let ll;
    if(result.length % 2 === 0){
    	ll = result.length;
    } else {
    	ll = Math.floor(result.length) / 2 - 1;
    }
    for(let i = 0; i < ll; i++){
    	if(result[i] !== result[result.length - 1 - i]){
    		return false;
    	}
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));