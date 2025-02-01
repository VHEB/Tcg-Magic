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
    },
    {
        question: "Como você lida com desafios?",
        options: {
            "Uso força e resistência para superá-los" : "Murchaflor",
            "Encaro com criatividade e improvisação" : "Prismari",
            "Analiso lógica e estrategicamente" : "Quandrix",
            "Uso persuasão e influência para resolvê-los" : "Platinopena",
            "Pesquiso e aprendo antes de agir" : "Sapioforte"
        }
    },
    {
        question: "Qual dessas criaturas mágicas você escolheria como seu familiar?",
        options: {
            "Uma serpente venenosa" : "Murchaflor",
            "Um dragão de fogo" : "Prismari",
            "Uma coruja mística" : "Quandrix",
            "Um corvo encantado" : "Platinopena",
            "Um espírito ancestral" : "Sapioforte"
        }
    },
    {
        question: "Qual dessas atividades parece mais divertida?",
        options: {
            "Explorar florestas e coletar ervas raras" : "Murchaflor",
            "Criar arte e feitiços explosivos" : "Prismari",
            "Resolver enigmas e teorias complexas" : "Quandrix",
            "Participar de debates e competições" : "Platinopena",
            "Pesquisar sobre civilizações mágicas antigas" : "Sapioforte"
        }
    },
    {
        question: "Se você pudesse dominar um tipo de magia, qual seria?",
        options: {
            "Magia da Vida e Morte" : "Murchaflor",
            "Magia Elemental" : "Prismari",
            "Magia Matemática e Estrutural" : "Quandrix",
            "Encantamentos e Magia da Palavra" : "Platinopena",
            "Magia Espiritual e Arqueomancia" : "Sapioforte"
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
        button.dataset.house = house;
        button.onclick = () => selectAnswer(button, house);
        optionsContainer.appendChild(button);
    }

    prevBtn.style.display = currentQuestionIndex > 0 ? "block" : "none";
    nextBtn.style.display = "none";
}

function selectAnswer(selectedButton, house) {
    // Remove destaque das outras opções
    document.querySelectorAll(".option").forEach(btn => {
        btn.classList.remove("selected");
    });

    // Adiciona destaque à opção escolhida
    selectedButton.classList.add("selected");

    // Adiciona pontos à casa correspondente
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

const houseDetails = {
    "Murchaflor": {
        text: `<b>Murchaflor</b>, também conhecida como Witherbloom, é a faculdade da vida e da morte. 
        Estudantes góticos que utilizam a essência dos seres vivos para feitiços, 
        exploram pântanos e criam poções poderosas. 
        O lema deles é: “Suje as mãos.”`,
        video: "https://www.youtube.com/embed/sbPwT-bD7pI"
    },
    "Prismari": {
        text: `<b>Prismari</b> é a faculdade das Artes Elementais, com artistas que expressam seus sentimentos 
        e ideias através da magia. Para eles, o mundo é um palco e a arte é a forma suprema de existência. 
        O lema deles é: “Expresse seu interior com os elementos!”`,
        video: "https://www.youtube.com/embed/Xc6nl7lXYaA"
    },
    "Quandrix": {
        text: `<b>Quandrix</b> é a faculdade da Numeromancia, lar dos alunos engenhosos que exploram 
        padrões e simetrias para controlar as forças da natureza. Para eles, 
        a matemática é a verdadeira magia do universo. 
        O lema deles é: “A matemática é uma mágica.”`,
        video: "https://www.youtube.com/embed/TS10uPl11qM"
    },
    "Platinopena": {
        text: `<b>Platinopena</b>, também chamada de Silverquill, é a faculdade da eloquência e da magia das palavras. 
        Seus alunos são mestres da persuasão, retórica e poesia arcana, 
        usando a palavra para inspirar ou destruir. 
        O lema deles é: “Estilo afiado. Sagacidade ainda mais.”`,
        video: "https://www.youtube.com/embed/rm9cRMuZSwY"
    },
    "Sapioforte": {
        text: `<b>Sapioforte</b>, ou Lorehold, é a faculdade da Arqueomancia. Seus alunos são pesquisadores apaixonados 
        por história, sempre revisando os acontecimentos do passado e desbravando ruínas mágicas. 
        O lema deles é: “Não deixem pedra sobre pedra.”`,
        video: "https://www.youtube.com/embed/gYLkoewKL1o"
    }
};

function showResult() {
    let finalHouse = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b, "Sapioforte"); // "Sapioforte" é um valor padrão

    questionTitle.style.display = "none";
    optionsContainer.innerHTML = `
        <div id="result-container">
            <p class="result-title">Sua casa em Strixhaven é: <b>${finalHouse}</b></p>
            <p class="result-description">${houseDetails[finalHouse]?.text || "Casa não encontrada."}</p>
            <iframe class="result-trailer" src="${houseDetails[finalHouse]?.video || ""}" title="Vídeo sobre ${finalHouse}" allowfullscreen></iframe>
        </div>
    `;

    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
}


loadQuestion();
