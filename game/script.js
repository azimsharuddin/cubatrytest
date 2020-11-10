var character = document.getElementById('character');

var block = document.getElementById('block');

function jump() {
  if (character.classList != "animate"){
    character.classList.add('animate');
  }
  character.classList.add('animate');
  setTimeout(function functionName() {
    character.classList.remove("anianimate");
  },500);
}

//check mati dlm 10ms
var checkDead = setInterval(function functionName() {
  var characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top"));

  var blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    block.style.animation="none";
    block.style.display="none";
    alert("You lose!");
  }
},10);
