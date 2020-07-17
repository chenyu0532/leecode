// 给你一个字符串 path，其中 path[i] 的值可以是 'N'、'S'、'E' 或者 'W'，分别表示向北、向南、向东、向西移动一个单位。
// 机器人从二维平面上的原点 (0, 0) 处开始出发，按 path 所指示的路径行走。
// 如果路径在任何位置上出现相交的情况，也就是走到之前已经走过的位置，请返回 True ；否则，返回 False 。

    // 1 <= path.length <= 10^4
    // path 仅由 {'N', 'S', 'E', 'W} 中的字符组成

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
	let set = new Set();
	let x = 0, y = 0;
	set.add(x + '-' + y);
	for(let i = 0; i < path.length; i++) {
		if (path[i] === 'N') y++;
		if (path[i] === 'S') y--;
		if (path[i] === 'E') x++;
		if (path[i] === 'W') x--;
		if (set.has(x + '-' + y)) {
			return true;
		}
		set.add(x + '-' + y);
	}
	return false;
};

console.log(isPathCrossing("NNSWWEWSSESSWENNW"))


