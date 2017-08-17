function isLocalStorageEnabled() {
    if (typeof localStorage === 'object') {
        var localStorageExists = false;
        try {
            localStorage.setItem('localStorage', 1);
            localStorage.removeItem('localStorage');
            localStorageExists = true;
        } catch (e) {
            Storage.prototype._setItem = Storage.prototype.setItem;
            Storage.prototype.setItem = function() {};
        }
        return localStorageExists;
    }
}

module.exports = isLocalStorageEnabled;
