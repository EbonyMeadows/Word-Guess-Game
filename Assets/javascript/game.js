
//object
var musicObject = {
    bass: "bass",
    house: "house",
    trap: "trap"   
};

//global variables
var win = 0;
var loose = 0;
var userGuess = "";
var lettersWrong = "";
console.log(lettersWrong);

//function
//the next line of code: adds an _ for each letter in the word being guested.
for (i = 0; i < musicObject.bass.length; i++) {
    console.log ("added an underscore");
    document.getElementById ("bass").innerHTML +=
    "<span>&nbsp;_&nbsp</span>";
}

for (i = 0; i < musicObject.house.length; i++) {
    console.log ("added an underscore");
    document.getElementById ("house").innerHTML +=
    "<span>&nbsp;_&nbsp</span>";
}

for (i = 0; i < musicObject.trap.length; i++) {
    console.log ("added an underscore");
    document.getElementById ("trap").innerHTML +=
    "<span>&nbsp;_&nbsp</span>";
}


//prints the corresponding letter pressed to the html

document.onkeyup = function(event){
    userGuess = event.key;
    console.log(lettersWrong);

if (musicObject.bass){

}

else if (){

}


}


