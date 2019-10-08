// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

// 示例 1：
// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。

// 示例 2：
// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。

// 示例 3：
// 输入：S = "a##c", T = "#a#c"
// 输出：true
// 解释：S 和 T 都会变成 “c”。

// 示例 4：
// 输入：S = "a#c", T = "b"
// 输出：false
// 解释：S 会变成 “c”，但 T 仍然是 “b”。

// 提示：
//     1 <= S.length <= 200
//     1 <= T.length <= 200
//     S 和 T 只含有小写字母以及字符 '#'。
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
 /////////////判断数组是否相同不能用== ===，总是会返回false，
 ////////////可以用join 或者 toString()
var backspaceCompare = function(S, T) {
	let res1 = [];
    for(let i = 0; i < S.length; i++) {
    	if (S[i] !== '#') {
    		res1.push(S[i]);
    	} else {
    		res1.pop();
    	}
    }
    console.log(res1);
    let res2 = [];
    for(let i = 0; i < T.length; i++) {
    	if (T[i] !== '#') {
    		res2.push(T[i]);
    	} else {
    		res2.pop();
    	}
    }
    return res1.join('') == res2.join('');
};
console.log(backspaceCompare("a##c", "#a#c"));


