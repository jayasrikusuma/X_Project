function add(num1, num2) {
    return num1 + num2
}

function divide(num1, num2) {
    return num1 / num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function rockPaperScissors(player1, player2) {
    var result = "Its a draw";
    
    if( player1 == "Rock" && player2 =="Paper"){			
      //result = "Player 2 wins || \nPlayer1: " + player1 + "; Player2: "+ player2;
      result = "Player 2"

    } else if( player1 == "Paper" && player2 =="Scissors"){		
      //result = "Player 2 wins || \nPlayer1: "+player1 +"; Player2: "+ player2;
      result = "Player 2";

    } else if( player1 == "Scissors" && player2 =="Rock"){		
      //result = "Player 2 wins || \nPlayer1: "+player1 +"; Player2: "+ player2;
      result = "Player 2";

    } else if(( player1 == "Rock" && player2 =="Scissors") || ( player1 == "Paper" && player2 =="Rock") || ( player1 == "Scissors" && player2 =="Paper") ){			
      //result = "Player1 wins || \nPlayer1: "+player1 +"; Player2: "+ player2;	
      result = "Player 1"
      
    }else if( (player1 == "Rock" & player2 =="Rock") | (player1 == "Paper" & player2 =="Paper") | (player1 == "Scissors" & player2 =="Scissors") ){ 
      result = "Its a draw";
  
    }
    
    return result
}

module.exports = {add, subtract, multiply, divide}
