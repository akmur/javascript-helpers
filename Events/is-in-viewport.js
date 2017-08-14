const isInViewPort = function(elem){
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
  const elementDistance = document.querySelector(elem).getBoundingClientRect();
  
  if (
    elementDistance.top >= 0 &&
    elementDistance.left >= 0 &&
    elementDistance.bottom < viewPortHeight &&
    elementDistance.left < viewPortWidth
  ) {
    return true;
  }
}

// checking if element is in viewport on scroll

let timeout;

window.addEventListener('scroll', e => {
  if (!timeout) {
    timeout = setTimeout(() => {
      console.log(isInViewPort(selector)); // for example '#target'
      timeout = null;
    }, 66);
  }
})
