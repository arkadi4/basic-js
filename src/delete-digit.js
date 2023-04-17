const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log('n', n)
  let stringN = String(n)
  // console.log('stringN', stringN.split(''))
  let arrayOfStrings = stringN.split('')
  let result = 0
  arrayOfStrings.forEach( (digit, index) => {
    // console.log('digit', digit)
    // console.log('index', index)
    let restOfNumberArray = arrayOfStrings.slice(0, index).concat(arrayOfStrings.slice(index+1))
    // console.log('restOfNumberArray', restOfNumberArray)
    let restOfNumberNumber = Number(restOfNumberArray.join(''))
    // console.log('restOfNumberNumber', restOfNumberNumber)
    
    result = Math.max(result, restOfNumberNumber)
    // console.log('result', result)
  })
  return result
  // for (digit of arrayOfStrings) {
  //   console.log('digit', digit)
  //   let restOfNumber = 
  // }
}
// deleteDigit( 771 )
module.exports = {
  deleteDigit
};
