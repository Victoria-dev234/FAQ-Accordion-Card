const questions = document.querySelectorAll("h4");
const images = document.querySelectorAll(".arrow-image");
const answers = document.querySelectorAll(".answers");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    const question = questions[i];
    const image = images[i];
    const answer = answers[i];

    if (answer.style.display == "none") {
      answer.style.display = "block";
      image.style.transform = "rotate(180deg)";
      question.style.color = "#1d1e35";
      question.style.fontWeight = "700";
    } else {
      answer.style.display = "none";
      image.style.transform = "";
      question.style.color = "";
      question.style.fontWeight = "";
    }
  });
}
