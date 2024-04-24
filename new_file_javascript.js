const square= document.getElementById('square');
const button = document.querySelector('button');
const startButton= document.getElementById('startButton');
const stopButton= document.getElementById('stopButton');
const listener= button.addEventListener('click', stopButtonclicked,startButtonclicked);
let postionX = 0;
//the square will stop every alert is pulled but intead of being done it will double
//in speed each time you click the start button but the stop button doesn't ???function???
//however i did get it to do a feed back loop which is why the code functions differently then
//expected but fun tid bit.

//this will make the square animated and move
function animateSquare(){

    postionX += 1;
    square.style.left = postionX + 'px';

requestAnimationFrame(animateSquare);

}
//this is used as a stop function but the alerts do that anyway
function notanimateSquare(){
    postionX = null;
    square.style.left = postionX + 'px';
}

//this function suppose to make the animation start 
function startButtonclicked(startButton){
    animateSquare();
    

}

//if you turn this on(on by default) the square will go faster every time you get a alert.
//keep clicking it its fun to watch it fly across the screen.

function stopButtonclicked(stopButton){
   alert('pace quickens');
    notanimateSquare();
    animateSquare();
}

//this is used as a stop function but the alerts do that anyway

//function notanimateSquare(){
    //postionX = null;
    //square.style.left = postionX + 'px';
//}

