//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 输入: 123
// 输出: 321

// 输入: -123
// 输出: -321

// 输入: 120
// 输出: 21

var reverse1 = function(x){
	if(x === 0){
		return 0;
	}
	let result = [];
	let xstr = x.toString();
	if(x > 0){
		for(let i = xstr.length - 1; i >= 0; i--){
			result.push(xstr[i]);
		}
	} else {
		for(let i = xstr.length - 1; i > 0; i--){
			result.push(xstr[i]);
		}
	}

	if(xstr[0] === "-"){
		result.unshift("-"); //往数组头加入-
	}
	let resultNum = parseInt(result.join(""));
	if(resultNum <= Math.pow(-2, 31) || resultNum >= Math.pow(2, 31)){
		return 0;
	}
	return resultNum;
}
var reverse2 = function(x){
	let xstr = x.toString();
	let ss = xstr.split("").reverse().join("");
	ss = parseInt(ss);
	if(ss >= Math.pow(2, 31) - 1){
		return 0;
	}
	return x < 0? -ss:ss;
}
console.log(reverse2(120));
