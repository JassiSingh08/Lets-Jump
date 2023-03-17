var character = document.getElementById('character');
var block = document.getElementById('block'); 
var scorebox = document.getElementById('score');
let score = 0;
var start = document.getElementById('start');
var checkdead = true;


window.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp' || event.code === 'Space') {
    console.log('Arrow up key pressed!');
    character.classList.add("animate");
    this.setTimeout(()=>{
      character.classList.remove('animate');
    },500)
  }
});


var checkdead = setInterval(function(){
  var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
  if(blockleft<20 && blockleft>0 && charactertop>=180){
    block.classList.remove('animateblock');
    alert("Game Over. Score is " +score);
    score = 0;
    scorebox.innerHTML = "Score : "+score;
  }
  },10);
  
  
start.addEventListener('click',function start(){
  block.classList.add('animateblock');
});


