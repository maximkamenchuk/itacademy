const num = document.getElementById("number");
const checkBtn = document.getElementById("check");
const errorMessage = document.getElementById("error");

const random = Math.floor(Math.random() * 10) + 1;
let count = 0;
checkBtn.onclick = () => {
  if (random === +num.value) {
    errorMessage.style.display = "none";
    addScore();
    return;
  } else if (random < +num.value) {
    errorMessage.textContent = "Загаданное число меньше";
    errorMessage.style.display = "block";
  } else if (random > +num.value) {
    errorMessage.textContent = "Загаданное число больше";
    errorMessage.style.display = "block";
  }
  count++;
};

function addScore() {
  const score = localStorage.getItem("score");
  const user = {
    name: sessionStorage.getItem("username"),
    score: count,
  };
  const table = [];
  table.push(user);
  if (score) {
    table.push(...JSON.parse(score));
  } 
  localStorage.setItem("score", JSON.stringify(table));
  window.location.href = '../score/score.html';
}
