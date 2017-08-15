function toTitleCase(words){
    var wordArray = words.toLowerCase().split(' ');
    var capitalizedWords = wordArray.map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capitalizedWords.join(' ');
}

module.exports = toTitleCase;
