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

     console.log(numberRandom);

 
    



     
function resetGame  (){ 
        btnAgain.addEventListener('click', () =>{
        inputNumber.value = '';
        placeWinner.textContent.innerHTML = `???`;
        counter.textContent.innerHTML = `${count = 20}`;
        gusseinAnswers.textContent.innerHTML = 'Start Guessing Number';
        numberRandom = randomNumber();
        console.log(randomNumber());
      
    });
      
    };

 

     const startGame = function(){
        
   btnAdd.addEventListener('click', () =>{
    if(inputNumber.value != '' ){
        inputValuePerson = +inputNumber.value;
        
    
    }
    if( numberRandom == inputValuePerson){
        placeWinner.textContent.innerHTML = `${inputValuePerson} Winner`;
        gusseinAnswers.textContent.innerHTML = `Winned`;
        bestResult.textContent.innerHTML = `result: ${count}`;
        resetGame()
    } else if(inputValuePerson < numberRandom && inputValuePerson != numberRandom && count != 0 ){
      gusseinAnswers.textContent.innerHTML = 'less';
      counter.innerHTML = `${count--}`;
    }else if(inputValuePerson > numberRandom && inputValuePerson != numberRandom && count != 0){
      gusseinAnswers.textContent.innerHTML = 'Over';
      counter.innerHTML = `${count--}`;
    }
    if(count == 0 ){
    gusseinAnswers.textContent.innerHTML ='You Loose';
    counter.textContent.innerHTML = '0';
    }

});
  };
 




startGame();

resetGame();




