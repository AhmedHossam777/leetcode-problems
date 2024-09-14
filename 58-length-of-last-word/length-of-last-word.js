/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = (s = '') => {
	let newArr = [];
	let arr = s.trim().split(' ');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === ' ' && arr[i + 1] === ' ') continue;
		else {
			newArr.push(arr[i]);
		}
	}

	return newArr[newArr.length - 1].length;
};