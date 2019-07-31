<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h1 class="title">Stress</h1>
      </div>
      <div class="col-4">
        <button 
          type="button" 
          class="btn btn-info new"
          @click="onClick">
          Back to question list
        </button>
      </div>
    </div>
    <form 
      class="quiz-form-container"
      v-on:submit.prevent="onSubmit">
      <div class="input-group">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Question:</span>
          </div>
          <input 
            type="text"
            placeholder="fill in question here..." 
            class="form-control quiz-form" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default"
            v-model="question">
        </div>
      </div>
      <h3 class="form-text">Answers, make sure you check the box in front of the correct answer:</h3>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input 
              type="radio" 
              aria-label="Radio button for following text input"
              :value="answer_one"
              v-model="correct_answer">
          </div>
        </div>
        <input 
          type="text" 
          placeholder="first answer..."
          class="form-control quiz-form" 
          aria-label="Text input with radio button"
          v-model="answer_one">
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input 
              type="radio" 
              aria-label="Radio button for following text input"
              :value="answer_two"
              v-model="correct_answer">
          </div>
        </div>
        <input 
          type="text" 
          placeholder="second answer..."
          class="form-control quiz-form" 
          aria-label="Text input with radio button"
          v-model="answer_two">
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input 
              type="radio" 
              aria-label="Radio button for following text input"
              :value="answer_three"
              v-model="correct_answer">
          </div>
        </div>
        <input 
          type="text" 
          placeholder="third answer..."
          class="form-control quiz-form" 
          aria-label="Text input with radio button"
          v-model="answer_three">
      </div>
      <h3 class="form-text">The correct answer is: <span style="color:blue">{{correct_answer}}</span></h3>
      <button 
        type="submit" 
        class="btn btn-info new">
        SAVE
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'QMSNewForm',
  data() {
    return {
      question: '',
      answer_one: '',
      answer_two: '',
      answer_three: '',
      correct_answer: ' ',
    }
  },
  methods: {
    onSubmit() {
      if(this.question === '' 
        || this.answer_one === '' 
        || this.answer_two === '' 
        || this.answer_three === '' 
        || this.correct_answer === '') {
          return alert("please fill in everything")
      }
      console.log('onSubmit test')
      axios
        .post('http://localhost:5000/question', {
          question: this.question, 
          answer_one: this.answer_one, 
          answer_two: this.answer_two, 
          answer_three: this.answer_three, 
          correct_answer: this.correct_answer}, {
            contentType: "application/json"
          })
        .then(res => {
          if (res.status === 200) {
            this.$toastr.success('Question succesfully added', 'POST request succes')
            this.question = '' 
            this.answer_one = ''
            this.answer_two = ''
            this.answer_three = ''
            this.correct_answer = ' '
          } else {
            this.$toastr.error('There was an error, question is not added to the database', 'POST request error')
          }
          console.log('response POST', res)
        })
        .catch(err => console.log(err))

    },
    onClick() {
      this.$router.push({ path: `/qms` })
    }  
  }
}
</script>

<style scoped>
  .quiz-form {
    margin-right: 2rem;
  }
  .quiz-form-container {
    margin: 2rem;
  }
  .form-text {
    margin: 1rem;
    font-family: 'Shadows Into Light', cursive;
  }
</style>
