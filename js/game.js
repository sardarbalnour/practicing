const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

const loader = document.getElementById("loader");
const container = document.getElementById("container");
let formattedData = null;

const formatData = (questionData) => {
  // console.log(questionData);
  const result = questionData.map((item) => {
    const questionObject = { question: item.question };
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex, 0, item.correct_answer);
    // console.log(answers, correctAnswerIndex);
    questionObject.answers = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex;
    return questionObject;
  });
  return result;
};

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fetchData);
