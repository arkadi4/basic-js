const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // console.log('s1 sort',s1.split('').sort())
  s1Sorted = s1.split('').sort()
  s2Sorted = s2.split('').sort()
  // console.log('s2 sort',s2.split('').sort())
  let count = 0
  let setOfChars = new Set()
  for (let char of s1Sorted){
    setOfChars.add(char)
  }
  for (let char of s2Sorted){
    setOfChars.add(char)
  }
  // console.log('s1Set',setOfChars)
  for (let uniqueChar of setOfChars) {
    // console.log('uniqueChar', uniqueChar)
    let countChar1 = 0
    let countChar2 = 0
    for (let char1 of s1Sorted) {
      // console.log('char1', char1)
      if (char1 === uniqueChar) {
        // console.log('char1', char1)
        countChar1++
      }
    }
    // console.log('countChar1', countChar1)
    for (let char2 of s2Sorted) {
      if (char2 === uniqueChar) {
        countChar2++
      }
    }
    // console.log('countChar2', countChar2)
    count = count + Math.min(countChar1, countChar2)
    // console.log('count', count)
    // if (s1Sorted.includes(uniqueChar)) {
    //   numberOfUniqueChar = s1Sorted
    // }
  }

  // for (s1Elem of s1.split('')){
  //   if ()
  // }
  // for (i=0;i<s2.length;i++) {
  //   if (s2[i]) {
  //     count++
  //   }
  // }
  // console.log('count',count)
  return count
}
// getCommonCharacterCount('aabcc', 'adcaa')


module.exports = {
  getCommonCharacterCount
};
