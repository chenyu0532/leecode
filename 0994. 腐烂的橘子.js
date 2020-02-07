// 在给定的网格中，每个单元格可以有以下三个值之一：

//     值 0 代表空单元格；
//     值 1 代表新鲜橘子；
//     值 2 代表腐烂的橘子。

// 每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

// 返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let badOranges = []; //坏橘子
    let minutes = 0;
    let normal = 0;
    for(let i = 0; i < grid.length; i++) {
    	for(let j = 0; j < grid[i].length; j++) {
    		if (grid[i][j] === 2) {
    			badOranges.push([i, j]);
    		} else if(grid[i][j] === 1){
    			normal++;
    		}
    	}
    }
    console.log(badOranges)
    while(badOranges.length && normal) {
    	let newOranges = [];
	    while(badOranges.length) {
	    	let badOrange = badOranges.shift();
	    	let n = aroundOrange(grid, badOrange, newOranges);
	    	normal -= n;
	    }
	    minutes++;
	    badOranges = newOranges;
    }
    if (normal > 0) {
    	return -1;
    }

    return minutes;
};
let aroundOrange = function(grid, pos, newOranges) {
	let [x, y] = [pos[0], pos[1]];
	let around = 0;
	if (x > 0 && grid[x - 1][y] === 1) {
		around++;
		grid[x - 1][y] = 2;
		newOranges.push([x - 1, y]);
	}
	if(y > 0 && grid[x][y - 1] === 1) {
		around++;
		grid[x][y - 1] = 2;
		newOranges.push([x, y - 1]);
	}
	if(x < grid.length - 1 && grid[x + 1][y] === 1) {
		around++;
		grid[x + 1][y] = 2;
		newOranges.push([x + 1, y]);
	}
	
	if(y < grid[0].length - 1 && grid[x][y + 1] === 1) {
		around++;
		grid[x][y + 1] = 2;
		newOranges.push([x, y + 1])
	}
	return around;
}
console.log(orangesRotting([[2,1,0,2]]));


