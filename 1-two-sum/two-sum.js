/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j < nums.length; j++) {
            if(i === j) continue
			if (nums[j] + nums[i] === target) {
				result[0] = i;
				result[1] = j;
				return result;
			}
		}
	}
};

