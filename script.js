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
    date:"2026-07-30",
    letters:[
        "H","U","D","S","A",
        "B","R","A","C","R",
        "C","N","O","E","I",
        "E","R","D","N","L",
        "D","L","A","T","E"
    ]
},

{
    date:"2026-07-31",
    letters:[
        "R","S","G","Y","E",
        "L","G","A","R","B",
        "O","A","L","P","H",
        "L","L","I","T","K",
        "N","I","E","W","A"
    ]
},

{
    date:"2026-08-01",
    letters:[
        "A","B","E","L","N",
        "A","U","P","A","P",
        "R","E","R","A","L",
        "A","C","D","I","B",
        "H","N","L","E","R"
    ]
},

{
    date:"2026-08-02",
    letters:[
        "O","B","H","R","T",
        "Y","U","E","T","R",
        "P","S","A","E","E",
        "R","D","P","O","U",
        "H","G","N","E","S"
    ]
},

{
    date:"2026-08-03",
    letters:[
        "R","B","A","L","H",
        "E","C","A","S","A",
        "T","D","E","W","I",
        "F","R","E","T","E",
        "B","H","I","C","S"
    ]
},

{
    date:"2026-08-04",
    letters:[
        "O","E","T","P","R",
        "M","T","K","A","A",
        "O","H","S","N","T",
        "G","A","E","R","R",
        "V","E","D","E","T"
    ]
},

{
    date:"2026-08-05",
    letters:[
        "T","I","R","R","E",
        "H","O","E","K","L",
        "S","R","F","E","C",
        "E","W","D","R","T",
        "E","N","E","I","V"
    ]
},

{
    date:"2026-08-06",
    letters:[
        "M","O","T","B","L",
        "A","R","V","R","T",
        "S","E","I","K","I",
        "R","E","L","O","G",
        "H","C","T","E","I"
    ]
},

{
    date:"2026-08-07",
    letters:[
        "A","A","P","K","L",
        "N","C","R","D","W",
        "G","E","A","T","I",
        "H","E","N","A","C",
        "E","W","L","I","D"
    ]
},

{
    date:"2026-08-08",
    letters:[
        "T","M","U","E","A",
        "F","R","R","N","I",
        "S","U","E","I","T",
        "B","A","R","A","C",
        "D","G","C","I","L"
    ]
},

{
    date:"2026-08-09",
    letters:[
        "A","D","L","R","O",
        "E","M","F","I","G",
        "K","N","T","T","A",
        "L","R","S","E","R",
        "I","U","O","A","K"
    ]
},

{
    date:"2026-08-10",
    letters:[
        "R","M","A","E","N",
        "O","L","B","G","K",
        "I","E","R","T","L",
        "N","O","W","A","E",
        "C","P","B","R","E"
    ]
},

{
    date:"2026-08-11",
    letters:[
        "P","A","I","R","L",
        "A","S","S","E","R",
        "L","C","A","G","H",
        "N","T","H","I","W",
        "E","O","R","F","L"
    ]
},

{
    date:"2026-08-12",
    letters:[
        "W","V","A","N","T",
        "A","R","E","C","U",
        "T","H","A","B","M",
        "O","E","N","A","E",
        "R","S","K","I","D"
    ]
},

{
    date:"2026-08-13",
    letters:[
        "E","P","A","K","A",
        "T","E","D","N","L",
        "A","S","R","E","P",
        "H","G","E","A","S",
        "T","I","P","N","E"
    ]
},

{
    date:"2026-08-14",
    letters:[
        "T","R","D","E","C",
        "K","I","A","S","A",
        "R","R","T","N","B",
        "D","I","V","U","R",
        "L","E","C","H","E"
    ]
},

{
    date:"2026-08-15",
    letters:[
        "A","N","B","S","E",
        "A","C","G","A","T",
        "O","R","H","M","R",
        "K","E","R","Y","E",
        "U","F","O","N","R"
    ]
},

