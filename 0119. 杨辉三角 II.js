// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:
// 输入: 3
// 输出: [1,3,3,1]
//  1
//  11
//  121
//  1331
//  1 4 6  4  1
//  1 5 10 10 5 1 
///////100%!!!!!!!!!!6666666666666666!!!!!!!!!!
var getRow = function(rowIndex) {
	let arr = []
    for(let i = 0; i <= rowIndex; i++){
    	arr.push(1);
    	for(let j = i - 1; j > 0; j--){
    		arr[j] = arr[j] + arr[j - 1];
    	}
    }
    return arr;
};
console.log(getRow(5));
