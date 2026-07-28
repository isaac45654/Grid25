/*=========================================================
    GRID25
    script.js
    PART 1
=========================================================*/

/*=========================================================
    PUZZLES
=========================================================*/

const puzzles = [

{
    letters:[
        "S","A","D","R","A",
        "D","B","C","O","U",
        "H","S","W","G","H",
        "O","I","I","H","A",
        "L","S","A","L","E"
    ]
},

{
    letters:[
        "L","A","N","A","B",
        "P","G","E","R","I",
        "H","R","B","I","C",
        "I","T","M","G","U",
        "A","T","O","L","A"
    ]
},

{
    letters:[
        "I","S","C","I","I",
        "R","E","A","L","T",
        "L","P","K","K","N",
        "I","S","C","S","P",
        "M","D","U","E","N"
    ]
},

{
    letters:[
        "B","L","H","T","S",
        "L","W","E","I","O",
        "F","L","R","I","E",
        "D","B","E","A","K",
        "O","C","N","L","S"
    ]
},

{
    letters:[
        "L","T","E","M","T",
        "E","D","P","O","I",
        "R","V","R","H","U",
        "G","O","E","R","S",
        "E","T","I","A","S"
    ]
},

{
    letters:[
        "B","E","T","N","R",
        "T","A","W","M","R",
        "C","O","T","O","K",
        "A","S","I","A","J",
        "O","T","M","Y","W"
    ]
},

{
    letters:[
        "I","L","M","G","E",
        "V","I","T","T","O",
        "E","C","O","S","N",
        "N","N","S","I","I",
        "R","I","G","P","E"
    ]
},

{
    letters:[
        "D","T","I","C","C",
        "A","E","E","S","I",
        "I","U","T","X","S",
        "D","D","A","G","A",
        "L","H","A","T","L"
    ]
},

{
    letters:[
        "A","U","L","T","C",
        "H","N","L","E","D",
        "C","I","O","M","A",
        "P","I","S","T","A",
        "H","R","E","A","M"
    ]
},

{
    letters:[
        "L","T","S","I","P",
        "A","D","E","E","R",
        "U","E","N","V","F",
        "I","U","S","G","G",
        "R","Q","E","E","R"
    ]
},

{
    letters:[
        "L","T","L","A","A",
        "E","E","E","I","P",
        "N","H","R","C","A",
        "S","P","R","A","D",
        "B","H","E","P","P"
    ]
},

{
    letters:[
        "G","O","T","L","E",
        "I","S","T","O","D",
        "H","U","E","S","U",
        "H","S","G","C","A",
        "L","R","N","O","S"
    ]
},

{
    letters:[
        "A","B","E","C","A",
        "L","H","Y","R","I",
        "S","P","A","H","T",
        "U","E","F","T","R",
        "P","I","W","E","M"
    ]
},

{
    letters:[
        "N","O","E","A","M",
        "C","R","A","L","A",
        "D","B","C","R","K",
        "E","L","M","E","F",
        "L","E","T","E","G"
    ]
},

{
    letters:[
        "T","V","T","S","O",
        "A","I","E","P","H",
        "R","E","S","R","T",
        "I","A","T","R","W",
        "E","O","A","E","N"
    ]
},

{
    letters:[
        "Y","R","P","C","G",
        "R","C","S","D","N",
        "G","L","M","E","O",
        "A","U","I","H","E",
        "S","A","E","A","E"
    ]
},

{
    letters:[
        "T","I","R","A","A",
        "R","P","O","D","W",
        "S","E","B","B","R",
        "P","T","O","O","H",
        "Y","R","N","N","S"
    ]
},

{
    letters:[
        "K","N","O","E","S",
        "M","K","R","U","G",
        "R","I","B","S","L",
        "E","E","A","Z","C",
        "S","A","S","B","A"
    ]
},

{
    letters:[
        "E","M","B","U","D",
        "N","F","E","H","R",
        "H","L","Q","E","W",
        "E","L","O","I","T",
        "U","A","N","S","E"
    ]
},

{
    letters:[
        "O","L","T","W","O",
        "H","M","G","G","A",
        "I","R","C","M","O",
        "T","U","C","A","D",
        "O","R","B","R","S"
    ]
},

{
    letters:[
        "G","E","A","E","I",
        "O","N","Z","N","B",
        "I","C","C","D","R",
        "I","N","C","E","R",
        "T","A","P","A","E"
    ]
},

{
    letters:[
        "G","P","O","A","L",
        "N","E","W","T","L",
        "F","N","O","E","J",
        "I","Y","K","I","E",
        "C","E","R","S","W"
    ]
},

{
    letters:[
        "L","U","U","U","R",
        "E","R","P","N","L",
        "R","N","E","A","L",
        "C","A","H","F","M",
        "O","C","D","O","O"
    ]
},

{
    letters:[
        "A","P","O","A","T",
        "R","L","S","L","S",
        "I","B","O","A","E",
        "I","H","R","D","O",
        "O","P","T","K","R"
    ]
},

{
    letters:[
        "F","N","S","K","A",
        "R","P","H","R","L",
        "S","M","U","S","S",
        "E","W","O","A","T",
        "Y","U","D","R","N"
    ]
},

{
    letters:[
        "C","A","T","C","I",
        "S","E","W","A","R",
        "M","L","O","L","U",
        "C","I","H","L","S",
        "N","A","R","N","L"
    ]
},

{
    letters:[
        "G","C","Y","H","A",
        "O","N","W","S","C",
        "P","N","I","E","E",
        "V","R","O","U","R",
        "N","A","H","D","I"
    ]
},

{
    letters:[
        "S","L","O","T","R",
        "B","E","M","V","Y",
        "C","R","E","N","I",
        "O","B","E","E","I",
        "A","V","L","E","R"
    ]
},

{
    letters:[
        "M","I","L","Y","I",
        "R","T","T","C","U",
        "E","N","D","F","B",
        "N","L","A","G","C",
        "A","C","O","I","Y"
    ]
},

];


