let activePlayer = ["circle", "cross"];
let activePlayerIndex = 0; //circle begins..
let fields = [

    //first-Row
    [   document.getElementById('field1'),  
        document.getElementById('field2'),
        document.getElementById('field3')   ],

    //second-Row
    [   document.getElementById('field4'),
        document.getElementById('field5'),
        document.getElementById('field6')   ],

    //third-Row
    [   document.getElementById('field7'),
        document.getElementById('field8'),
        document.getElementById('field9')   ]
]

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
    if(fields[0][1] && fields[0],[2] && fields[0],[3]) {

    }
}

