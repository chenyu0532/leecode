// 给定一个整数，将其转化为7进制，并以字符串形式输出。

// 示例 1:
// 输入: 100
// 输出: "202"

// 示例 2:
// 输入: -7
// 输出: "-10"

// 注意: 输入范围是 [-1e7, 1e7] 。
////////////尼玛，这都不能100%//////////////
var convertToBase7 = function(num) {
    return num.toString(7);
};
console.log(convertToBase7(100));