/*=========================================================
    GAME STATE
=========================================================*/

let currentPuzzle = 0;

let board = [];

let selected = [];

let foundWords = [];

let removedHistory = [];


/*=========================================================
    DOM
=========================================================*/

const grid = document.getElementById("grid");

const currentWord =
document.getElementById("currentWord");

const foundWordsDiv =
document.getElementById("foundWords");

const puzzleNumber =
document.getElementById("puzzleNumber");

const submitButton =
document.getElementById("submitButton");

const clearButton =
document.getElementById("clearButton");

const infoButton =
document.getElementById("infoButton");

const closeInfoButton =
document.getElementById("closeInfoButton");

const infoModal =
document.getElementById("infoModal");

const winModal =
document.getElementById("winModal");

const nextPuzzleButton =
document.getElementById("nextPuzzleButton");

const correctSound =
document.getElementById("correctSound");

const wrongSound =
document.getElementById("wrongSound");

const winSound =
document.getElementById("winSound");


/*=========================================================
    START GAME
=========================================================*/

window.addEventListener("load",()=>{

    loadPuzzle(0);

    submitButton.onclick = submitWord;

    clearButton.onclick = clearSelection;

    infoButton.onclick = ()=>{

        infoModal.classList.remove("hidden");

    };

    closeInfoButton.onclick = ()=>{

        infoModal.classList.add("hidden");

    };

    nextPuzzleButton.onclick = nextPuzzle;

});


/*=========================================================
    LOAD PUZZLE
=========================================================*/

function loadPuzzle(index){

    currentPuzzle = index;

    selected = [];

    foundWords = [];

    removedHistory = [];

    board = [];

    grid.innerHTML = "";

    foundWordsDiv.innerHTML = "";

    currentWord.innerHTML = "&nbsp;";

    puzzleNumber.textContent =
        "Puzzle #" + (index + 1);

    puzzles[index].letters.forEach(letter=>{

        board.push({

            letter:letter,

            removed:false,

            element:null

        });

    });

    drawBoard();

}


/*=========================================================
    DRAW BOARD
=========================================================*/

function drawBoard(){

    grid.innerHTML = "";

    board.forEach((tile,index)=>{

        const div =
        document.createElement("div");

        div.className = "tile";

        div.textContent =
        tile.letter;

        div.onclick = ()=>{

            toggleTile(index);

        };

        tile.element = div;

        grid.appendChild(div);

    });

}


/*=========================================================
    TILE SELECTION
=========================================================*/

function toggleTile(index){

    const tile = board[index];

    if(tile.removed){

        return;

    }

    if(selected.includes(index)){

        selected =
        selected.filter(i=>i!==index);

        tile.element.classList.remove(
            "selected"
        );

    }

    else{

        selected.push(index);

        tile.element.classList.add(
            "selected"
        );

    }

    updateCurrentWord();

}


/*=========================================================
    CURRENT WORD
=========================================================*/

