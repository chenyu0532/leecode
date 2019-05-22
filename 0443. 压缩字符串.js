// 给定一组字符，使用原地算法将其压缩。

// 压缩后的长度必须始终小于或等于原数组长度。

// 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。

// 在完成原地修改输入数组后，返回数组的新长度。
// 输入：
// ["a","a","b","b","c","c","c"]

// 输出：
// 返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]

// 说明：
// "aa"被"a2"替代。"bb"被"b2"替代。"ccc"被"c3"替代。
var compress = function(chars) {
	///////***********要用原地算法...忘了*********////////////////
    // let map = new Map();
    // for(let i = 0; i < chars.length; i++){
    // 	if(map.has(chars[i])){
    // 		map.set(chars[i], map.get(chars[i]) + 1);
    // 	} else {
    // 		map.set(chars[i], 1);
    // 	}
    // }
    // console.log(map);
    // return map.size * 2;
    //************************************************************
    let i = 0, j = 0;
    while(i < chars.length) {
        let count = 0;
        let current = chars[i];
        while (i < chars.length && chars[i] === current) {
            i++;
            count++;
        }
        chars[j++] = current;
        if(count > 1) { // 1个不显示数量
            let str = count.toString();
            for(let k = 0; k < str.length; k++) {
                chars[j++] = str[k];
            }
        }
    }
    return j;
};
console.log(compress(["a","a","b","b","c","c","c"]));