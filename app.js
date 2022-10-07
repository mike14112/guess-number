let  btnAgain = document.querySelector('.btn_again'),
     btnAdd = document.querySelector('.btn_add'),
     inputNumber = document.querySelector('.input_number'),
     placeWinner = document.querySelector('.place_winner_number'),
     counter = document.querySelector('.counter'),
     gusseinAnswers = document.querySelector('.start_guessing_place'),
     bestResult = document.querySelector('.best_result_place'),
     numberRandom = randomNumber(),
     inputValuePerson = 0,
     count = 20;

      function  randomNumber (){

        let   numberRandom = Math.floor(Math.random() * 20);

          return numberRandom;
     };

     console.log(numberRandom)



     
const resetGame = function (a){ 
    btnAgain.addEventListener('click', () =>{
        inputNumber.value = '';
        placeWinner.innerHTML = `???`;
        counter.innerHTML = ` 20`;
        gusseinAnswers.innerHTML = 'Start Guessing Number';
      numberRandom = randomNumber();
      
      console.log(numberRandom);
    });
      
    };


 
 
     const startGame = function(){
        
   btnAdd.addEventListener('click', () =>{
    if(inputNumber.value != '' ){
        inputValuePerson = +inputNumber.value;
        
    
    }
    if( numberRandom === inputValuePerson){
        placeWinner.innerHTML = `${inputValuePerson} Winner`;
        gusseinAnswers.innerHTML = `Winned`;
        bestResult.innerHTML = `result: ${count}`;


    }
    if (inputValuePerson < numberRandom){
        gusseinAnswers.innerHTML = `very little`;         
    }
     if (inputValuePerson < numberRandom){
        gusseinAnswers.innerHTML = `one too many`;
    }
    

    if(inputValuePerson != numberRandom){
        counter.innerHTML = `${count--}`;
    }
    if(count == 0){
        gusseinAnswers.innerHTML = `You loose!`;
      
        inputNumber.value = '';
        count = 20;
      
        counter.innerHTML = `${count}`;
      
     }

  
});
  };


startGame();

resetGame();