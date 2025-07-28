const questions = [
    {
      question: "Qual exame é frequentemente exigido para estudar nos EUA?",
      options: ["ENEM", "SAT", "SISU", "TOEIC"],
      answer: 1
    },
    {
      question: "Qual destes é um documento comum em processos seletivos internacionais?",
      options: ["Boletim", "Carta de motivação", "Histórico do Ensino Fundamental", "Comprovante de vacinação"],
      answer: 1
    },
    {
      question: "Qual destes exames mede proficiência em inglês?",
      options: ["DELE", "TOEFL", "CELPE-Bras", "DALF"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("start-screen");
  const quizContainer = document.getElementById("quiz-container");
  const quizDiv = document.getElementById("quiz");
  const nextBtn = document.getElementById("nextBtn");
  const scoreDisplay = document.getElementById("score");
  
  startBtn.onclick = () => {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
  };
  
  function showQuestion() {
    const q = questions[currentQuestion];
    quizDiv.innerHTML = `<h2>${q.question}</h2>`;
    q.options.forEach((option, i) => {
      quizDiv.innerHTML += `
        <label>
          <input type="radio" name="option" value="${i}" />
          ${option}
        </label><br/>
      `;
    });
  }
  
  nextBtn.onclick = () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
      alert("Por favor, selecione uma opção!");
      return;
    }
  
    if (parseInt(selected.value) === questions[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      quizDiv.innerHTML = "<h2>Quiz concluído!</h2>";
      scoreDisplay.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
      nextBtn.style.display = "none";
    }
  };
  