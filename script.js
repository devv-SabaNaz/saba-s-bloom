
/* =====================================================
   SABA'S BLOOM
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. SELECT ELEMENTS
===================================================== */

const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

const flowerCards = document.querySelectorAll(".flower-card");
const bouquetCards = document.querySelectorAll(".bouquet-card");

const feelingButtons = document.querySelectorAll(".feeling-btn");

const bloomResult = document.querySelector(".bloom-result");
const bloomName = document.querySelector("#bloom-name");
const bloomMessage = document.querySelector("#bloom-message");
const bloomImage = document.querySelector("#bloom-image");


/* =====================================================
   2. NAVBAR — SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
    } else {
        navbar?.classList.remove("scrolled");
    }

});


/* =====================================================
   3. FLOWER CARD INTERACTION
===================================================== */

flowerCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.classList.add("is-active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("is-active");
    });

});


/* =====================================================
   4. BOUQUET CARD INTERACTION
===================================================== */

bouquetCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.classList.add("is-active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("is-active");
    });

});


/* =====================================================
   5. HERO — SUBTLE MOUSE MOVEMENT
===================================================== */

if (hero) {

    const heroContent =
        document.querySelector(".hero-content");

    hero.addEventListener("mousemove", (event) => {

        if (!heroContent) return;

        const x =
            (event.clientX / window.innerWidth - 0.5) * 2;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 2;

        heroContent.style.transform =
            `translate(${x * 3}px, ${y * 3}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        if (!heroContent) return;

        heroContent.style.transform = "translate(0, 0)";

    });

}


/* =====================================================
   6. BLOOM DATA — FEELING, FLOWER AND IMAGE
===================================================== */

const bloomData = {

    romantic: {
        flower: "Rose",
        message:
            "A rose speaks the language of love, passion, and deep connection.",
        image: "assets/images/red_rose.jpg"
    },

    peaceful: {
        flower: "Lavender",
        message:
            "Lavender brings a sense of calm, softness, and quiet peace.",
        image: "assets/images/Lavender_flower.jpg"
    },

    happy: {
        flower: "Sunflower",
        message:
            "Sunflowers carry warmth, joy, optimism, and a little sunshine.",
        image: "assets/images/Luxury_sunflower.jpg"
    },

    fresh: {
        flower: "Tulip",
        message:
            "Tulips represent fresh beginnings, new chapters, and hopeful moments.",
        image: "assets/images/Pink_tulip.jpg"
    },

    growing: {
        flower: "Cherry Blossom",
        message:
            "Cherry blossoms remind us that growth and change can be beautiful.",
        image: "assets/images/Cherry_blossom.jpg"
    },

    confident: {
        flower: "Hibiscus",
        message:
            "Hibiscus represents confidence, beauty, strength, and bold self-expression.",
        image: "assets/images/Red_hibiscus.jpg"
    }

};


/* =====================================================
   7. FEELING BUTTONS — UPDATE THE RESULT
===================================================== */

feelingButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const feeling = button.dataset.feeling;
        const selectedBloom = bloomData[feeling];

        if (!selectedBloom) return;


        /* Update active button */

        feelingButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        /* Update flower name and message */

        if (bloomName) {
            bloomName.textContent = selectedBloom.flower;
        }

        if (bloomMessage) {
            bloomMessage.textContent = selectedBloom.message;
        }


        
/* Change flower image */

if (bloomImage) {

    bloomImage.style.opacity = "0.3";

    bloomImage.src = selectedBloom.image;
    bloomImage.alt = selectedBloom.flower;

    bloomImage.onload = () => {
        bloomImage.style.opacity = "1";
    };

    bloomImage.onerror = () => {
        console.error("Image not found:", bloomImage.src);
        bloomImage.style.opacity = "1";
    };

}


        /* Animate the result */

        if (bloomResult) {

            bloomResult.style.transition =
                "opacity 0.35s ease, transform 0.35s ease";

            bloomResult.style.opacity = "0";
            bloomResult.style.transform = "translateY(8px)";

            requestAnimationFrame(() => {

                bloomResult.style.opacity = "1";
                bloomResult.style.transform = "translateY(0)";

            });

        }

    });

});


/* =====================================================
   8. CURRENT YEAR
===================================================== */

const yearElement =
    document.querySelector(".footer-bottom p");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Saba's Bloom`;

}


/* =====================================================
   9. PAGE READY
===================================================== */

console.log("Saba's Bloom is ready.");

/* =========================================
   10. FIND YOUR BLOOM — INTERACTIVE QUIZ
========================================= */

const quizStart = document.querySelector("#quiz-start");
const startQuizBtn = document.querySelector("#start-quiz");
const quizQuestionsBox = document.querySelector("#quiz-questions");
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizResult = document.querySelector("#quiz-result");
const restartQuizBtn = document.querySelector("#restart-quiz");

const quizFlowerImage = document.querySelector("#quiz-flower-image");
const quizFlowerName = document.querySelector("#quiz-flower-name");
const quizFlowerMessage = document.querySelector("#quiz-flower-message");

const quizQuestions = [
    {
        question: "How are you feeling today?",
        options: [
            { text: "❤️ Loved and romantic", feeling: "romantic" },
            { text: "🕊️ Calm and peaceful", feeling: "peaceful" },
            { text: "☀️ Happy and cheerful", feeling: "happy" },
            { text: "🌱 Ready for a fresh start", feeling: "fresh" }
        ]
    },
    {
        question: "What would make your day feel special?",
        options: [
            { text: "A sweet moment with someone I love", feeling: "romantic" },
            { text: "A quiet moment just for myself", feeling: "peaceful" },
            { text: "Sunshine, laughter and good memories", feeling: "happy" },
            { text: "A chance to begin something new", feeling: "fresh" }
        ]
    },
    {
        question: "What energy do you want to welcome?",
        options: [
            { text: "More love and connection", feeling: "romantic" },
            { text: "More calm and balance", feeling: "peaceful" },
            { text: "More joy and positivity", feeling: "happy" },
            { text: "More growth and confidence", feeling: "growing" }
        ]
    }
];

let currentQuestion = 0;
let feelingScores = {};

function showQuizQuestion() {
    const questionData = quizQuestions[currentQuestion];

    quizProgress.textContent =
        `QUESTION ${currentQuestion + 1} OF ${quizQuestions.length}`;

    quizQuestion.textContent = questionData.question;
    quizOptions.replaceChildren();

    questionData.options.forEach((option) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-option";
        button.textContent = option.text;

        button.addEventListener("click", () => {
            feelingScores[option.feeling] =
                (feelingScores[option.feeling] || 0) + 1;

            currentQuestion++;

            if (currentQuestion < quizQuestions.length) {
                showQuizQuestion();
            } else {
                showQuizResult();
            }
        });

        quizOptions.appendChild(button);
    });
}

function showQuizResult() {
    let bestFeeling = "romantic";
    let highestScore = 0;

    Object.entries(feelingScores).forEach(([feeling, score]) => {
        if (score > highestScore) {
            highestScore = score;
            bestFeeling = feeling;
        }
    });

    const bloom = bloomData?.[bestFeeling];

    if (!bloom) {
        console.error("No flower data found for:", bestFeeling);
        return;
    }

    quizStart.hidden = true;
    quizQuestionsBox.hidden = true;
    quizResult.hidden = false;

    quizFlowerName.textContent = `Your Bloom is ${bloom.flower} 🌸`;
    quizFlowerMessage.textContent = bloom.message;

    quizFlowerImage.style.opacity = "0.3";
    quizFlowerImage.onload = () => {
        quizFlowerImage.style.opacity = "1";
    };
    quizFlowerImage.onerror = () => {
        quizFlowerImage.style.opacity = "1";
        console.error("Quiz image not found:", bloom.image);
    };

    quizFlowerImage.src = bloom.image;
    quizFlowerImage.alt = bloom.flower;

    quizResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function startBloomQuiz() {
    currentQuestion = 0;
    feelingScores = {};

    quizStart.hidden = true;
    quizResult.hidden = true;
    quizQuestionsBox.hidden = false;

    showQuizQuestion();
}

startQuizBtn?.addEventListener("click", startBloomQuiz);

restartQuizBtn?.addEventListener("click", () => {
    quizResult.hidden = true;
    quizStart.hidden = false;

    document.querySelector("#bloom-quiz")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});