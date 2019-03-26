// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false

// 说明:
// 你可以假设字符串只包含小写字母。

// 字母异位词:两个字符串长度相等，各个字母的个数相等，只是顺序不同

var isAnagram = function(s, t) {
	if (s.length !== t.length) return false;
	const ss = s.split('');
	const tt = t.split('');
	ss.sort();
	tt.sort();
	if (ss.join('') === tt.join('')) {
		return true;
	} else {
		return false;
	}
    
};
console.log(isAnagram("anagram", "nagaram"))

