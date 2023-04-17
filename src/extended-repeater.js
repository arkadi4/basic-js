const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log('str', str)

  // let convertedStr = String(str)

  
  // console.log('options', options)
  // let convertedAddition = String(options.addition)

  // let additionArray = []
  // // if ( !options.additionRepeatTimes ) {
  // //   additionArray.push(convertedAddition)
  // // } else {  
  // //   for (i=0; i<options.additionRepeatTimes; i++) {
  // //   additionArray.push(convertedAddition)
  // //   }
  // // }


  //   for (i=0; i<options.additionRepeatTimes; i++) {
  //   additionArray.push(convertedAddition)
  //   }

  // console.log('additionArray', additionArray)

  // if (!options.additionSeparator) {options.additionSeparator = '|'}
  // // let convertedAdditionSeparator = String(options.additionSeparator)
  // let additionString = additionArray.join(options.additionSeparator)
  // console.log('additionString', additionString)

  // let resultAndAddition = convertedStr + (additionString)
  // console.log('resultAndAddition', resultAndAddition)

  // let resultArray = []
  // // (!options.additionRepeatTimes)
  // // (typeof(options.additionRepeatTimes) !== Number)
  // if (!options.repeatTimes) {
  //   return resultAndAddition
  // } else {
  //   for (i=0; i<options.repeatTimes; i++) {
  //     resultArray.push(resultAndAddition)
  //   }
  // }
  



  // if (!options.separator) {
  //   options.separator = '+'
  // }
  // // let convertedSeparator = String(options.separator)
  // resultString = resultArray.join(options.separator)
  // console.log('resultString', resultString)
  // return resultString

  let repeatTimes = options.hasOwnProperty('repeatTimes') ? Number(options.repeatTimes) : 1;
  let separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? Number(options.additionRepeatTimes) : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';
  let separateString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str+separateString).join(separator)

}

repeater( 'la', {repeatTimes: 3})

module.exports = {
  repeater
};


  // if (!options.additionRepeatTimes) {
  //   additionArray.push(convertedAddition)
  // } else {  
  //   for (i=0; i<options.additionRepeatTimes; i++) {
  //   additionArray.push(convertedAddition)
  //   }
  // }