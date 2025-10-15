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
      document.getElementById("aa1").play();
      document.getElementById("av1").pause();
      document.getElementById("av1").currentTime = 0;
      setTimeout(() => {
      document.getElementById("av1").play()
      }, 350);
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
      document.getElementById("aa2").pause()
      document.getElementById("aa2").currentTime = 0
      document.getElementById("aa2").play()
      document.getElementById("av2").pause()
      document.getElementById("av2").currentTime = 0
      setTimeout(() => {
      document.getElementById("av2").play()
      }, 350);
      play2 = false
    }
    else {
      play2 = true
    }
  });
});

// Add click event listeners to card 1
document.querySelectorAll(".card-2").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if(play3){
      document.getElementById("aa3").pause();
      document.getElementById("aa3").currentTime = 0;
      document.getElementById("aa3").play()
      document.getElementById("av3").pause();
      document.getElementById("av3").currentTime = 0;
      setTimeout(() => {
      document.getElementById("av3").play()
      }, 350);
      play3 = false
    }
    else {
      play3 = true
    }
  });
});

// Add click event listeners to card 1
document.querySelectorAll(".card-2-2").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if(play4){
      document.getElementById("aa4").pause();
      document.getElementById("aa4").currentTime = 0;
      document.getElementById("aa4").play()
      document.getElementById("av4").pause();
      document.getElementById("av4").currentTime = 0;
      setTimeout(() => {
      document.getElementById("av4").play()
      }, 350);
      play4 = false
    }
    else {
      play4 = true
    }
  });
});