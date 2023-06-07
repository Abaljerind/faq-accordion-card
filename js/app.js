// create function so the answer will show up when the svg clicked
const dropdown = document.querySelector(".dropdown");
const answer = document.querySelector(".answer");
const question = document.querySelector(".question");

dropdown.addEventListener("click", function () {
  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    dropdown.classList.add("rotate");
  } else {
    answer.classList.add("hidden");
    dropdown.classList.remove("rotate");
  }
  question.classList.toggle("bold-active-state");
});
