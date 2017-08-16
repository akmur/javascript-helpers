function capitalize(phrase){
    const phraseArray = phrase.toLowerCase().split(' ');
    return phraseArray.map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

module.exports = capitalize;
