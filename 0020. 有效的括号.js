// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

// 注意空字符串可被认为是有效字符串。

// var isValid = function(s) {
//     const ob = {
//     	'(':')',
//     	'[':']',
//     	'{':'}',
//     }
//     let stack = [];
//     for(let i = 0; i < s.length; i++) {
//     	const _s = s[i];
//     	if (ob[_s]){
//     		stack.push(ob[_s]);
//     	} else {
//     		if (_s != stack.pop()) {
//     			return false;
//     		}
//     	}
//     }
//     return stack.length === 0;
// };


//////////还是上面的方法好//////////////////////
// var isValid = function(s) {
//     let map = new Map();
//     for(let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             if (map.has(s[i])) {
//                 map.set(s[i], map.get(s[i]) + 1);
//             } else {
//                 map.set(s[i], 1);
//             }
            
//         } else {
//             if (!map.has(s[i]) || map.get(s[i]) === 0) {
//                 return false;
//             }
//             map.set(s[i], map.get(s[i]) - 1);
//         }
//     }
//     for(let v of map.values()) {
//         if (v > 0) return false;
//     }
//     return true;
// };
console.log(isValid('(('));