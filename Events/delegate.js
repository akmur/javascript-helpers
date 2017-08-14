function delegate(parent, target, fn){
    const parentDOM = document.querySelector(parent);
    const targetDOM = document.querySelector(target);
    parentDOM.addEventListener('click', (e) => {
        e.stopPropagation();
        if (targetDOM === e.target){
            fn();
        }
    })
}

// usage:
// delegate('.parentSelector', '.innerSelector', callbackFunction);
