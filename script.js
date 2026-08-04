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
    date:"2026-08-04",
    letters:[
        "A","H","M","I","S",
        "T","T","P","G","B",
        "I","T","O","H","R",
        "Y","O","E","L","I",
        "S","D","A","N","H"
    ]
},

{
    date:"2026-08-05",
    letters:[
        "B","T","I","R","L",
        "L","T","D","R","A",
        "F","O","N","I","D",
        "R","E","O","H","C",
        "H","Y","T","B","L"
    ]
},

{
    date:"2026-08-06",
    letters:[
        "D","O","I","T","R",
        "M","P","T","F","N",
        "C","U","O","R","L",
        "E","E","F","E","I",
        "H","D","N","L","I"
    ]
},

{
    date:"2026-08-07",
    letters:[
        "L","U","N","B","I",
        "D","G","F","I","O",
        "L","I","N","D","R",
        "N","U","W","E","R",
        "T","M","O","P","L"
    ]
},

{
    date:"2026-08-08",
    letters:[
        "U","S","A","E","A",
        "T","T","R","N","L",
        "B","S","F","K","A",
        "O","E","R","Q","I",
        "A","U","N","T","S"
    ]
},

{
    date:"2026-08-09",
    letters:[
        "O","T","M","H","R",
        "D","A","Y","E","E",
        "E","O","Y","H","T",
        "T","R","V","R","G",
        "R","A","E","I","T"
    ]
},

{
    date:"2026-08-10",
    letters:[
        "B","C","R","A","K",
        "L","H","Y","A","E",
        "L","A","D","R","O",
        "T","M","C","O","E",
        "A","T","U","B","L"
    ]
},

{
    date:"2026-08-11",
    letters:[
        "I","E","A","N","S",
        "H","E","L","N","P",
        "A","S","N","T","Y",
        "R","U","M","O","I",
        "P","W","H","E","N"
    ]
},

{
    date:"2026-08-12",
    letters:[
        "E","T","A","N","S",
        "T","C","A","T","E",
        "R","P","A","I","C",
        "N","S","E","N","U",
        "I","L","R","A","A"
    ]
},

{
    date:"2026-08-13",
    letters:[
        "S","E","N","H","L",
        "S","L","X","A","U",
        "C","S","N","A","I",
        "I","R","B","E","P",
        "H","W","E","E","N"
    ]
},

{
    date:"2026-08-14",
    letters:[
        "R","E","T","A","F",
        "N","L","E","O","O",
        "D","A","I","N","H",
        "P","E","G","N","I",
        "A","L","B","N","E"
    ]
},

{
    date:"2026-08-15",
    letters:[
        "T","C","E","O","L",
        "Y","A","C","O","H",
        "O","L","R","A","K",
        "B","T","I","D","E",
        "P","N","A","G","I"
    ]
},

{
    date:"2026-08-16",
    letters:[
        "G","A","I","N","T",
        "M","P","O","T","N",
        "N","F","R","A","I",
        "V","I","U","E","A",
        "N","T","R","E","O"
    ]
},

{
    date:"2026-08-17",
    letters:[
        "K","B","M","E","C",
        "A","L","D","E","I",
        "N","P","T","N","E",
        "C","H","A","E","O",
        "I","P","L","N","E"
    ]
},

{
    date:"2026-08-18",
    letters:[
        "O","N","E","I","S",
        "D","V","A","R","R",
        "F","E","K","W","I",
        "O","U","T","R","A",
        "S","N","D","G","E"
    ]
},

{
    date:"2026-08-19",
    letters:[
        "W","R","R","I","M",
        "M","T","O","A","G",
        "O","A","I","P","T",
        "R","N","L","R","M",
        "O","W","O","E","W"
    ]
},

{
    date:"2026-08-20",
    letters:[
        "H","L","S","A","A",
        "P","O","I","I","L",
        "A","S","W","R","Y",
        "A","R","D","T","G",
        "N","O","E","U","S"
    ]
},

{
    date:"2026-08-21",
    letters:[
        "N","T","O","L","O",
        "T","F","U","B","L",
        "E","A","B","K","O",
        "I","E","L","N","T",
        "F","U","O","L","A"
    ]
},

{
    date:"2026-08-22",
    letters:[
        "H","R","E","E","B",
        "I","O","R","A","M",
        "T","N","S","I","W",
        "E","R","H","O","E",
        "T","S","E","I","G"
    ]
},

{
    date:"2026-08-23",
    letters:[
        "D","R","P","H","O",
        "G","N","I","P","S",
        "N","H","L","A","E",
        "I","O","D","E","W",
        "F","L","R","U","N"
    ]
},

