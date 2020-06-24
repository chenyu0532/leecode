// 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。

// 你可以按照下面的规则在平面上移动：

//     每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
//     必须按照数组中出现的顺序来访问这些点。

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
	let res = 0;
	for(let i = 0; i < points.length - 1; i++) {
		const pre = points[i];
		const after = points[i + 1];
		let dx = Math.abs(pre[0] - after[0]);
		let dy = Math.abs(pre[1] - after[1]);
		res += (dx > dy? dx: dy);
	}
	return res;
};

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));

