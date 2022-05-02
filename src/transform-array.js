const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let arr2 = [...arr];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == `--discard-next`) {
      if (i == (arr2.length - 1)) {
        continue;
      } else {
        arr2.splice(i + 1, 1);
      }
    }
    if (arr2[i] == `--discard-prev`) {
      if (i == 0) {
        continue;
      } else {
        arr2.splice(i - 1, 1);
      }
    }
    if (arr2[i] == `--double-next`) {
      if (i == (arr2.length - 1)) {
        continue;
      } else {
        arr2.splice(i + 2, 0, arr2[i + 1]);
      }
    }
    if (arr2[i] == `--double-prev`) {
      if (i == 0) {
        continue;
      } else {
        arr2.splice(i - 2, 0, arr2[i - 1]);
      }
      i++;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == `--discard-next` || arr2[i] == `--discard-prev` || arr2[i] == `--double-next` || arr2[i] == `--double-prev`) {
      arr2.splice(i, 1);
      i--;
    }
  }

  return arr2;

}

module.exports = {
  transform
};
