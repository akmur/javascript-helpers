/**
 * A function for event delegation
 * @param  {String} selector - the selector of the parent element
 * @param  {String} selector - the selector of the target element within the parent
 * @return {Object} callback - the callback function
 *
 * usage:
 * delegate('.parentSelector', '.innerSelector', callbackFunction);
 */

function delegate(parent, target, callback){
    const parentDOM = document.querySelector(parent);
    const targetDOM = document.querySelector(target);
    parentDOM.addEventListener('click', (e) => {
        e.stopPropagation();
        if (targetDOM === e.target){
            callback();
        }
    })
}

module.exports = delegate;