function updateCurrentWord(){

    let word = "";

    selected.forEach(index=>{

        word += board[index].letter;

    });

    if(word===""){

        currentWord.innerHTML="&nbsp;";

    }

    else{

        currentWord.textContent = word;

    }

}


/*=========================================================
    CLEAR SELECTION
=========================================================*/

function clearSelection(){

    selected.forEach(index=>{

        board[index].element.classList.remove(
            "selected"
        );

    });

    selected = [];

    currentWord.innerHTML="&nbsp;";

}


/*=========================================================
    HELPER
=========================================================*/

function getSelectedWord(){

    let word = "";

    selected.forEach(index=>{

        word += board[index].letter;

    });

    return word.toUpperCase();

}


/*=========================================================
    PART 2 STARTS HERE
=========================================================*/

/*=========================================================
    GRID25
    script.js
    PART 2
=========================================================*/


/*=========================================================
    OFFLINE WORD DICTIONARY

    This is a starter dictionary.
    More words can be added later.
=========================================================*/




/*=========================================================
    SUBMIT WORD
=========================================================*/

async function submitWord(){

    const word = getSelectedWord();


    if(word.length === 0){

        return;

    }


    try {


        const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
        );


        if(response.ok){

            removeSelectedLetters(word);

        }

        else{

            wrongWord();

        }


    }


    catch(error){


        console.error(
            "Dictionary API error:",
            error
        );


        wrongWord();


    }


}


/*=========================================================
    REMOVE SELECTED LETTERS
=========================================================*/

function removeSelectedLetters(word){


    const removed = [];


    selected.forEach(index=>{

        const tile = board[index];


        removed.push({

            index:index,

            letter:tile.letter

        });


        tile.removed = true;


        tile.element.classList.remove(
            "selected"
        );


        tile.element.classList.add(
            "correct"
        );


    });


    playSound(correctSound);


    setTimeout(()=>{


        removed.forEach(item=>{


            board[item.index]
            .element
            .classList.add(
                "removed"
            );


        });


        foundWords.push(word);


        removedHistory.push({

            word:word,

            tiles:removed

        });


        displayFoundWord(word);


        clearSelection();


        checkWin();


    },350);


}


/*=========================================================
    WRONG WORD
=========================================================*/

function wrongWord(){


    playSound(wrongSound);


    selected.forEach(index=>{


        board[index]
        .element
        .classList.add(
            "wrong"
        );


    });


    setTimeout(()=>{


        selected.forEach(index=>{


            board[index]
            .element
            .classList.remove(
                "wrong"
            );


        });


    },400);


}


/*=========================================================
    FOUND WORD DISPLAY
=========================================================*/

function displayFoundWord(word){


    const chip =
    document.createElement("div");


    chip.className =
    "word-chip";


    chip.textContent =
    word;


    chip.dataset.word =
    word;


    chip.addEventListener(
        "dblclick",
        ()=>undoWord(word)
    );


    foundWordsDiv.appendChild(chip);


}


/*=========================================================
    UNDO FOUND WORD
=========================================================*/

function undoWord(word){


    const record =
    removedHistory.find(
        item=>item.word===word
    );


    if(!record){

        return;

    }


    record.tiles.forEach(tile=>{


        const boardTile =
        board[tile.index];


        boardTile.removed=false;


        boardTile.element.classList.remove(
            "removed"
        );


        boardTile.element.classList.remove(
            "correct"
        );


    });


    removedHistory =
    removedHistory.filter(
        item=>item!==record
    );


    foundWords =
    foundWords.filter(
        item=>item!==word
    );


    const chip =
    foundWordsDiv.querySelector(
        `[data-word="${word}"]`
    );


    if(chip){

        chip.remove();

    }


}


/*=========================================================
    CHECK WIN
=========================================================*/

function checkWin(){


    const remaining =
    board.some(tile=>!tile.removed);


    if(remaining){

        return;

    }


    playSound(winSound);


    if(typeof confetti==="function"){


        confetti({

            particleCount:200,

            spread:120

        });


    }


    setTimeout(()=>{


        winModal.classList.remove(
            "hidden"
        );


    },500);


}


/*=========================================================
    SOUND HELPER
=========================================================*/

function playSound(sound){


    if(!sound){

        return;

    }


    sound.currentTime=0;


    sound.play()
    .catch(()=>{});


}


/*=========================================================
    PART 3 STARTS HERE
=========================================================*/

/*=========================================================
    GRID25
    script.js
    PART 3
=========================================================*/


