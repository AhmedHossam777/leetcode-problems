/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = (s = '', k) => {
    let arr = s.split('');
    let strNums = '';
    let num = 0;
    let i = 1;
    for (let el of arr) {
        strNums = strNums + (el.charCodeAt(0) - 96);
    }
    while (i <= k) {
        let newArr = strNums.split('');
        num = 0;
        for (let strNum of newArr) {
            num += Number(strNum); // 33
        }
        strNums = `${num}`; // "33"
        i++;
    }

    return num;
};