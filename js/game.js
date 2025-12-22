import formatData from "./helper.js";

const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.getElementById("question-text");
const answerList = document.querySelectorAll(".answer-text");

let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  start();
};

const start = () => {
  showQuestion();
  loader.style.display = "none";
  container.style.display = "block";
};

const showQuestion = () => {
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  questionText.innerText = question;
  correctAnswer = correctAnswerIndex;

  answerList.forEach((button, index) => {
    button.innerText = answers[index];
  });
};

const checkAnswer = () => {};

window.addEventListener("load", fetchData);
answerList.forEach((button, index) => {
  button.addEventListener("click", checkAnswer);
});
