<template>
  <div class="quiz-container row">
    <div class="col-10">
      <div class="question">
        <h1>{{question}}</h1>
      </div>
      <div class="answers">
        <div v-for="answer in answers" v-bind:key="answer">
          <h3 class="answer" @click="onClick(answer)">{{answer}}</h3>
          <br>
        </div>
      </div>
    </div>
    <div class="col-2">
      <StressLevel v-bind:percentage="percentage"/>
    </div>
    <QuizModal 
      v-show="showModal" 
      @close="closeModal" 
      v-bind:boolean="answerResult" 
      v-bind:answer="guessedAnswer"
      v-bind:compliment="compliment"/>
  </div>
</template>

<script>
import axios from 'axios'
import QuizModal from './QuizModal'

export default {
  name: 'Quiz',
  components: {
    QuizModal,
  },
  data() {
    return {
      question: '',
      answers: [],
      questionId: '',
      guessedAnswer: '',
      answerResult: false,
      showModal: false,
      compliment: '',
      percentage: 100,
    }
  },
  created() {
    this.getNewQuestion()
  },
  methods: {
    getRandomCompliment() {
      axios
        .get('https://complimentr.com/api')
        .then(res => {
          this.compliment = res.data.compliment
        })
        .catch(err => console.log(err))
    },
    closeModal() {
      this.getNewQuestion()
      this.showModal = false
    },
    openModal() {
      this.showModal = true
    },
    getNewQuestion() {
      axios
        .get(`http://localhost:5000/question/random`)
        .then(res => {
          this.question = res.data.question
          this.answers = []
          this.answers.push(res.data.answer_one)
          this.answers.push(res.data.answer_two)
          this.answers.push(res.data.answer_three)
          this.questionId = res.data.id
        })
        .catch(err => console.log(err))
    },
    onClick(answer) {
      axios
        .get(`http://localhost:5000/answer/${this.questionId}`)
        .then(res => {
          this.guessedAnswer = answer
          this.getRandomCompliment()
          if(answer === res.data.correct_answer) {
            this.answerResult = true
          } else {
            this.answerResult = false
          }
          this.openModal()
        })
    }
  }
}
</script>

<style scoped>
  .quiz-container {
    font-family: 'Bree Serif', serif;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(113.84782939255456deg, rgba(6, 227, 250,1) 5.014840798704803%,rgba(229, 151, 64,1) 97.6753912574204%);
  }

  .question {
    width: 100%;
    height: 30vh;
    text-align: center;
    padding-top: 12vh;
    font-size: 3rem;
  }

  .answers {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 65vh;
    text-align: center;
    align-items: center;
  }

  .answer {
    width: 20vw;
    border: 2px solid purple;
    border-radius: 15px;
    padding: 5vh 0;
  }

  .answer:hover {
    transform: scale(1.2);
    border: 3px solid pink;
    cursor: pointer;
  }
</style>
