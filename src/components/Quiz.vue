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
      Stress meter here
    </div>
    <QuizModal />
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
      modalToggle: false
    }
  },
  created() {
    this.getNewQuestion()
  },
  methods: {
    getNewQuestion() {
      axios
        .get(`http://localhost:5000/question/random`)
        .then(res => {
          console.log('RESPONSE QUIZ CREATED: ', res)
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
          console.log('ANSWER RESP: ', res)
          if(answer === res.data.correct_answer) {
            alert('Hooray, correct answer')
            this.getNewQuestion()
          } else {
            alert("are you stupid?")
          }
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
    background: white;
    width: 100%;
    height: 30vh;
    text-align: center;
    padding-top: 12vh;
    font-size: 3rem;
  }

  .answers {
    background: lightgreen;
    width: 100%;
    height: 65vh;
    text-align: center;
  }

  .answer {
    padding-top: 10vh;
  }

  .answer:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
</style>
