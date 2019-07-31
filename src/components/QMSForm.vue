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
            class="form-control quiz-form" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default"
            v-model="question">
        </div>
      </div>
      <h3>Answers, make sure you check the box in front of the correct answer</h3>
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
          class="form-control quiz-form" 
          aria-label="Text input with radio button"
          v-model="answer_three">
      </div>
      <button 
        type="submit" 
        class="btn btn-info new">
        SAVE
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'QMSForm',
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
      console.log('onSubmit test')
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
</style>
