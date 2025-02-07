const tBody = document.getElementById("tbody");
const newGame = document.getElementById("again");
const newPlayer = document.getElementById("new");



const score = JSON.parse(localStorage.getItem("score"));

tBody.innerHTML = "";
score
  .sort((a, b) => a.score - b.score)
  .slice(0, 10)
  .forEach((data) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.innerText = data.name;
    const tdScore = document.createElement("td");
    tdScore.innerText = data.score;
    tr.append(tdName, tdScore);
    tBody.appendChild(tr);
  });

  newGame.onclick = () => {
    window.location.href = "../game/game.html";
  }

  newPlayer.onclick = () => {
    sessionStorage.clear()
    window.location.href = "../index.html";
  }