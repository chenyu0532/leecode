// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 输入: ["flower","flow","flight"]
// 输出: "fl"
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
var longestCommonPrefix = function(strs) {
	if(strs.length === 0) return "";
    let first = strs[0];
    for(let i = 1; i < strs.length; i++){
    	while(strs[i].indexOf(first) != 0){
    		first = first.substring(0, first.length - 1);
    		console.log(first);
    		if(isEmpty(first)){
    			return ""
    		}
    	}
    }
    return first;
};
longestCommonPrefix(["flower","flow","flight"]);