//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
//给定 nums = [2, 7, 11, 15], target = 9
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
var twoSum = function(nums, target) {
	let result = [];
	let flag = false;
    for(let i = 0; i < nums.length; i++){
    	for(let j = i + 1; j < nums.length; j++){
    		if(nums[i] + nums[j] === target){
    			flag = true;
    			result = [i, j];
    			break;
    		}
    	}
    	if(flag){
    		break;
    	}
    }
    if(!flag){
    	console.log("无解");
    }
    return result;
};
//使用了es6中的Map结构，具有极高的查找速度
var twoSum2 = function(nums, target) {
	let result = [];
	let map = new Map();
	// nums.forEach(function(value, index){
	// 	map.set(value, index);
	// })
	nums.forEach((value, index)=>map.set(value, index));
	for(let i = 0; i < nums.length; i++){
		let j = map.get(target - nums[i]);
		if(j && j !== i){
			result = [i, j];
			break;
		}
	}
	return result;
};
twoSum2([2, 7, 11, 15], 9);