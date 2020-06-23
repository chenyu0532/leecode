// 在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。
// 请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
	let radioY = (coordinates[1][1] - coordinates[0][1]);
	let radioX = (coordinates[1][0] - coordinates[0][0]);
	console.log(radio);
	for(let i = 2; i < coordinates.length; i++) {
		let tempY = (coordinates[i][1] - coordinates[0][1]);
		let tempX = (coordinates[i][0] - coordinates[0][0]);
		if (radioY * tempX !== radioX * tempY) {
			return false;
		}
	}
	return true;
};

console.log(checkStraightLine([[1,-8],[2,-3],[1,2]]));
