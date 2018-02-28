var timer = require("@yoerivd/timer-as-promise").timer;

let text = document.getElementsByTagName('textarea')[0];
text.innerHTML = 'starting timer\n';
function printStuff(){
    text.innerHTML += 'hello people!'
}




timer(2000).then(printStuff);


