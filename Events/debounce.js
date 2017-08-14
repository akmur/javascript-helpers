// Debounce technique, will fire every 66ms on scroll

let timeout;

window.addEventListener('scroll', e => {
  if (!timeout) {
    timeout = setTimeout(() => {
      // do stuff
      timeout = null;
    }, 66);
  }
})
