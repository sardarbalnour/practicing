const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreElement = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score!");
  } else {
    const finalScore = { username: input.value, score };
    highScores.push(finalScore);
    highScores.sort((a, b) => b.score - a.score);
    // sort numbers from largest to smallest
    highScores.splice(10);
    //JavaScript removes everything from index 10 to the end of the array.
    // The original array is modified

    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("score")
    window.location.assign("./")
  }
};

scoreElement.innerText = score;
button.addEventListener("click", saveHandler);