/*=========================================================
    NEXT PUZZLE
=========================================================*/

function nextPuzzle(){


    winModal.classList.add(
        "hidden"
    );


    let next =
    currentPuzzle + 1;


    if(next >= puzzles.length){

        next = 0;

    }


    loadPuzzle(next);


}


/*=========================================================
    CLOSE POPUPS WHEN CLICKING OUTSIDE
=========================================================*/

window.addEventListener(
    "click",
    (event)=>{


        if(event.target === infoModal){

            infoModal.classList.add(
                "hidden"
            );

        }


        if(event.target === winModal){

            winModal.classList.add(
                "hidden"
            );

        }


    }
);


/*=========================================================
    KEYBOARD CONTROLS
=========================================================*/

document.addEventListener(
    "keydown",
    (event)=>{


        /*
            Escape = clear selection
        */

        if(event.key === "Escape"){

            clearSelection();

        }


        /*
            Enter = submit
        */

        if(event.key === "Enter"){

            submitWord();

        }


    }
);


/*=========================================================
    AUDIO INITIALISATION
=========================================================*/

[
    correctSound,
    wrongSound,
    winSound

].forEach(sound=>{


    if(sound){

        sound.load();

    }


});


/*=========================================================
    MOBILE TOUCH IMPROVEMENTS
=========================================================*/


let lastTouchTime = 0;


document.addEventListener(
    "touchend",
    (event)=>{


        const currentTime =
        new Date().getTime();


        if(
            currentTime - lastTouchTime < 300
        ){

            event.preventDefault();

        }


        lastTouchTime =
        currentTime;


    },
    {
        passive:false
    }
);


/*=========================================================
    BOARD SAFETY FUNCTIONS
=========================================================*/


function restoreAllLetters(){


    board.forEach(tile=>{


        tile.removed=false;


        tile.element.classList.remove(
            "removed"
        );


        tile.element.classList.remove(
            "correct"
        );


    });


}


/*=========================================================
    RESET CURRENT GAME
=========================================================*/

function resetCurrentGame(){


    selected=[];


    foundWords=[];


    removedHistory=[];


    restoreAllLetters();


    foundWordsDiv.innerHTML="";


    currentWord.innerHTML="&nbsp;";


}


/*=========================================================
    CHECK IF BOARD IS EMPTY
=========================================================*/

function getRemainingLetters(){


    return board.filter(
        tile=>!tile.removed
    );


}


/*=========================================================
    DEBUG HELPER

    Useful while creating puzzles.
    Type:
    debugBoard()
    in browser console.
=========================================================*/

function debugBoard(){


    console.table(

        board.map(
            (tile,index)=>({

                position:index,

                letter:tile.letter,

                removed:tile.removed

            })

        )

    );


}


/*=========================================================
    PART 4 STARTS HERE
=========================================================*/

/*=========================================================
    GRID25
    script.js
    PART 4
=========================================================*/


/*=========================================================
    EXTRA DICTIONARY WORDS

    Add more words here whenever you create
    harder puzzles.

    All words must be uppercase.
=========================================================*/




extraWords.forEach(word=>{

    dictionary.add(word);

});


/*=========================================================
    FINAL WORD CHECK

    Used by submitWord()

=========================================================*/




/*=========================================================
    PUZZLE CREATOR CHECKER

    Helps you test your own puzzles.

    Open browser console and run:

    checkPuzzle(0)

=========================================================*/

function checkPuzzle(number){


    const puzzle =
    puzzles[number];


    if(!puzzle){

        console.log(
            "Puzzle does not exist."
        );

        return;

    }


    console.log(
        "Letters:",
        puzzle.letters.join("")
    );


    console.log(
        "Solutions:",
        puzzle.solutions
    );


    puzzle.solutions.forEach(word=>{


        const letters =
        word.split("");


        let available =
        [...puzzle.letters];


        let possible=true;


        letters.forEach(letter=>{


            const index =
            available.indexOf(letter);


            if(index===-1){

                possible=false;

            }
            else{

                available.splice(
                    index,
                    1
                );

            }


        });


        console.log(
            word,
            possible
            ? "✓ possible"
            : "✗ impossible"
        );


    });


}


/*=========================================================
    STARTUP CHECKS
=========================================================*/


if(!Array.isArray(puzzles)){


    console.error(
        "GRID25: No puzzles found."
    );


}


else if(puzzles.length===0){


    console.error(
        "GRID25: Add puzzles first."
    );


}


/*=========================================================
    GRID25 COMPLETE
=========================================================*/