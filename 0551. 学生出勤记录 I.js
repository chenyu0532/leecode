// 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：

//     'A' : Absent，缺勤
//     'L' : Late，迟到
//     'P' : Present，到场

// 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
// 你需要根据这个学生的出勤记录判断他是否会被奖赏。

// 示例 1:
// 输入: "PPALLP"
// 输出: True

// 示例 2:
// 输入: "PPALLL"
// 输出: False
var checkRecord = function(s) {
	let k = 0;
	let j = 0;
    for(let i = 0; i < s.length; i++){
    	if(s[i] === "A"){
    		j = 0;
    		k++;
    		if(k > 1){
    			return false;
    		}
    	} else if(s[i] === "L"){
    		j++;
    		if(j > 2){
    			return false;
    		}
    	} else {
    		j = 0;
    	}
    }
    return true;
};
console.log(checkRecord("PPALLP"));
