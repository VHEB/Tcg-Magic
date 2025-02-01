const quizData = [
    {
        question: "Qual dessas matérias você mais gostaria de estudar?",
        options: {
            "Biomagia e Alquimia" : "Murchaflor",
            "Elementos e Expressão Artística" : "Prismari",
            "Matemágica e Manipulação da Realidade" : "Quandrix",
            "Retórica e Encantamentos de Inspiração" : "Platinopena",
            "História Mágica e Relíquias Antigas" : "Sapioforte"
        }
    },
    {
        question: "Qual dessas qualidades mais combina com você?",
        options: {
            "Resiliência e Instinto" : "Murchaflor",
            "Criatividade e Emoção" : "Prismari",
            "Lógica e Estratégia" : "Quandrix",
            "Carisma e Liderança" : "Platinopena",
            "Curiosidade e Dedicação" : "Sapioforte"
        }
    },
    {
        question: "Qual desses ambientes você prefere?",
        options: {
            "Florestas e Pântanos sombrios" : "Murchaflor",
            "Montanhas e oceanos tempestuosos" : "Prismari",
            "Bibliotecas e templos matemáticos" : "Quandrix",
            "Salões nobres e palcos de oratória" : "Platinopena",
            "Ruínas mágicas e museus antigos" : "Sapioforte"
        }
    }
];

let currentQuestionIndex = 0;
let scores = {
    "Murchaflor": 0,
    "Prismari": 0,
    "Quandrix": 0,
    "Platinopena": 0,
    "Sapioforte": 0
};

const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    questionTitle.textContent = questionData.question;
    optionsContainer.innerHTML = "";

    for (const [text, house] of Object.entries(questionData.options)) {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("option");
        button.onclick = () => selectAnswer(house);
        optionsContainer.appendChild(button);
    }

    prevBtn.style.display = currentQuestionIndex > 0 ? "block" : "none";
    nextBtn.style.display = "none";
}

function selectAnswer(house) {
    scores[house]++;
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

function showResult() {
    const finalHouse = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    questionTitle.textContent = "Sua casa em Strixhaven é:";
    optionsContainer.innerHTML = `<p class="description1">${finalHouse}</p>`;
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    resultContainer.style.display = "block";
}

loadQuestion();
