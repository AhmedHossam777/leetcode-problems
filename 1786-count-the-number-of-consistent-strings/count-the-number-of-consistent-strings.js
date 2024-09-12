/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
    let numberOfConsistent = 0;

    let allowedChars = allowed.split('');

    for (let word of words) {
        if (word.split('').every((char) => allowedChars.includes(char))) {
            numberOfConsistent++;
        }
    }

    return numberOfConsistent;
};