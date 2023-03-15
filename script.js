var character = document.getElementById('character');
var block = document.getElementById('block'); 


window.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowUp' || event.code === 'Space') {
    console.log('Arrow up key pressed!');
    character.classList.add("animate");
    this.setTimeout(()=>{
        character.classList.remove('animate');
    },500)
  }
});