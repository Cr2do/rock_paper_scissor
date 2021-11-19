var valueComputer = ['Rock','Paper','Scissors'] 
            
function game(){        
    for (let index = 0; index <5; index++){            
        let playerSelect = checkPlayerSelection();
        let computerSelection = computerPlay();         
        console.log(playRound(playerSelect,computerSelection))
    }
}

function playRound(playerSelection, computerSelection) {         
    console.log('playerSelection',playerSelection,'| computerSelection',computerSelection)
    if(playerSelection != null && computerSelection != null && computerSelection != undefined && computerSelection != undefined){                        
        if(playerSelection == 'rock' && computerSelection == 'rock'){
            return 'match null'
        }
        else if(playerSelection == 'rock' && computerSelection == 'paper'){
            return 'You Lose! Paper beats rock'
        }
        else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            return 'You Win! Rock beats Scissors'
        }
        else if(playerSelection == 'paper' && computerSelection == 'rock'){
            return 'You Win! Paper beats rock'
        }
        else if(playerSelection == 'paper' && computerSelection == 'paper'){
            return 'Match null'
        }
        else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            return 'You Lose! Scissors beats Paper'
        }
        else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
            return 'match null'
        }
        else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            return 'You Win! Scissors beats Paper'
        }
        else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            return 'You Lose! Rock beats Scissors'
        }else{
            return 'Breakdown'
        }

    }else{
        console.log('exit')
        return;            
    }
}
    
function computerPlay(){
    let randomSelection = Math.floor(Math.random() * valueComputer.length);
    return valueComputer[randomSelection].toLowerCase();        
}

function checkPlayerSelection(){
    let pSelect = prompt('Make your choice : Rock | Paper | Scissors');
    if(pSelect !=null && pSelect != undefined){
        if (pSelect.toLowerCase() == 'Rock'.toLowerCase() || pSelect.toLowerCase() == 'Paper'.toLowerCase() || pSelect.toLowerCase() == 'Scissors'.toLowerCase()) {                
            return pSelect.toLowerCase()                
        }else{
            checkPlayerSelection();
        }
    }else{
        
        return
    }        
}

game()