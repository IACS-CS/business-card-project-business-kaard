let play1 = true;
let play2 = true;

// Add click event listeners to card 1
document.querySelectorAll(".card-1").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if(play1){
      document.getElementById("appear-1").pause();
      document.getElementById("appear-1").currentTime = 0;
      document.getElementById("appear-1").play()
      play1 = false
    }
    else {
      play1 = true
    }
  });
});

// Add click event listeners to card 2
document.querySelectorAll(".card-2").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if(play2){
      document.getElementById("appear-2").pause();
      document.getElementById("appear-2").currentTime = 0;
      document.getElementById("appear-2").play()
      play2 = false
    }
    else {
      play2 = true
    }
  });
});

