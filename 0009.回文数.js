//判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
//121 -123 012
let isPalindrome = function(x) {
	if(x < 0) return false
	if(x < 10) return true;
    //判断位数
    let count = 0;
    let number = x;
    while(number > 0){
    	number = Math.floor(number / 10);
    	count++;
    }
    let m = 0;
    let v = x;
    for(i = count - 1; i >= 0; i--){
    	m += v % 10 * Math.pow(10, i);
    	v = Math.floor(v / 10);
    }
    if(x === m){
    	return true;
    } else {
    	return false;
    }
};

console.log(isPalindrome(121));

