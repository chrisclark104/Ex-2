// A $( document ).ready() block.
$( document ).ready(function() {
});
var userEntry;
var factorial;


function onRun(){
    userEntry = parseInt($('#textinput').val());
    factorial = userEntry;
    for(var index = 1; index < userEntry; index++){
        factorial *= index;
    }
    alert("This is the Factorial of all numbers " + factorial);
}

