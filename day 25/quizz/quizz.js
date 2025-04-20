const quizData = [
  {
    question: "What does HTML stands for ?",
    options: [
      "HyberText markup language",
      "hyper text language",
      "HyperText Markup language",
      "HyperText makeup language",
    ],
    answer: "HyperText Markup language",
  },
  {
    question: "Which language is used to styling a web pages?",
    options: ["CSS", "CRSS", "CYAS", "TRD"],
    answer: "CSS",
  },
  {
    question: "Which is not a Javascript Framework?",
    options: ["ReactJS", "Vuejs", "Python Script", "Nextjs"],
    answer: "Python Script",
  },
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const quizBox = document.getElementById("quiz");

function loadQuestion() {
  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach((option) => {
    console.log(option)
    const div = document.createElement("p");
    div.className = "option";
    div.textContent = option;
    div.onclick = () => {
      selectOption(option);
      // optionsEl.appendChild(div);
    };
    optionsEl.appendChild(div);
  });
}

function selectOption(selected) {
  const correct = quizData[currentIndex].answer;

  if (selected === correct) {
    score++;
    nextQuestion();
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    quizBox.innerHTML = `
      <div class='result'>Your Score: ${score}/ ${quizData.length}</div>
    `;
  }
}

loadQuestion();
