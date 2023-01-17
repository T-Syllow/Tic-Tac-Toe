let activePlayer = ["o", "x"];
let activePlayerIndex = 0; //circle begins..
let fieldValues = [];
let markedFields = 0;

function render() {
    fieldValues = [];
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

function isMarked(fieldNum) {
    if(document.getElementById('value'+fieldNum).innerText.includes('x') || document.getElementById('value'+fieldNum).innerText.includes('o')) {
        return false;
    } else {
        return true;
    }
}

function setMarker(fieldNum) {
    if(isMarked(fieldNum) == true) {
        if(activePlayerIndex == 0) {
            document.getElementById('circle'+fieldNum).classList.remove('d-none');
            document.getElementById('value'+fieldNum).innerText = 'o';
            markedFields++;
            checkWinner();
            activePlayerIndex = 1;
        }else if(activePlayerIndex == 1) {
            document.getElementById('cross'+fieldNum).classList.remove('d-none');
            document.getElementById('value'+fieldNum).innerText = 'x';
            markedFields++;
            checkWinner();
            activePlayerIndex = 0;
        }
    }
}

function checkWinner() {
    //horizontal wins. -->
    if(fieldValues[0][0].innerText.includes(activePlayer[activePlayerIndex]) && fieldValues[0][1].innerText.includes(activePlayer[activePlayerIndex]) && fieldValues[0][2].innerText.includes(activePlayer[activePlayerIndex])) {
        console.log('a');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    else if(fieldValues[1][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[1][2].innerText == activePlayer[activePlayerIndex]) {
        console.log('b');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    else if(fieldValues[2][0].innerText == activePlayer[activePlayerIndex] && fieldValues[2][1].innerText == activePlayer[activePlayerIndex] && fieldValues[2][2].innerText == activePlayer[activePlayerIndex]) {
        console.log('c');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    //vertikal wins. -->

   else if(fieldValues[0][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][0].innerText == activePlayer[activePlayerIndex] && fieldValues[2][0].innerText == activePlayer[activePlayerIndex]) {
        console.log('d');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    else if(fieldValues[0][1].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[2][1].innerText == activePlayer[activePlayerIndex]) {
        console.log('e');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    else if(fieldValues[0][2].innerText == activePlayer[activePlayerIndex] && fieldValues[1][2].innerText == activePlayer[activePlayerIndex] && fieldValues[2][2].innerText == activePlayer[activePlayerIndex]) {
        console.log('f');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    //diagonal wins -->

    else if(fieldValues[0][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[2][2].innerText == activePlayer[activePlayerIndex]) {
        console.log('g');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    else if(fieldValues[2][0].innerText == activePlayer[activePlayerIndex] && fieldValues[1][1].innerText == activePlayer[activePlayerIndex] && fieldValues[0][2].innerText == activePlayer[activePlayerIndex]) {
        console.log('h');
        showEndScreen(activePlayer[activePlayerIndex]);
    }

    else if(isTie()){
        showTieScreen();
    }
}

function isTie() {
    if(markedFields >= 9) {
        return true;
    } else {
        return false;
    }



    /*let isGameFinished = false;
    for (let i = 0; i < fieldValues.length; i++) {
        let row = fieldValues[i];
        for (let j = 0; j < row.length; j++) {
            if(!(row[j].includes('x') || row[j].includes('o'))) {
                
            } else {
                isGameFinished = true;
            }
        }
    }*/
}

function showEndScreen(winner) {
    document.getElementById('gameField').classList.add('d-none');
    document.getElementById('endScreen-container').innerHTML = generateEndScreen(winner);
    document.getElementById('endScreen-container').classList.remove('d-none');
}

function showTieScreen() {
    document.getElementById('gameField').classList.add('d-none');
    document.getElementById('endScreen-container').innerHTML = generateTieScreen();
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

function generateTieScreen() {
    return `
    <div id="endScreen" class="endscreen">
        <span> Unentschieden!</span>
        <button onclick="restartGame()">noch ein Spiel spielen</button>
    </div>
    `;
    
}

function restartGame() {
    document.getElementById('gameField').classList.remove('d-none');
    document.getElementById('endScreen-container').classList.add('d-none');
    for (let i = 1; i <=9; i++) {
        document.getElementById('value'+i).innerText = "";
    }
    activePlayerIndex = 0;
    markedFields = 0;
    clearFieldMarkers();
    render();
}

function clearFieldMarkers() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`cross${i}`).classList.add('d-none');
        document.getElementById(`circle${i}`).classList.add('d-none'); 
    }
}
