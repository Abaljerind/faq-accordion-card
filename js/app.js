// create function so the answer will show up when the svg clicked
const dropdown = document.getElementsByClassName("dropdown");
const answer = document.getElementsByClassName("answer");
const question = document.getElementsByClassName("question");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    if (answer[i].classList.contains("hidden")) {
      answer[i].classList.remove("hidden");
      dropdown[i].classList.add("rotate");
    } else {
      answer[i].classList.add("hidden");
      dropdown[i].classList.remove("rotate");
    }
    question[i].classList.toggle("bold-active-state");
  });
}

// close dropdown outside outside the arrow
// window.addEventListener("click", function (e) {
//   if (e.target != dropdown) {
//     dropdown.classList.remove("rotate");
//     answer.classList.add("hidden");
//     question.classList.remove("bold-active-state");
//   }
// });
