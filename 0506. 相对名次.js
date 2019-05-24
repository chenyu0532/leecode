// 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。
// 前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal", "Silver Medal", "Bronze Medal"）。

// (注：分数越高的选手，排名越靠前。)

// 示例 1:

// 输入: [5, 4, 3, 2, 1]
// 输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// 解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal" and "Bronze Medal").
// 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。

// 提示:

//     N 是一个正整数并且不会超过 10000。
//     所有运动员的成绩都不相同。
var findRelativeRanks = function(nums) {
	//先复制出一个数组来
	let res = [...nums];
    nums.sort(function(a, b) {
    	return b - a;
    })
    console.log(nums)
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
    	map.set(nums[i], i + 1);
    }
    let result = [];
    for(let i = 0; i < res.length; i++) {
    	let mm = map.get(res[i]);
    	if (mm === 1) {
    		result.push('Gold Medal');
    	} else if(mm === 2) {
    		result.push('Silver Medal');
    	} else if(mm === 3) {
    		result.push('Bronze Medal');
    	} else {
    		result.push(mm + '');
    	}
    }
    return result;
};
console.log(findRelativeRanks([10,3,8,9,4]));



