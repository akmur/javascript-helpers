/**
 * Find if element is in viewport
 * @public
 * @param  {String} selector - the selector we want check for presence in the viewport
 * @return {Boolean} true/false  - presence of element in the viewport
 */

function isInViewport(selector){
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const elementDistance = document.querySelector(elem).getBoundingClientRect();
  
  if (
    elementDistance.top >= 0 &&
    elementDistance.left >= 0 &&
    elementDistance.bottom < viewportHeight &&
    elementDistance.left < viewportWidth
  ) {
    return true;
  }
}

module.exports = isInViewPort;
