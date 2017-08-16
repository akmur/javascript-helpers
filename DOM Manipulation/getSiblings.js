/**
 * Get siblings of an element
 * @param  {String} selector - the selector we want to find the siblings of
 * @return {Object} array  - the array of siblings
 */

function getSiblings(targetSelector){
  const target = document.querySelector(targetSelector);
  const allChildren = target.parentNode.children;
  return [...allChildren].filter(child => !(target === child));
}

module.exports = getSiblings;
