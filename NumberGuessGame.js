function guessNumber () {
    var randomNum =Math.floor( Math.random() * 51);
    
   console.log(randomNum);

    var guess;
    guess= prompt("Please enter a number between 0 and 50");
    console.log( "Your guess is:" + guess);
    
   
    if (guess < randomNum) {
        window.alert("Your guess is lower. Guess Again ")
    }
    else if(guess > randomNum){
        window.alert("Your guess is higher. Guess Again")  
    }
    else if (guess == randomNum){
        window.alert("Hurray!!! Your guess is correct")
    }
    else if (guess == {}){
        window.alert("You didnot guess any number. Please input number")
    }

}