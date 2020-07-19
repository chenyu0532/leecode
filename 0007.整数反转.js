//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 输入: 123
// 输出: 321

// 输入: -123
// 输出: -321

// 输入: 120
// 输出: 21

// var reverse = function(x){
// 	let xstr = x.toString();
// 	let ss = xstr.split("").reverse().join("");
// 	ss = Number.parseInt(ss);
// 	if(ss >= Math.pow(2, 31) - 1){
// 		return 0;
// 	}
// 	return x < 0? -ss:ss;
// }

///数学
/////2^31-1=2147483647,-2^31=-2147483648

////不转化为字符串，从低位到高位依次弹出
//// 每一次的result * 10 + 最后一位   即是当前值，判断这个值是否在最大值 最小值之间
var reverse = function(x){
	let res = 0;
	while(x !== 0) {
		let pop = x % 10;
		if (res > Math.MAX_VALUE / 10 || (res === Math.MAX_VALUE / 10 && pop > 7)) {
			return 0;
		}
		if (res < Math.MIN_VALUE / 10 || (res === Math.MIN_VALUE / 10 && pop < -8)) {
			return 0;
		}
		res = res * 10 + pop;
		x = Math.floor(x / 10);
	}
	return res;
}
console.log(reverse(120));
