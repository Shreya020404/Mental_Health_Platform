let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const progressBar = document.getElementById("progressBar");
let totalPoints = 0;

// Show first question
questions[currentQuestion].classList.add("active");
updateProgress();

function nextQuestion() {
  const selected = document.querySelector(
    `input[name="q${currentQuestion + 1}"]:checked`
  );
  if (!selected) {
    alert("Pick an option to continue your adventure! 🌟");
    return;
  }
  calculatePoints(selected.value);
  questions[currentQuestion].classList.remove("active");
  currentQuestion++;
  if (currentQuestion < questions.length) {
    questions[currentQuestion].classList.add("active");
    updateProgress();
  }
}

function calculatePoints(value) {
  totalPoints += parseInt(value) * 4; // Adjusted scoring for fun
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function submitQuestionnaire() {
  const selected = document.querySelector(
    `input[name="q${currentQuestion + 1}"]:checked`
  );
  if (!selected) {
    alert("Pick an option to finish your journey! 🌟");
    return;
  }
  calculatePoints(selected.value);

  let resultMessage = "";
  let emoji = "";
  if (totalPoints >= 120) {
    resultMessage = "You’re a Mental Health Superhero! 🦸‍♂️ Keep shining!";
    emoji = "🌟🎉";
  } else if (totalPoints >= 80) {
    resultMessage = "You’re a Mindful Maverick! 😎 Doing great!";
    emoji = "👍✨";
  } else if (totalPoints >= 40) {
    resultMessage = "You’re a Brave Explorer! 🌍 Could use a boost!";
    emoji = "🚀💪";
  } else {
    resultMessage = "You’re a Courageous Soul! 💖 Time for some self-love!";
    emoji = "🤗🌈";
  }

  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `<h4>Your Epic Result:</h4><p>${resultMessage} ${emoji}</p>`;
  resultContainer.style.display = "block";
  document.getElementById("questionnaireForm").style.display = "none";
}
