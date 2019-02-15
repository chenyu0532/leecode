// 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
// 给定一个由整数组成的 N × N 矩阵，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。

// 示例 1:

// 输入: [[4,3,8,4],
//       [9,5,1,9],
//       [2,7,6,2]]
// 输出: 1
// 解释: 
// 下面的子矩阵是一个 3 x 3 的幻方：
// 438
// 951
// 276

// 而这一个不是：
// 384
// 519
// 762

// 总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。

// 提示:

//     1 <= grid.length = grid[0].length <= 10
//     0 <= grid[i][j] <= 15


var numMagicSquaresInside = function(grid) {
	let cnt = 0;
	let m = grid.length;
	let n = grid[0].length;
    for(let i = 0; i <= m - 3; i++){
    	for(let j = 0; j <= n - 3; j++){
    		if(isEuqal(i, j, grid)){
    			cnt++;
    		}
    	}
    }
    return cnt;
};
var isEuqal = function(i, j, grid) {
	// 判断9个数要各不相同
	let v = [0,0,0,0,0,0,0,0,0,0];
	for(let m = i; m <= i + 2; m++){
		for(let n = j; n <= j + 2; n++){
			v[grid[m][n]]++;
		}
	}
	console.log(v);
	for(let value = 1; value <= 9; value++){
		if(v[value] !== 1){
			return false;
		}
	}
	//横向3行
	let a1 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j];
	let a2 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1];
	let a3 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2];
	//3列
	let a4 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
	let a5 = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2];
	let a6 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
	//对角线
	let a7 = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
	let a8 = grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2];
	if(a1 === a2 && a2 === a3 && a3 === a4 && a4 === a5 && a5 === a6 &&a6 === a7 && a7 === a8){
		return true;
	}
	return false;
	
}
console.log(numMagicSquaresInside([[4,3,8,4],[9,5,1,9],[2,7,6,2]]))