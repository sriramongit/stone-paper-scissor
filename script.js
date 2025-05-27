let scores = {};
let result = "";
let compMove = "";
let userMove = "";
let auto = false;
let darkTheme = false;
let Interval1;
let username;

let autoplayBtn = document.querySelector(".btn-autoplay");
validatingUsername();

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r')
    startGame('rock');
  if (event.key === 'p')
    startGame('paper');
  if (event.key === 's')
    startGame('scissor');
});

function validatingUsername() {
  let usernameTemplate = document.querySelector(".username");

  if (!localStorage.getItem('username')) {
    username =
      prompt(
        "Hey Legend🔥 Before we throw Rocks🪨, Papers📄 and Scissors✂️ around, what's gonna be your EPIC username?"
      ).toUpperCase() + " ";
    localStorage.setItem("username", username);
  } else { 
    username = localStorage.getItem('username');
  }
  
  if (!username) {
    alert(
      `🔥 Welcome, User! Let the battle of Stone, Paper & Scissors begin! 🪨📄✂️`
    );
  } else {
    alert(
      `🔥 Welcome, ${username}! Let the battle of Stone, Paper & Scissors begin! 🪨📄✂️`
    );
  }

  username = username.substring(0, username.indexOf(" "));
  usernameTemplate.innerHTML = `${username}`;
}

function startGame(move) {
  userMove = move;
  let random = Math.random();

  // console.log(userMove);

  //if computer move is rock
  if (random >= 0 && random < 1 / 3) {
    compMove = "rock";

    if (move === "rock") {
      result = "Tie!";
    } else if (move === "paper") {
      result = "User Wins!";
    } else {
      result = "Computer Wins!";
    }

    UpdateScoreBoard();
    displayScoreBoard();
  }
  //if computer move is paper
  else if (random >= 1 / 3 && random < 2 / 3) {
    compMove = "paper";

    if (move === "rock") {
      result = "Computer Wins!";
    } else if (move === "paper") {
      result = "Tie!";
    } else {
      result = "User Wins!";
    }

    UpdateScoreBoard();
    displayScoreBoard();
  }
  //if computer move is scissor
  else {
    compMove = "scissor";

    if (move === "rock") {
      result = "User Wins!";
    } else if (move === "paper") {
      result = "Computer Wins!";
    } else {
      result = "Tie!";
    }

    UpdateScoreBoard();
    displayScoreBoard();
  }
}

function UpdateScoreBoard() {
  //initializing the scores if not in local storage
  if (!localStorage.getItem("scores")) {
    scores = {
      wins: 0,
      losses: 0,
      ties: 0,
    };
  } else {
    scores = JSON.parse(localStorage.getItem("scores"));
  }

  //updating the scoreboard
  if (result === "User Wins!") {
    //if the user wins
    scores.wins += 1;
  } else if (result === "Computer Wins!") {
    //if the computer wins
    scores.losses += 1;
  } else {
    //if result is a tie
    scores.ties += 1;
  }

  localStorage.setItem("scores", JSON.stringify(scores));
}

function displayScoreBoard() {
  // if(this.userMove == 'undefined'){
  //     this.userMove = '__';
  // }

  document.querySelector(".move1").innerHTML = `${userMove}`;
  document.querySelector(".move2").innerHTML = `${compMove}`;

  document.querySelector(".user-score").innerHTML = `${scores.wins}`;
  document.querySelector(".comp-score").innerHTML = `${scores.losses}`;

  // Update user image
  const userImg = document.querySelector(".player1-img");
  if (userMove === "rock") {
    userImg.src = "assets/rock.png";
  } else if (userMove === "paper") {
    userImg.src = "assets/paper.png";
  } else if (userMove === "scissor") {
    userImg.src = "assets/scissor.png";
  } else {
    userImg.src = "assets/ChatGPT Image May 17, 2025, 07_36_08 PM.png"; // default
  }

  // Update computer image
  const compImg = document.querySelector(".player2-img");
  if (compMove === "rock") {
    compImg.src = "assets/rock.png";
  } else if (compMove === "paper") {
    compImg.src = "assets/paper.png";
  } else if (compMove === "scissor") {
    compImg.src = "assets/scissor.png";
  } else {
    compImg.src = "assets/ChatGPT Image May 17, 2025, 07_36_15 PM.png"; // default
  }

  userMove = "";
  compMove = "";
  result = "";
}

function resetGame() {
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;
  localStorage.removeItem("scores");

  userMove = "__";
  compMove = "__";

  displayScoreBoard();

  localStorage.removeItem("username");
  validatingUsername();

}

//to autogenerate userMove
function autoplay() {
  Interval1 = setInterval( () => {
    let random = Math.random();

    if (random >= 0 && random < 1 / 3) {
      userMove = "rock";
    }
    //if computer move is paper
    else if (random >= 1 / 3 && random < 2 / 3) {
      userMove = "paper";
    }
    //if computer move is scissor
    else {
      userMove = "scissor";
    }

    startGame(userMove);
  }, 1500);
}

UpdateScoreBoard();
displayScoreBoard();
