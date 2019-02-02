// 包含整数的二维矩阵 M 表示一个图片的灰度。
// 你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，
// 平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，
// 则尽可能多的利用它们。

// 示例 1:
// 输入:
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// 输出:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
// 解释:
// 对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
// 对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
// 对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0

// 注意:
//     给定矩阵中的整数范围为 [0, 255]。
//     矩阵的长和宽的范围均为 [1, 150]。

var imageSmoother = function(M) {
	let re = new Array();
	for(let i = 0; i < M.length; i++){
		re[i] = new Array();
		for(let j = 0; j < M[0].length; j++){
			re[i][j] = 0;
		}
	}
	console.log(re);
    for(let row = 0; row < M.length; row++){
    	for(let col = 0; col < M[0].length; col++){
    		let sum = M[row][col];
    		let count = 0;
    		if(row - 1 >= 0){
    			sum += M[row - 1][col];
    			count++;
    			if(col - 1 >= 0){
    				sum += M[row - 1][col - 1];
    				count++;
    			}
    			if(col + 1 < M[0].length){
    				sum += M[row - 1][col + 1];
    				count++;
    			}
    		}
    		if(col + 1<M[0].length){
                sum += M[row][col + 1];
                count++;
            }             
            if(col - 1 >= 0){
                sum += M[row][col - 1];
                count++;
                if(row + 1< M.length){
                    sum += M[row + 1][col - 1];
                    count++;
                }
            }
            
            if(row + 1< M.length){
                sum += M[row + 1][col];
                count++;
                
                if(col + 1< M[0].length){
                    sum += M[row + 1][col + 1];
                    count++;
                }
            }
            re[row][col] = Math.floor(sum / (count + 1));
    	}
    }
    return re;
};
console.log(imageSmoother([[2,3,4],[5,6,7],[8,9,10],[11,12,13],[14,15,16]]));