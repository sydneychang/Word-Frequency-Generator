function generateWordFrequencyTable() {
    resetTable();
    const wordList = parseString();
    const wordMap = createFrequencyMap(wordList);
    createWordFrequencyTable(wordMap);
}

function resetTable() {
    var nodeToClear = document.getElementById("mapInsert");
    removeAllChildNodes(nodeToClear);
}

function removeAllChildNodes(node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}
function parseString() {
    const text = document.getElementById("text").value;
    const filteredSentence = removePunctuationAndNumbers(text);
    return filteredSentence.split(' ');
}

function removePunctuationAndNumbers(text) {
    const nonalphabetCharacters = /\s+$|[^a-z ]/gi;
    return text.replace(nonalphabetCharacters, '');
}

function createFrequencyMap(wordList) {
    let map = new Map();
    for (let word of wordList) {
        const keyword = word.toLowerCase();
        if (!map.has(keyword)) {
            map.set(keyword, 0);
        }
        let newCount = map.get(keyword) + 1;
        map.set(keyword, newCount);
    }
    return map;
}

function createWordFrequencyTable(wordMap) {
    document.getElementById("wordFrequencyTable").className = "visible";
    const mapInsert = document.getElementById("mapInsert");
    wordMap.forEach(function (value, key) {
        const newRow = document.createElement("TR");

        generateRowContent(key, newRow);
        generateRowContent(value, newRow);

        mapInsert.appendChild(newRow);
    })
}

function generateRowContent(mapElement, newRow) {
    const newCell = document.createElement("TD");
    const newText = document.createTextNode(mapElement);
    newCell.appendChild(newText);
    newRow.appendChild(newCell);
}





//how to deal with hypenated words
//sort by count descending 
// click ascending/descending?

//add quick bootstrap beautification
//github
//import .txt file and run it...or scrape data from a webpage
//learn nodejs


