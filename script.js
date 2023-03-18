var character = document.getElementById('character');
var block = document.getElementById('block'); 
var scorebox = document.getElementById('score');
// var highscorebox = document.getElementById('Highscore');
// let hiscoreval = 0;
let score = 0;
var start = document.getElementById('start');




window.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp' || event.code === 'Space') {
    console.log('Arrow up or Space key pressed!');
    character.classList.add("animate");
    this.setTimeout(()=>{
      character.classList.remove('animate');
    },500)
  }
});


// To Start Button

window.addEventListener('click',function(){
  block.classList.add('animateblock');
  setInterval(() => {
    score++;
    scorebox.innerHTML = "Score : "+score;
  }, 300);
});



// check for Game Over 

var checkdead = setInterval(function(){
  var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
  if(blockleft<50 && blockleft>0 && charactertop>=180){
    block.classList.remove('animateblock');
    alert("Game Over. Score is " +score+ ".");
    score = 0;
    scorebox.innerHTML = "Score : "+score;
    location.reload()
  }
  
},10);
