/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
	let str = digits.join('');
	const number = BigInt(str) + BigInt(1);
	str = `${number}`;

	return str.split('');
};

console.log(plusOne([9]));