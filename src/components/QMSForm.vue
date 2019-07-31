<template>
  <form 
    class="quiz-form-container"
    v-on:submit.prevent="$emit('onSubmit', {question, answer_one, answer_two, answer_three, correct_answer})">
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
  props: ['values'],
  created() {
    this.question = this.values.question
    this.answer_one = this.values.answer_one
    this.answer_two = this.values.answer_two
    this.answer_three = this.values.answer_three
    this.correct_answer = this.values.correct_answer
  }

}
</script>

<style>
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

