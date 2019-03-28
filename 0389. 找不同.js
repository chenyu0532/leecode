// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。

// 示例:

// 输入：
// s = "abcd"
// t = "abcde"

// 输出：
// e
// 解释：
// 'e' 是那个被添加的字母。

//////////////////方法挺多 暂时写一种
var findTheDifference = function(s, t) {
	let map = new Map();
    for(let i = 0; i < s.length; i++) {
    	if(!map.has(s[i])) {
    		map.set(s[i], 1);
    	} else {
			map.set(s[i], map.get(s[i]) + 1);
    	}
    }
    for(let i = 0; i < t.length; i++) {
    	if(map.has(t[i]) && map.get(t[i]) > 0){
    		map.set(t[i], map.get(t[i]) - 1);
    	}
    	else if(!map.has(t[i]) || map.get(t[i]) == 0) {
    		return t[i];
    	}
    }
};
console.log(findTheDifference("abcd", "abcde"));


