// 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，
// 其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
// 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

// 示例:
// 输入
// [[0,0],[1,0],[2,0]]
// 输出:
// 2

// 解释:
// 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
getDistance = function(pa, pb) {
	let dx = pa[0] - pb[0];
	let dy = pa[1] - pb[1];
	return dx * dx + dy * dy;
}
var numberOfBoomerangs = function(points) {
	let res = 0;
	let map = new Map();
    for(let i = 0; i < points.length; i++) {
    	for(let j = 0; j < points.length; j++) {
    		if(i === j) continue;
    		let dis = this.getDistance(points[i], points[j]);
    		if(map.has(dis)) {
    			map.set(dis, map.get(dis) + 1);
    			res = map.get(dis);
    		} else {
    			map.set(dis, 1);
    		}
    	}
    	// console.log(map);
    	// for(let val of map.values()) {
     //        res += val * (val - 1);
     //    }
     //    console.log(res);
        map.clear();
    }
    return res ;
};
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));

