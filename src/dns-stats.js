const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  // throw new NotImplementedError('Not implemented');
  // console.log('domains', domains)
  let resultObject = {}
  domains.forEach( domain => {
    console.log('domain', domain)
    let arrayOfStrings = domain.split('.')
    let reverseArray = arrayOfStrings.reverse()
    let resultArray = []
    let resultString = ''
    // console.log('reverseArray', reverseArray)
    reverseArray.forEach( arraystring => {
      arraystring = '.' + arraystring
      // console.log('arraystring', arraystring)
      // let resultString = ''
      resultString += arraystring
      resultArray.push(resultString)
    })
    // console.log('resultArray', resultArray)
    resultArray.forEach( resString => {
      if (!resultObject[resString]) {resultObject[resString] = 0}
      resultObject[resString] ++
      // console.log('resultObject', resultObject)
    })
  })
  // console.log('resultObject', resultObject)
  return resultObject

}

// getDNSStats (['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])
module.exports = {
  getDNSStats
};

