// 给你一个 n 行 m 列的矩阵，最开始的时候，每个单元格中的值都是 0。
// 另有一个索引数组 indices，indices[i] = [ri, ci] 中的 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
// 你需要将每对 [ri, ci] 指定的行和列上的所有单元格的值加 1。
// 请你在执行完所有 indices 指定的增量操作后，返回矩阵中 「奇数值单元格」 的数目。

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let rows = new Array(n).fill(0)
    let cols = new Array(m).fill(0)
    for(let i = 0;i < indices.length; i++){
        let rowIndex = indices[i][0]
        let colIndex = indices[i][1]
        rows[rowIndex]++
        cols[colIndex]++
    }
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if((rows[i] + cols[j]) % 2 != 0){
                count++
            }
        }
    }
    return count
};

console.log(oddCells(2, 3, [[0,1],[1,1]]));

