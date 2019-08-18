
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
    console.log("added an underscore");
    document.getElementById("bass").innerHTML +=
        "<span>&nbsp;_&nbsp</span>";
}

for (i = 0; i < musicObject.house.length; i++) {
    console.log("added an underscore");
    document.getElementById("house").innerHTML +=
        "<span>&nbsp;_&nbsp</span>";
}

for (i = 0; i < musicObject.trap.length; i++) {
    console.log("added an underscore");
    document.getElementById("trap").innerHTML +=
        "<span>&nbsp;_&nbsp</span>";
}


//prints the corresponding letter pressed to the html

document.onkeyup = function (event) {
    userGuess = event.key;
    console.log(lettersWrong);

    if (musicObject.bass.indexOf(userGuess) == -1) {
        console.log('${userGuess} ifs not in this word.');
        document.getElementById("lose-text").innerHTML += userGuess;
    }
    else if (musicObject.bass.indexOf(userGuess) >= 0) {
        //the location of the correct letter.
        for (i = 0; i < musicObject.bass.length; i++) {
            if (userGuess === musicObject.bass.name[i]) {
                //correct letter in location
                console.log(correct letter at location ${ i });
                document.getElementById(letter${ i }).innerHTML = userGuess;
            } else {
                //these are not the location
            }
        }
    }


}


