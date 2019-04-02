// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

// 说明：
//     字母异位词指字母相同，但排列不同的字符串。
//     不考虑答案输出的顺序。

// 示例 1:
// 输入:
// s: "cbaebabacd" p: "abc"
// 输出:
// [0, 6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。

// 示例 2:
// 输入:
// s: "abab" p: "ab"
// 输出:
// [0, 1, 2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
var findAnagrams = function(s, p) {
    if(s == '' || s.length === 0 || p == '' || p.length === 0) return [];
    let map = new Map();
    for(let value of p) {
    	if(map.has(value)) {
    		map.set(value, map.get(value) + 1);
    	} else {
    		map.set(value, 1);
    	}
    }
    let result = [];
    let left = 0;
    let right = 0;
    let count = p.length;
    while(right < s.length) {
    	if(map.get(s[right]) > 0) {
    		count--;
    	}
    	map.set(s[right], map.get(s[right]) - 1);
    	right++;
    	while(count === 0) {
    		if(map.has(s[left])){
    			map.set(s[left], map.get(s[left]) + 1);
    			if(map.get(s[left]) > 0) {
    				count++;
    			}
    		}
    		if(right - left === p.length){
    			result.push(left);
    		}
    		left++;
    	}
    }
    return result;
};
console.log(findAnagrams("cbaebabacd", "abc"));



