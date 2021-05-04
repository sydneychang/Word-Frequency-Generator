//global variables 
let talliedList = [];
let isSorted;
let sortedList = [];

//create initial table 
function generateWordFrequencyTable() {
    resetTable();
    processAndTallyWords();
    createWordFrequencyTable(talliedList);
    isSorted = null;
}

function resetTable() {
    const nodeToClear = document.getElementById("mapInsert");
    removeAllChildNodes(nodeToClear);
}

function removeAllChildNodes(node) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}

function processAndTallyWords() {
    const wordList = parseString();
    talliedList = createFrequencyList(wordList);
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

function createFrequencyList(wordList) {
    let map = new Map();
    for (let word of wordList) {
        const keyword = word.toLowerCase();
        if (!map.has(keyword)) {
            map.set(keyword, 0);
        }
        let newCount = map.get(keyword) + 1;
        map.set(keyword, newCount);
    }
    return Array.from(map);
}

function createWordFrequencyTable(wordFrequencyList) {
    document.getElementById("wordFrequencyTable").className = "visible";
    const mapInsert = document.getElementById("mapInsert");
    wordFrequencyList.forEach(function (value) {
        const newRow = document.createElement("TR");

        generateRowContent(value[0], newRow);
        generateRowContent(value[1], newRow);

        mapInsert.appendChild(newRow);
    })
}

function generateRowContent(arrayElement, newRow) {
    const newCell = document.createElement("TD");
    const newText = document.createTextNode(arrayElement);
    newCell.appendChild(newText);
    newRow.appendChild(newCell);
}

//onClick event of TH sort table to sort
function sortByCount() {
    resetTable();
    if (isSorted === null) {
        sortedList = talliedList.sort(function (a, b) {
            return a[1] - b[1];
        });
        isSorted = true;
    } else {
        sortedList.reverse();
    }
    createWordFrequencyTable(sortedList);
}

function readFile(event) {
    var input = event.target;
    var fileReader = new FileReader();
    fileReader.readAsText(input.files[0]);
    fileReader.onload = function () {
        document.getElementById('text').textContent = fileReader.result;
    }
}



//how to deal with hypenated words and apostrophes
//binary heap vs array for sorting

//add quick bootstrap beautification
//github
//import .txt file and run it...or scrape data from a webpage
//learn nodejs
