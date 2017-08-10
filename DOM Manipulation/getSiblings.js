
function getSiblings(selector) {
  const Element = document.querySelector(selector);
  const AllElements = [...Element.parentNode.children];
  const Siblings = AllElements.filter(item => {
    return !item.isEqualNode(Element);
  })
  return Siblings;
}

// Usage Example

getSiblings('.js-item').forEach(item => {
  item.style.backgroundColor = 'red';
});