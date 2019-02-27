// 统计所有小于非负整数 n 的质数的数量。

// 示例:
// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

//埃拉托色尼筛选法!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var countPrimes = function(n) {
//   let arr = [], count = 0
//   for (let i = 0; i < n + 1; i++) {
//     arr[i] = true;
//   }
//   for (let i = 2;i < n; i++) {
//     if (arr[i]) { // 如果i是质数
//       for (let j = i + i; j < n; j = j + i) {
//         arr[j] = false // i的n倍数肯定不是质数
//       }
//       count++;
//     }
//   }
//   return count;
// };
var countPrimes = function(n) { 
	const primes = Array(n).fill(true) 
	let count = 0 
	for (let i = 2; i < n; i++) { 
		if (primes[i]) { 
			count++ 
			for (let j = 2; i * j < n; j++) { 
				primes[i * j] = false 
			} 
		} 
	} 
	return count 
};

console.log(countPrimes(10));
