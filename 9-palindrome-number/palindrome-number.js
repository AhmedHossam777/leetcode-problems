/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x)=> {
    let str = `${x}`
	return str.split('').join() === str.split('').reverse().join();
};