{
    date:"2026-08-16",
    letters:[
        "S","D","N","G","E",
        "R","V","L","E","A",
        "E","O","I","Y","L",
        "A","U","P","P","H",
        "H","L","C","D","R"
    ]
},

{
    date:"2026-08-17",
    letters:[
        "P","O","N","E","Y",
        "L","A","H","O","C",
        "J","K","E","N","M",
        "T","A","C","I","E",
        "R","O","L","N","Y"
    ]
},

{
    date:"2026-08-18",
    letters:[
        "G","T","O","E","E",
        "R","R","S","L","I",
        "A","F","E","B","E",
        "Z","T","V","W","A",
        "O","E","R","G","A"
    ]
},

{
    date:"2026-08-19",
    letters:[
        "E","R","D","G","R",
        "H","F","T","O","B",
        "R","T","A","N","U",
        "N","H","S","R","O",
        "E","A","L","I","D"
    ]
},

{
    date:"2026-08-20",
    letters:[
        "R","T","N","L","E",
        "W","E","H","A","D",
        "B","R","I","T","N",
        "K","U","I","O","C",
        "T","L","E","R","E"
    ]
},


];


let dictionary = new Set();

async function loadDictionary() {

    const response = await fetch("words.txt");

    const text = await response.text();

    dictionary = new Set(
        text
            .split("\n")
            .map(word => word.trim().toUpperCase())
    );

}


const message =
document.getElementById("message");

let messageTimeout;

function showMessage(text,type="info"){

    clearTimeout(messageTimeout);

    message.textContent=text;

    message.className=
        "message show " + type;

    messageTimeout=setTimeout(()=>{

        message.className="message";

    },1500);

}

/*=========================================================
    GAME STATE
=========================================================*/

let currentPuzzle = 0;

let board = [];

let selected = [];

let foundWords = [];

let removedHistory = [];

function saveGame(){

    const saveData = {

        date: puzzles[currentPuzzle].date,

        removed: board.map(tile => tile.removed),

        foundWords: foundWords,

        removedHistory: removedHistory

    };

    localStorage.setItem(
        "grid25-save",
        JSON.stringify(saveData)
    );

}


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

const statsButton =
document.getElementById("statsButton");

const statsModal =
document.getElementById("statsModal");

const closeStatsButton =
document.getElementById("closeStatsButton");

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

const completedStat =
document.getElementById("completedStat");

const streakStat =
document.getElementById("streakStat");

const bestStreakStat =
document.getElementById("bestStreakStat");

const firstPlayedStat =
document.getElementById("firstPlayedStat");

const countdown =
document.getElementById("countdown");

function getTodaysPuzzleIndex(){

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2,"0");

    const day = String(
        today.getDate()
    ).padStart(2,"0");

    const todayString =
        `${year}-${month}-${day}`;

    return puzzles.findIndex(
        puzzle => puzzle.date === todayString
    );

}

let countdownInterval;

function startCountdown(){

    clearInterval(countdownInterval);

    function update(){

        const now = new Date();

        const nextPuzzle = new Date(now);

        nextPuzzle.setHours(24,0,0,0);

        const diff = nextPuzzle - now;

        if(diff <= 0){

            location.reload();

            return;

        }

        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        countdown.textContent =
            `Next puzzle in ${hours}h ${minutes}m ${seconds}s`;

    }

    update();

    countdownInterval = setInterval(update,1000);

}

function updateStats(){

    const completedKeys = Object.keys(localStorage)
        .filter(key=>key.startsWith("grid25-completed-"));

    completedStat.textContent =
        completedKeys.length;

    firstPlayedStat.textContent =
        localStorage.getItem("grid25-first-played")
        || "-";

    streakStat.textContent =
        localStorage.getItem("grid25-current-streak")
        || "0";

    bestStreakStat.textContent =
        localStorage.getItem("grid25-best-streak")
        || "0";

}

