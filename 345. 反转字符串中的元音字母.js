// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。 AEIOU  aeiou

// 示例 1:

// 输入: "hello"
// 输出: "holle"

// 示例 2:

// 输入: "leetcode"
// 输出: "leotcede"

// 说明:
// 元音字母不包含字母"y"。
var reverseVowels = function(s) {
    if(s === null || s.length === 0){
    	return s;
    }
    var chars = s.split("");
    let low = 0;
    let high = s.length - 1;
    let wow = "aeiouAEIOU";
    //let temp;
    while(low < high){
    	while(low < high && wow.indexOf(chars[low]) === -1){
    		low++;
    	}
    	while(low < high && wow.indexOf(chars[high]) === -1){
    		high--;
    	}
    	let temp = chars[low];  //字符串并不能这样交换两个位置的值，只有数组才能
    	chars[low] = chars[high];
    	chars[high] = temp;
    	low++;
    	high--;
    }
    return chars.join("");
};
console.log(reverseVowels("hello"));