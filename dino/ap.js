const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scor = document.getElementById("score")
const cactus2 = document.getElementById("cactus2")
const bird = document.getElementById("bird")
var score = 0; 

setInterval(counter , 10)
function counter(){
  document.getElementById("score").innerHTML = "score : "+ score++;
}
setInterval(trexrunnning2 , 100)
function trexrunnning2(){
  dino.style.backgroundImage = "url(img/dino2.png)"
}
setInterval(trexrunnning3 , 150)
function trexrunnning3(){
  dino.style.backgroundImage = "url(img/dino3.png)"
}

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top"));

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  let cactus2Left = parseInt(
    window.getComputedStyle(cactus2).getPropertyValue("left")
  );
  let birdLeft = parseInt(
    window.getComputedStyle(bird).getPropertyValue("left")
  ); 

  if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= 300) {
    
    alert("Game Over!" + " Таны оноо " + score);
    score = 0
  }
  if (cactus2Left < 100 && cactus2Left > 0 && dinoTop >= 300) {
    
    alert("Game Over!" + " Таны оноо " + score);
    score = 0
  }
  if ( birdLeft< 100 && birdLeft > 0 && dinoTop >= 150 && dinoTop <=190) {
    
    alert("Game Over!" + " Таны оноо " + score);
    score = 0
  }
}, 10);



  


document.addEventListener("keydown", function (event) {
  jump();
});

