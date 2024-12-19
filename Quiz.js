// Quiz.js 
const questionsData = [
    {
      id: 1,
      question: "In JJK (Jujutsu Kaisen), which character is technically Sukuna's twin and descendant? (Spoilers)",
      options: ["Gojo", "Megumi", "Yuji", "Sukuna Himself"],
      correctAnswer: "Yuji",
    },
    {
      id: 2,
      question: "Which character that Gege Akutami hates the most and who his wife would leave him for?",
      options: ["Sukuna", "Toji", "Geto", "Gojo"],
      correctAnswer: "Gojo",
    },
  ];

  class Quiz {
    constructor() {
      this.questions = [];
      for (let i = 0; i < questionsData.length; i++) {
        const q = questionsData[i];
        this.questions.push(new Question(q.id, q.question, q.options, q
          .correctAnswer));
      }
    }
    getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
      }
  }
  
  module.exports = Quiz;