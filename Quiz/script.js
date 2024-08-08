const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: {
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
    },
    answer: "c",
  },
  {
    id: 2,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: {
      a: "Harper Lee",
      b: "F. Scott Fitzgerald",
      c: "J.D. Salinger",
      d: "Ernest Hemingway",
    },
    answer: "a",
  },
  {
    id: 3,
    question: "What is the largest planet in our Solar System?",
    options: {
      a: "Earth",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
    },
    answer: "c",
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'O'?",
    options: {
      a: "Gold",
      b: "Oxygen",
      c: "Osmium",
      d: "Oxalate",
    },
    answer: "b",
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    options: {
      a: "Vincent van Gogh",
      b: "Pablo Picasso",
      c: "Leonardo da Vinci",
      d: "Claude Monet",
    },
    answer: "c",
  },
  {
    id: 6,
    question: "What is the smallest unit of matter?",
    options: {
      a: "Molecule",
      b: "Atom",
      c: "Proton",
      d: "Electron",
    },
    answer: "b",
  },
  {
    id: 7,
    question: "In which year did the Titanic sink?",
    options: {
      a: "1905",
      b: "1912",
      c: "1918",
      d: "1923",
    },
    answer: "b",
  },
  {
    id: 8,
    question: "Who developed the theory of relativity?",
    options: {
      a: "Isaac Newton",
      b: "Albert Einstein",
      c: "Galileo Galilei",
      d: "Niels Bohr",
    },
    answer: "b",
  },
  {
    id: 9,
    question: "What is the capital of Japan?",
    options: {
      a: "Seoul",
      b: "Beijing",
      c: "Tokyo",
      d: "Bangkok",
    },
    answer: "c",
  },
  {
    id: 10,
    question: "Which planet is known as the Red Planet?",
    options: {
      a: "Mercury",
      b: "Venus",
      c: "Earth",
      d: "Mars",
    },
    answer: "d",
  },
];

const root = document.getElementById("test");
let count = 0;

function start() {
  let qnNum = 1;
  data.forEach((d, index) => {
    let options = "";
    for (let key in d.options) {
      options += `<input class="question${index}" type="radio" value="${key}" name="question${index}" onchange="enableSaveButton(${index})"> 
                    <label for="${key}">${d.options[key]}</label><br>`;
    }
    const div = `<div class="container">
                    <div class="qn">${qnNum}. ${d.question}</div>
                    <form class="options">
                        ${options}
                    </form>
                    <button id="save${index}" onclick="validateAnswer(${index}, '${d.answer}')" disabled>Save</button>
                </div>`;
    root.innerHTML += div;
    qnNum++;
  });

  const submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.classList.add("submit");
  // submit.setAttribute('id','submit')
  root.appendChild(submit);
}

function enableSaveButton(questionIndex) {
  document.getElementById(`save${questionIndex}`).disabled = false;
}

function validateAnswer(questionIndex, answer) {
  const selectedOption = document.querySelector(
    `input[name="question${questionIndex}"]:checked`
  ).value;
  if (selectedOption === answer) {
    count++;
    console.log("correct");
  } else {
    console.log("wrong");
  }
  console.log(`Current score: ${count}`);

  const elems = document.getElementsByClassName(`question${questionIndex}`);
  for (let i = 0; i < elems.length; i++) {
    elems[i].disabled = true;
  }

  document.getElementById(`save${questionIndex}`).disabled = true;
}

start();

const output = document.getElementsByClassName("submit")[0];
output.addEventListener("click", displayScore);

function displayScore() {
  const scoreCard = document.getElementById("finalScore");
  scoreCard.innerText = count;
  $("#scoreModal").modal("show");
}

function restartQuiz() {
  count = 0;
  start();
  $("#scoreModal").modal("hide");
}
