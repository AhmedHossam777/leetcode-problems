/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
	// -231 <= x <= 231 - 1
	if (x < -(2 ** 31) || x > 2 ** 31) return 0;

	const str = `${x}`;
	let arr = str.split('');

	if (arr[arr.length - 1] === 0) arr.pop();

	if (arr[0] === '-') {
		arr.shift();
		const reversed = -1 * arr.reverse().join('');
		if (reversed < -(2 ** 31)) return 0;

		return reversed;
	} else {
		const reversed = arr.reverse().join('') * 1;
		if (reversed > 2 ** 31) return 0;
		return reversed;
	}
};