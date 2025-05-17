let scores = {};
        let result = '';
        let compMove = '';
        let userMove = '';


        function startGame(userMove) {

            this.userMove = userMove;
            let random = Math.random();
           
            // console.log(userMove);

            //if computer move is rock
            if(random >= 0 && random < 1/3){

                compMove = 'rock';

                if(userMove === 'rock'){
                    result = 'Tie!';
                }else if(userMove === 'paper'){
                    result = 'User Wins!';
                }else{
                    result = 'Computer Wins!';
                }
            
                UpdateScoreBoard(result);
                displayScoreBoard();

            }
            //if computer move is paper 
            else if(random >= 1/3 && random <2/3) {

                compMove = 'paper';

                if(userMove === 'rock'){
                    result = 'Computer Wins!';
                }else if(userMove === 'paper'){
                    result = 'Tie!';
                }else{
                    result = 'User Wins!';
                }

                UpdateScoreBoard(result);
                displayScoreBoard();
            }
            //if computer move is scissor
            else{

                compMove = 'scissor';

                if(userMove === 'rock'){
                    result = 'User Wins!';
                }else if(userMove === 'paper'){
                    result = 'Computer Wins!';
                }else{
                    result = 'Tie!';
                }

                UpdateScoreBoard(result);
                displayScoreBoard();
            }
        }

        function UpdateScoreBoard(result){

            //initializing the scores if not in local storage
            if(!localStorage.getItem('scores')){
                scores = {
                    wins: 0, 
                    losses: 0, 
                    ties: 0 
                }
            }else{
                scores = JSON.parse(localStorage.getItem('scores'));
            }

            //updating the scoreboard
            if(result === 'User Wins!') {
                //if the user wins
                scores.wins += 1;
            }else if(result === 'Computer Wins!'){
                //if the computer wins
                scores.losses += 1;
            }else{
                //if result is a tie
                scores.ties += 1;
            }

            localStorage.setItem('scores', JSON.stringify(scores));
        }

        function displayScoreBoard() {


            document.querySelector('.move1').innerHTML = `${this.userMove}`;
            document.querySelector('.move2').innerHTML = `${compMove}`;

            document.querySelector('.user-score').innerHTML = `${scores.wins}`;
            document.querySelector('.comp-score').innerHTML = `${scores.losses}`;

            // Update user image
            const userImg = document.querySelector('.player1-img');
            if (this.userMove === 'rock') {
                userImg.src = 'assets/rock.png';
            } else if (this.userMove === 'paper') {
                userImg.src = 'assets/paper.png';
            } else if (this.userMove === 'scissor') {
                userImg.src = 'assets/scissor.png';
            } else {
                userImg.src = 'assets/ChatGPT Image May 17, 2025, 07_36_08 PM.png'; // default
            }

            // Update computer image
            const compImg = document.querySelector('.player2-img');
            if (compMove === 'rock') {
                compImg.src = 'assets/rock.png';
            } else if (compMove === 'paper') {
                compImg.src = 'assets/paper.png';
            } else if (compMove === 'scissor') {
                compImg.src = 'assets/scissor.png';
            } else {
                compImg.src = 'assets/ChatGPT Image May 17, 2025, 07_36_15 PM.png'; // default
            }

            this.userMove = '';
            compMove = '';
            result = '';
        }

        function resetGame() {
            scores.wins = 0;
            scores.losses = 0;
            scores.ties = 0;
            localStorage.removeItem('scores');

            this.userMove = '__';
            compMove = '__';

            displayScoreBoard();
        }