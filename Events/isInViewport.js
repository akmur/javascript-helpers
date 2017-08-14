const isInViewport = function(elem){
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

// checking if element is in viewport on scroll

let timeout;

window.addEventListener('scroll', e => {
  if (!timeout) {
    timeout = setTimeout(() => {
      console.log(isInViewport(selector)); // for example '#target'
      timeout = null;
    }, 66);
  }
})
