// 罗马数字包含以下七种字符
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
//通常情况下，罗马数字中小的数字在大的数字的右边
//但有特殊情况，这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。           IV = 4     IX = 9
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。       XL = 40    XC = 90
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。   CD = 400  CM = 900
var romanToInt = function(s) {
	let result = 0;
    if(s.includes("IV") || s.includes("IX")){
    	result += -2;
    }
       if(s.includes("XL") || s.includes("XC")){
    	result += -20;
    }
    if(s.includes("CD") || s.includes("CM")){
    	result += -200;
    }
    for(let c of s){
    	switch(c){
    		case "I":
    			result += 1;
    			break;
    		case "V":
    			result += 5;
    			break;
    		case "X":
    			result += 10;
    			break;
    		case "L":
    			result += 50;
    			break;
    		case "C":
    			result += 100;
    			break;
    		case "D":
    			result += 500;
    			break;
    		case "M":
    			result += 1000;
    			break;
    	}
    }
    return result;
};
var romanToInt2 = function(s) {
	//网友的方法,这个方法很好。。。。
	let result = 0;
	let a = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
	for(let i = 0; i < s.length; i++){
		if(i < s.length && a[s[i]] < a[s[i + 1]]){
			result -= a[s[i]];
		} else {
			result += a[s[i]];
		}
	}
	return result;
}
console.log(romanToInt("LVIII"));