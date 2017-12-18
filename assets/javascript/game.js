$ (document).ready(function(){

function rn(min,max){
	return Math.floor(Math.random() * (max-min +1)) + min;
}

var counter = 0;
var wins = 0;
var losses = 0;
var targetNumber = rn(19,120);
var gem1 = rn(1,12);
var gem2 = rn(1,12);
var gem3 = rn(1,12);
var gem4 = rn(1,12);

$("#nGuess").html(targetNumber);

function reset(){
	targetNumber = rn(19,120);
	$("#nGuess").html(targetNumber);
	gem1 = rn(1,12);
	gem2 = rn(1,12);
	gem3 = rn(1,12);
	gem4 = rn(1,12);
	counter = 0;
	$("#uGuess").text(counter);
}

function winner(){
	alert("You Win!");
	wins ++;
	$(win).text(wins);
	reset();
	} 

function loser(){
	alert("You Lose!");
	losses ++;
	$(loss).text(losses);
	reset();
	}

$('#diamond').on ('click', function(){
    counter = counter + gem1;
    $('#uGuess').text(counter); 

    if (counter === targetNumber){
      winner();
    }
    else if ( counter > targetNumber){
      loser();
    }   
  });

$('#emerald').on ('click', function(){
    counter = counter + gem2;
    $('#uGuess').text(counter); 

    if (counter === targetNumber){
      winner();
    }
    else if ( counter > targetNumber){
      loser();
    }   
  }); 

$('#ruby').on ('click', function(){
    counter = counter + gem3;
    $('#uGuess').text(counter); 

    if (counter === targetNumber){
      winner();
    }
    else if ( counter > targetNumber){
      loser();
    }   
  }); 

$('#sapphire').on ('click', function(){
    counter = counter + gem4;
    $('#uGuess').text(counter); 

    if (counter === targetNumber){
      winner();
    }
    else if ( counter > targetNumber){
      loser();
    }   
  }); 


});