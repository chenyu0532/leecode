// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。 AEIOU  aeiou

// 示例 1:

// 输入: "hello"
// 输出: "holle"

// 示例 2:

// 输入: "leetcode"
// 输出: "leotcede"

// 说明:
// 元音字母不包含字母"y"。
// var reverseVowels = function(s) {
//     if(s === null || s.length === 0){
//     	return s;
//     }
//     var chars = s.split("");
//     let low = 0;
//     let high = s.length - 1;
//     let wow = "aeiouAEIOU";
//     //let temp;
//     while(low < high){
//     	while(low < high && wow.indexOf(chars[low]) === -1){
//     		low++;
//     	}
//     	while(low < high && wow.indexOf(chars[high]) === -1){
//     		high--;
//     	}
//         [chars[low], chars[high]] = [chars[high], chars[low]]
//     	low++;
//     	high--;
//     }
//     return chars.join("");
// };


///////////这个更像js/////////////////////
var reverseVowels = function(s) {
    let set = new Set(['a', 'e', 'i', 'o', 'e', 'A', 'E', 'I', 'O', 'E']);
    let chars = s.split('');
    let i = 0, j = s.length - 1;
    while(i < j) {
        if (set.has(chars[i])) {
            if (set.has(chars[j])) {
                [chars[i], chars[j]] = [chars[j], chars[i]];
                i++;
            }
            j--;
        } else {
            i++;
        }
    }
    return chars.join("");
};
console.log(reverseVowels("hello"));