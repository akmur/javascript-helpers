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

// usage:
// delegate('.parentSelector', '.innerSelector', callbackFunction);
