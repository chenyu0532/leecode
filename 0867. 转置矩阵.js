// 给定一个矩阵 A， 返回 A 的转置矩阵。
// 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

// 示例 1：
// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]

// 示例 2：
// 输入：[[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]

// 提示：

//     1 <= A.length <= 1000
//     1 <= A[0].length <= 1000
var transpose = function(arr) {
    //定义一个新的数组
    var arr2=[];
    for(var i=0;i<arr[0].length;i++){
        arr2[i]=[];
    }
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            arr2[j][i]=arr[i][j];
        }
    }
    console.log(arr2);
};
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
