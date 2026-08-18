const content = document.getElementById("loveContent");
const song = document.getElementById("loveSong");
const musicBtn = document.getElementById("musicBtn");
let heartTimer;

function startLove(){
  content.style.display = "block";
  musicBtn.style.display = "block";

  song.play().then(() => {
    musicBtn.textContent = "♫";
  }).catch(() => {
    musicBtn.textContent = "▶";
  });

  window.scrollTo({top: window.innerHeight, behavior:"smooth"});

  if(!heartTimer) heartTimer = setInterval(createHeart, 650);
}

function toggleMusic(){
  if(song.paused){
    song.play().then(()=>musicBtn.textContent="♫").catch(()=>{});
  }else{
    song.pause();
    musicBtn.textContent="▶";
  }
}

function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  const symbols = ["❤️","💕","💗","💖","💘","✨"];
  heart.textContent = symbols[Math.floor(Math.random()*symbols.length)];
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = (14 + Math.random()*22) + "px";
  heart.style.animationDuration = (4 + Math.random()*4) + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(()=>heart.remove(),8000);
}

const startDate = new Date(2023, 6, 9, 0, 0, 0);

function updateCounter(){
  const now = new Date();
  let diff = Math.max(0, now - startDate);

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
updateCounter();
setInterval(updateCounter,1000);
