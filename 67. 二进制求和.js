// 给定两个二进制字符串，返回他们的和（用二进制表示）。

// 输入为非空字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"

// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"
var addBinary = function(a, b) {
	if(a.length === 1 && b.length === 1){
		if(a[0] === "0" && b[0] === "0"){
			return "0";
		} else if((a[0] === "0" && b[0] === "1") || (a[0] === "1" && b[0] === "0")){
			return "1";
		} else {
			return "10";
		}
	}
    let o = a.length - b.length;
    if(o > 0){
    	for(let i = 0; i < o; i++){
    		b = "0" + b;
    	}
    } else if(o < 0) {
    	for(let i = 0; i < -o; i++){
    		a = "0" + a;
    	}
    }
    let result = "";
    let carry = "0";
    for(let i = a.length - 1; i >= 0; i--){
    	if(a[i] === "1" && b[i] === "1"){
    		result = carry + result;
    		carry = "1";
    	} else if(a[i] === "0" && b[i] === "0"){
    		result = carry + result;
    		carry = "0";
    	} else if((a[i] === "0" && b[i] === "1") || (a[i] === "1" && b[i] === "0")){
    		if(carry === "0"){
    			result = "1" + result;
    		} else {
    			result = "0" + result;
    		}
    	}
    }
    if(carry === "1"){
    	result = carry + result;
    }
    
    return result;
};
console.log(addBinary("100", "110010")); //--->110110