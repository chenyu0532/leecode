// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串
// 出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:
// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1



// 其实可以直接用indexOf
var strStr = function(haystack, needle) {
    for(let i = 0; ; i++){     //原来for循环还可以省略中间。。。几乎没这么用过。。
    	for(let j = 0; ; j++){
    		if(j === needle.length){
    			return i;
    		}
    		if(i + j === haystack.length){
    			return -1;
    		}
    		if(needle[j] !== haystack[i + j]){
    			break;
    		}
    	}
    }
};
console.log(strStr("aaaaa", "bba"));
