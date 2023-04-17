const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log('str', str)
  let splittedArray = str.split('')
  // console.log('splittedArray', splittedArray)
  let localcount = 1
  let resultChar = ''
  let resultArray = []
  splittedArray.forEach( (char, index) => {
    // console.log('char', char)
    // console.log('index', index)
    // console.log('splittedArray[index+1]', splittedArray[index+1])
    if (char !== splittedArray[index+1] && localcount == 1) {
      // console.log('different', char)
      resultChar = char
      resultArray.push(resultChar)
      localcount = 1
      // console.log('localcount', localcount)
    } else if (char === splittedArray[index+1] ) {
      // console.log(' same', char)
      localcount++
    } else if (char !== splittedArray[index+1] && localcount > 1) {
      // console.log('different after same', char)
      resultChar = String(localcount) + char
      resultArray.push(resultChar)
      localcount = 1
    }
  })
  // console.log('resultArray', resultArray)
  let result = resultArray.join('')
  return result

}

encodeLine( 'abbbbccafffaaa' )

module.exports = {
  encodeLine
};



  // let newSet = new Set()
  // splittedArray.forEach( char => {
  //   newSet.add(char)
  // })
  // let resultChar = ''
  // let resultArray = []
  // newSet.forEach( uniqueChar => {
  //   let localCount = 0
  //   splittedArray.forEach( char => {
  //     if (char === uniqueChar) {
  //       localCount++
  //     }
      
  //   })
  //   resultChar = String(localCount) + uniqueChar
  //   resultArray.push(resultChar)
  //   console.log('resulrArray', resultArray)
  // })
  // let result = resultArray.join('')
  // console.log('resulrArray', result)
  // return result