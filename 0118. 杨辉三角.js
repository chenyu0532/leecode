// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// [1,5,10,10,5,1]
//[1,6,15,20,15,6,1]
// ]
//100%!!!!!!!哈哈哈哈哈哈哈哈哈哈哈
var generate = function(numRows) {
	let array = [];
	for(let i = 1; i <= numRows; i++){
		let row = [];
		for(let j = 0; j < i; j++){
			if(j === 0 || j === i - 1){
				row.push(1);
			} else {
				row.push(array[i - 2][j - 1] + array[i - 2][j]);
			}
		}
		array.push(row);
	}
	return array;
};
console.log(generate(5));