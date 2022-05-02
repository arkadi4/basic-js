const { NotImplementedError } = require('../extensions/index.js');

//console.log(111)
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(111)
  // console.log(matrix)
  let number = 0;
  matrix.forEach((el) => {
    el.forEach((el_in) => {
      if (el_in === "^^") number++;
    });
  });
  return number;
}




module.exports = {
  countCats
};
