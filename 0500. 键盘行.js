// 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。
// 示例：
// 输入: ["Hello", "Alaska", "Dad", "Peace"]
// 输出: ["Alaska", "Dad"]

// 注意：
//     你可以重复使用键盘上同一字符。
//     你可以假设输入的字符串将只包含字母。
var findWords = function(words) {
	let result = [];
    let set1 = new Set('qwertyuiopQWERTYUIOP');
    let set2 = new Set('asdfghjklASDFGHJKL');
    let set3 = new Set('zxcvbnmZXCVBNM');
    for(let i = 0; i < words.length; i++) {
    	let word = words[i].split('');
    	if(isSameRow(word, set1) || isSameRow(word, set2) || isSameRow(word, set3)) {
    		result.push(words[i]);
    	}
    }
    return result;
};
let isSameRow = function(word, set) {
	return word.every(letter => set.has(letter));
}
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));


