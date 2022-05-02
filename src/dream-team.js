const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  memForTeam = []
  teamName = []
  if (!Array.isArray(members)) return false;
  members.forEach( el => {
    if (typeof(el) === 'string') {memForTeam.push(el)}
  })
  memForTeam.forEach( elem => {
    elemTrimed = elem.trim()
    teamName.push(elemTrimed[0].toUpperCase())
    //for (i=0)
  })
  teamName.join('')
  console.log('team', teamName.join(''))
  
  return teamName.sort().join('')
  
}
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])

module.exports = {
  createDreamTeam
};
