let activePlayer = ["circle", "cross"];
let activePlayerIndex = 0; //circle begins..

function setMarker(fieldNum) {
    if(activePlayerIndex == 0) {
        document.getElementById('circle'+fieldNum).classList.remove('d-none');
        document.getElementById('field'+fieldNum).onclick = '';
        activePlayerIndex = 1;
    }else if(activePlayerIndex == 1) {
        document.getElementById('cross'+fieldNum).classList.remove('d-none');
        document.getElementById('field'+fieldNum).onclick = '';
        activePlayerIndex = 0;
    }
}

function checkWinner() {
    
}

