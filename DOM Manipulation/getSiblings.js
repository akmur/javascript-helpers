/**
 * Get siblings of an element
 * @param  {String} selector - the selector we want to find the siblings of
 * @return {Object} array  - the array of siblings
 */

function getSiblings(selector) {
  const Element = document.querySelector(selector);
  const AllElements = [...Element.parentNode.children];
  const Siblings = AllElements.filter(item => {
    return !item.isEqualNode(Element);
  })
  return Siblings;
}


module.exports = getSiblings;
