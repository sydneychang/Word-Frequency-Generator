function generateWordFrequencyTable() {
    const wordList = parseString();
    const wordMap = createFrequencyMap(wordList);
    createWordFrequencyTable(wordMap);
}


function parseString() {
    const text = document.getElementById("text").value;
    const filteredSentence = removePunctuationAndNumbers(text);
    return filteredSentence.split(' ');
}

function removePunctuationAndNumbers(text) {
    const nonalphabetCharacters = /[^a-z ]/gi;
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
    document.getElementById("wordFrequencyTable").style.display = "inline";
    const mapInsert = document.getElementById("mapInsert");
    wordMap.forEach(function (value, key) {
        const newRow = document.createElement("TR");

        const newWordCell = document.createElement("TD");
        const newWordText = document.createTextNode(key);
        newWordCell.appendChild(newWordText);
        newRow.appendChild(newWordCell);

        const newFrequencyCell = document.createElement("TD");
        const newFrequencyText = document.createTextNode(value);
        newFrequencyCell.appendChild(newFrequencyText);
        newRow.appendChild(newFrequencyCell);

        mapInsert.appendChild(newRow);
    })
}

function generateRowContent() {
}

//clean code
//sort by count descending
//github
//import .txt file and run it
//learn nodejs


