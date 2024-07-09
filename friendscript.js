 // Initialize tic-tac-toe board state
 let arr = ['', '', '', '', '', '', '', '', '', ''];
 let currentPlayer = 'x';
 let count = 0;

 // Function to display the tic-tac-toe board
 function functionDisplay() {
     document.getElementById('box1').innerText = arr[1];
     document.getElementById('box2').innerText = arr[2];
     document.getElementById('box3').innerText = arr[3];
     document.getElementById('box4').innerText = arr[4];
     document.getElementById('box5').innerText = arr[5];
     document.getElementById('box6').innerText = arr[6];
     document.getElementById('box7').innerText = arr[7];
     document.getElementById('box8').innerText = arr[8];
     document.getElementById('box9').innerText = arr[9];
     return;
 }

 // Function to check for win conditions
 function comparing() 
 {
     if (arr[1] === arr[2] && arr[2] === arr[3] && arr[1] !== '')
         return true;
     else if (arr[4] === arr[5] && arr[5] === arr[6] && arr[4] !== '')
         return true;
     else if (arr[7] === arr[8] && arr[8] === arr[9] && arr[7] !== '')
         return true;
     else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== '')
         return true;
     else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== '')
         return true;
     else if (arr[3] === arr[6] && arr[6] === arr[9] && arr[3] !== '')
         return true;
     else if (arr[1] === arr[5] && arr[5] === arr[9] && arr[1] !== '')
         return true;
     else if (arr[3] === arr[5] && arr[5] === arr[7] && arr[3] !== '')
         return true;
     else
         return false;
 }

 // Function to handle player's move
 function placeMark(position) {
     if (arr[position] === 'x' || arr[position] === 'o') {
         alert("This position is already chosen. Please choose another position.");
         return;
     }

     arr[position] = currentPlayer;
     functionDisplay();
     count++;

     if (comparing())
     {
         setTimeout(() => {
                 alert(`playeer ${currentPlayer} win the game`);
                 resetGame();
             }, 300);
         return;
     } 
     else if (count === 9) {
          setTimeout(() => {
                 alert(`the game is drow`);
                 resetGame();
             }, 200);
         return;
     }

     // Switch player after each move
     currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
     
 }

 // Function to reset the game
 function resetGame() 
 {
     arr = ['', '', '', '', '', '', '', '', '', ''];
     currentPlayer = 'x';
     count = 0;
     functionDisplay();
 }

 // Initial display of the tic-tac-toe board
 functionDisplay();