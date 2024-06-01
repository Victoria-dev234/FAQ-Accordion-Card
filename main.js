const questions = document.querySelectorAll(".questions");
const images = document.querySelectorAll(".arrow-image");
const answers = document.querySelectorAll(".answers");
const text = document.querySelectorAll("h4");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    const question = questions[i];
    const image = images[i];
    const answer = answers[i];
    const h4 = text[i];
    answer.classList.toggle("answers_toggle");
    image.classList.toggle("rotate");
    h4.classList.toggle("questions_toggle");
  });
}
