let activePlayer = ["o", "x"];
let activePlayerIndex = 0; //circle begins..
let fieldValues = [];

function render() {
    fieldValues.push([document.getElementById('value1'),  
    document.getElementById('value2'),
    document.getElementById('value3')]);

    fieldValues.push([document.getElementById('value4'),  
    document.getElementById('value5'),
    document.getElementById('value6')]);

    fieldValues.push([document.getElementById('value7'),  
    document.getElementById('value8'),
    document.getElementById('value9')]);

    clearFieldMarkers();
    
}

function setMarker(fieldNum) {
    if(activePlayerIndex == 0) {
        document.getElementById('circle'+fieldNum).classList.remove('d-none');
        document.getElementById('field'+fieldNum).onclick = '';
        document.getElementById('value'+fieldNum).innerText = 'o';
        checkWinner();
        activePlayerIndex = 1;
    }else if(activePlayerIndex == 1) {
        document.getElementById('cross'+fieldNum).classList.remove('d-none');
        document.getElementById('field'+fieldNum).onclick = '';
        document.getElementById('value'+fieldNum).innerText = 'x';
        checkWinner();
        activePlayerIndex = 0;
    }
}

function checkWinner() {
    //horizontal wins. -->
    if(fieldValues[0][0].innerText.includes(activePlayer[activePlayerIndex]) && fieldValues[0][1].innerText.includes(activePlayer[activePlayerIndex]) && fieldValues[0][2].innerText.includes(activePlayer[activePlayerIndex])) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    if(fieldValues[1][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[1][2].innerText == activePlayer[activePlayerIndex]) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    if(fieldValues[2][0].innerText == activePlayer[activePlayerIndex] && fieldValues[2][1].innerText == activePlayer[activePlayerIndex] && fieldValues[2][2].innerText == activePlayer[activePlayerIndex]) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    //vertikal wins. -->

    if(fieldValues[0][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][0].innerText == activePlayer[activePlayerIndex]) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    if(fieldValues[0][1].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[2][1].innerText == activePlayer[activePlayerIndex]) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    if(fieldValues[0][2].innerText == activePlayer[activePlayerIndex] && fieldValues[1][2].innerText == activePlayer[activePlayerIndex] && fieldValues[2][2].innerText == activePlayer[activePlayerIndex]) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    //diagonal wins -->

    if(fieldValues[0][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[2][2].innerText == activePlayer[activePlayerIndex]) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    if(fieldValues[2][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[0][2].innerText == activePlayer[activePlayerIndex]) {
        console.log(activePlayer[activePlayerIndex] + " wins!");
        showEndScreen(activePlayer[activePlayerIndex]);
    }
}

function showEndScreen(winner) {
    document.getElementById('gameField').classList.add('d-none');
    document.getElementById('endScreen-container').innerHTML = generateEndScreen(winner);
    document.getElementById('endScreen-container').classList.remove('d-none');
}

function generateEndScreen(winner) {
    if(winner.includes('x')) {
        return `
        <div id="endScreen" class="endscreen">
            <img src="./img/cross.png" class="smallerShape">
            <span> gewinnt!</span>
            <button onclick="restartGame()">noch ein Spiel spielen</button>
        </div>
    `
    }
    if(winner.includes('o')) {
        return `
        <div id="endScreen" class="endscreen">
            <img src="./img/circle.png" class="smallerShape">
            <span> gewinnt!</span>
            <button onclick="restartGame()">noch ein Spiel spielen</button>
        </div>

    `
    }
    
}

function restartGame() {
    document.getElementById('gameField').classList.remove('d-none');
    document.getElementById('endScreen-container').classList.add('d-none');
    for (let i = 1; i <=9; i++) {
        document.getElementById('value'+i).innerText = "";
    }
    for (let j = 1; j < 9; j++) {
        document.getElementById('field'+j).onclick = `setMarker(${j})`; 
    }
    activePlayerIndex = 0;
    clearFieldMarkers();
    render();
}

function clearFieldMarkers() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`cross${i}`).classList.add('d-none');
        document.getElementById(`circle${i}`).classList.add('d-none'); 
    }
}
