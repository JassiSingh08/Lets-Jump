var character = document.getElementById('character');
var block = document.getElementById('block'); 
var scorebox = document.getElementById('score');
var highscorebox = document.getElementById('Highscore');
let hiscoreval = 0;
let score = 0;
var start = document.getElementById('start');
let intervalId;
let intervalId2;



window.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp' || event.code === 'Space') {
    console.log('Arrow up or Space key pressed!');
    character.classList.add("animate");
    intervalId2 =  this.setTimeout(()=>{
      character.classList.remove('animate');
    },500)
  }
});


// To Start Button

window.addEventListener('click',function(){
  block.classList.add('animateblock');
  intervalId = setInterval(() => {
    score++;
    scorebox.innerHTML = "Score : "+score;
    if(score>hiscoreval){
      hiscoreval = score;
      localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
      highscorebox.innerHTML = "High Score: " + hiscoreval;
  }
  }, 300);
});


// check for Game Over 

var checkdead = setInterval(function(){
  var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
  if(blockleft<80 && blockleft>0 && charactertop>=180){
    block.classList.remove('animateblock');
    alert("Game Over. Score is " +score+ ".");
    score = 0;
    scorebox.innerHTML = "Score : "+score;
    clearInterval(intervalId,intervalId2);
    // location.reload()
  }
  
},10);

let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    highscorebox.innerHTML = "High Score: " + hiscore;
}