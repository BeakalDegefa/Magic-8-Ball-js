// declaring variables
const button = document.querySelector("#button");
const answer = document.querySelector("#answer");
// put answers in an array
const answers = [
  "I don't know!",
  "I hope so!",
  "Stay positive!",
  "Don't worry!",
  "I can't help you",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
];
// generate random answers
// make it integer using floor
function possibleAnswers() {
  return Math.floor(Math.random() * (answers.length - 1));
}
button.addEventListener("click", function () {
  answer.innerHTML = answers[possibleAnswers()];
});

// other possible way of to do it
// but this is a long process
// generate a random number
// // store it in a variable

// if (randomAnswer == 0) {
//   answerText = "yes of course!";
// } else if (randomAnswer == 1) {
//   answerText = "Not Really!";
// } else if (randomAnswer == 2) {
//   answerText = "Ask again later!";
// } else {
//   answerText = "I really don't know buddy!";
//   answer.innerHTML = answerText;
// }
