// 在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。
// 至少有一个空座位，且至少有一人坐在座位上。
// 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。
// 返回他到离他最近的人的最大距离。

// 示例 1：
// 输入：[1,0,0,0,1,0,1]
// 输出：2
// 解释：
// 如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
// 如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
// 因此，他到离他最近的人的最大距离是 2 。 

// 示例 2：
// 输入：[1,0,0,0]
// 输出：3
// 解释： 
// 如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
// 这是可能的最大距离，所以答案是 3 。

// 提示：
//     1 <= seats.length <= 20000
//     seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。

// 方法1：记录开头0的个数c1  结尾0的个数c2 中间连续0的个数c3 / 2
// 取

var maxDistToClosest = function(seats) {
	let len = seats.length;
	let count1 = 0,count2 = 0, countMid = 0, countMax = 0;;
	let i = 0, j = seats.length - 1;
	while(seats[i] === 0) {
		count1++;
		i++;
	}
	while(seats[j] === 0) {
		count2++;
		j--;
	}
	for(let k = i + 1; k < j; k++) {
		if(seats[k] === 0) {
			countMid++;
		} else {
			countMax = Math.max(countMax, countMid);
			countMid = 0;
		}
	}
	return Math.max(Math.max(count1, count2), (countMax + 1) / 2);
};

console.log(maxDistToClosest([1,0,0,0,1,0,1]));
