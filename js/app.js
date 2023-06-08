// create function so the answer will show up when the svg clicked
// const dropdown = document.getElementsByClassName("dropdown");
// const answer = document.getElementsByClassName("answer");
// const question = document.getElementsByClassName("question");

// for (let i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function () {
//     if (answer[i].classList.contains("hidden")) {
//       answer[i].classList.remove("hidden");
//       dropdown[i].classList.add("rotate");
//     } else {
//       answer[i].classList.add("hidden");
//       dropdown[i].classList.remove("rotate");
//     }
//     question[i].classList.toggle("bold-active-state");
//   });
// }

// same with the code above but using jquery
for (let i = 0; i < $(".dropdown").length; i++) {
  (function (index) {
    $(".dropdown")
      .eq(index)
      .on("click", function () {
        $(".answer").eq(index).fadeToggle("slow", "linear");
      });
  })(i);
}

for (let j = 0; j < $(".dropdown").length; j++) {
  $(".dropdown")
    .eq(j)
    .on("click", function () {
      if ($(".dropdown").eq(j).hasClass("absolute")) {
        $(".dropdown").eq(j).toggleClass("rotate");
      }
      $(".question").eq(j).toggleClass("bold-active-state");
    });
}