{
    date:"2026-08-24",
    letters:[
        "N","A","U","T","I",
        "R","E","L","W","D",
        "T","E","H","R","B",
        "E","I","N","C","L",
        "O","T","K","R","E"
    ]
},

{
    date:"2026-08-25",
    letters:[
        "B","P","D","A","I",
        "C","H","K","R","R",
        "T","P","A","O","T",
        "A","N","M","I","B",
        "K","E","R","N","T"
    ]
},

{
    date:"2026-08-26",
    letters:[
        "A","L","E","P","N",
        "G","U","E","T","R",
        "A","P","A","H","E",
        "N","L","G","I","E",
        "N","A","P","U","E"
    ]
},

{
    date:"2026-08-27",
    letters:[
        "I","N","L","E","D",
        "I","B","C","N","H",
        "I","R","L","U","O",
        "G","T","A","C","D",
        "E","A","I","T","N"
    ]
},

{
    date:"2026-08-28",
    letters:[
        "S","G","I","B","N",
        "T","M","C","A","E",
        "S","C","P","E","T",
        "I","A","O","R","H",
        "I","R","N","S","E"
    ]
},

{
    date:"2026-08-29",
    letters:[
        "R","F","A","T","S",
        "B","A","N","T","R",
        "M","K","R","E","A",
        "P","A","O","S","U",
        "I","E","N","T","F"
    ]
},

{
    date:"2026-08-30",
    letters:[
        "N","A","I","I","M",
        "K","C","N","D","O",
        "E","O","T","U","E",
        "B","B","S","A","G",
        "R","O","E","K","R"
    ]
},

{
    date:"2026-08-31",
    letters:[
        "O","T","T","L","B",
        "V","F","U","A","L",
        "A","E","O","N","D",
        "R","R","A","E","M",
        "T","I","H","U","R"
    ]
},

{
    date:"2026-09-01",
    letters:[
        "E","I","S","N","Q",
        "T","P","N","A","T",
        "A","G","E","R","I",
        "I","N","F","V","O",
        "U","E","T","L","I"
    ]
},

{
    date:"2026-09-02",
    letters:[
        "M","I","E","B","G",
        "N","N","N","A","W",
        "D","H","O","C","I",
        "I","R","S","E","T",
        "C","U","P","A","M"
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

let submitting = false;
let currentPuzzle = 0;
let board = [];
let selected = [];
let foundWords = [];
let removedHistory = [];
let score = 0;
let bestScore = null;

function saveGame(){

    const saveData = {
    date: puzzles[currentPuzzle].date,
    removed: board.map(tile => tile.removed),
    foundWords,
    removedHistory,
    score
    };

    localStorage.setItem(
        "grid25-save",
        JSON.stringify(saveData)
    );

}


/*=========================================================
    DOM
=========================================================*/


const shareButton =
document.getElementById("shareButton");
const bestScoreStat =
document.getElementById("bestScoreStat");
const scoreDisplay =
document.getElementById("scoreDisplay");
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
    
    bestScoreStat.textContent =
    localStorage.getItem("grid25-best-score")
    || "-";

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

closeStatsButton.onclick = ()=>{

    statsModal.classList.add("hidden");

};

    closeInfoButton.onclick = ()=>{

        infoModal.classList.add("hidden");

    };

await loadDictionary();

    shareButton.onclick = shareScore;

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
    score = 0;
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

    removedHistory = save.removedHistory || [];
    score = save.score || foundWords.length;

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
    if(submitting) return;
    submitting = true;
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
        submitting = false;
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
    submitting = false;

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
    
score = foundWords.length;

const savedBest = localStorage.getItem("grid25-best-score");

if(savedBest === null || score < Number(savedBest)){

    localStorage.setItem(
        "grid25-best-score",
        score
    );

}
    updateStreak();


    if(typeof confetti==="function"){


        confetti({

            particleCount:200,

            spread:120

        });


    }


    setTimeout(()=>{

        updateStats();
        scoreDisplay.textContent =
    "Score: " + score;
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

async function shareScore(){

    const date = puzzles[currentPuzzle].date;

    const text =
`GRID25 ${date}

Score: ${score} 

Can you solve today's puzzle in fewer words?

https://isaac45654.github.io/Grid25/`;

    if (navigator.share) {

        try {

            await navigator.share({
                title: "GRID25",
                text: text
            });

        } catch (err) {
            // User cancelled
        }

    } else {

        await navigator.clipboard.writeText(text);

        showMessage("Score copied to clipboard!");

    }

}

/*=========================================================
    GRID25 COMPLETE
=========================================================*/