function updateStreak(){

    const completedDates = Object.keys(localStorage)
        .filter(key => key.startsWith("grid25-completed-"))
        .map(key => key.replace("grid25-completed-",""))
        .sort();

    if(completedDates.length === 0){

        localStorage.setItem("grid25-current-streak","0");
        localStorage.setItem("grid25-best-streak","0");
        return;

    }

    const firstPlayed = new Date(completedDates[0]);

localStorage.setItem(
    "grid25-first-played",
    firstPlayed.toLocaleDateString(
        "en-AU",
        {
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    )
);

    let currentStreak = 1;
    let bestStreak = 1;

    for(let i=1;i<completedDates.length;i++){

        const previous = new Date(completedDates[i-1]);
        const current = new Date(completedDates[i]);

        const diff =
            (current - previous) /
            (1000*60*60*24);

        if(diff === 1){

            currentStreak++;

        }
        else{

            bestStreak = Math.max(
                bestStreak,
                currentStreak
            );

            currentStreak = 1;

        }

    }

    bestStreak = Math.max(
        bestStreak,
        currentStreak
    );

    const today = new Date().toISOString().slice(0,10);

if(completedDates.includes(today)){

    localStorage.setItem(
        "grid25-current-streak",
        currentStreak
    );

}else{

    localStorage.setItem(
        "grid25-current-streak",
        "0"
    );

}

    localStorage.setItem(
        "grid25-best-streak",
        bestStreak
    );

}

/*=========================================================
    START GAME
=========================================================*/

window.addEventListener("load", async ()=>{

    const todayIndex =
    getTodaysPuzzleIndex();

    if(todayIndex === -1){

        showMessage(
            "No puzzle for today.",
            "error"
        );

        return;

}

loadPuzzle(todayIndex);

    submitButton.onclick = submitWord;

    clearButton.onclick = clearSelection;

    infoButton.onclick = ()=>{

        infoModal.classList.remove("hidden");

    };

    statsButton.onclick = ()=>{

    updateStats();

    statsModal.classList.remove("hidden");

};

await loadDictionary();

closeStatsButton.onclick = ()=>{

    statsModal.classList.add("hidden");

};

    closeInfoButton.onclick = ()=>{

        infoModal.classList.add("hidden");

    };

    nextPuzzleButton.onclick = ()=>{

    winModal.classList.add("hidden");

};
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

    const date = new Date(
    puzzles[index].date
);

    puzzleNumber.textContent =
        date.toLocaleDateString(
            "en-AU",
            {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
            }
    );

    puzzles[index].letters.forEach(letter=>{

        board.push({

            letter:letter,

            removed:false,

            element:null

        });

    });

    drawBoard();

    const save = JSON.parse(
    localStorage.getItem("grid25-save")
);

if(
    save &&
    save.date === puzzles[index].date
){

    foundWords = save.foundWords || [];

    removedHistory =
        save.removedHistory || [];

    save.removed.forEach(
        (removed,i)=>{

            board[i].removed = removed;

            if(removed){

                board[i].element.classList.add(
                    "removed"
                );

            }

        }
    );

    foundWordsDiv.innerHTML="";

    foundWords.forEach(word=>{

        displayFoundWord(word);

    });

}

    const completed = localStorage.getItem(
    "grid25-completed-" + puzzles[index].date
);

if(completed){

    setTimeout(()=>{

        winModal.classList.remove("hidden");

        startCountdown();

    },200);

}

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

    if (word.length < 4) {

showMessage(
    "Word must be at least 4 letters.",
    "error"
    );

    return;

}


    if(word.length === 0){

        return;

    }


    if(dictionary.has(word)){

    removeSelectedLetters(word);

}
else{

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

        saveGame();

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

    saveGame();


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

    localStorage.setItem(
    "grid25-completed-" + puzzles[currentPuzzle].date,
    "true"
    );

    updateStreak();


    if(typeof confetti==="function"){


        confetti({

            particleCount:200,

            spread:120

        });


    }


    setTimeout(()=>{

        updateStats();

        winModal.classList.remove(
            "hidden"
        );

        startCountdown();


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