const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
const list = document.querySelector("ol");

list.innerHTML = highScores.map((scrore, index) => {
  return `
    <li>
        <span>${index + 1}</span>
        <p>${scrore.username}</p>
        <span>${scrore.score}</span>
    </li>
    `;
}).join("");
