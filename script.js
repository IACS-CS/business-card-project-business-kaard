let play1 = true;
let play2 = true;
let play3 = true;
let play4 = true;

// Add click event listeners to card 1
document.querySelectorAll(".card-1").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if(play1){
      document.getElementById("aa1").pause();
      document.getElementById("aa1").currentTime = 0;
      document.getElementById("aa1").play()
      document.getElementById("av1").pause();
      document.getElementById("av1").currentTime = 0;
      document.getElementById("av1").play()
      play1 = false
    }
    else {
      play1 = true
    }
  });
});

// Add click event listeners to card 1-2
document.querySelectorAll(".card-1-2").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if(play2){
      document.getElementById("aa2").pause();
      document.getElementById("aa2").currentTime = 0;
      document.getElementById("aa2").play()
      document.getElementById("av2").pause();
      document.getElementById("av2").currentTime = 0;
      document.getElementById("av2").play()
      play2 = false
    }
    else {
      play2 = true
    }
  });
});
