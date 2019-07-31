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
    <QMSForm v-bind:values="values" v-on:onSubmit="onSubmit"/>
  </div>
</template>

<script>
import QMSForm from './QMSForm'
import axios from 'axios'

export default {
  name: 'QMSNewForm',
  data() {
    return {
      values: {
        question: '',
        answer_one: '',
        answer_two: '',
        answer_three: '',
        correct_answer: ' ',
      }
    }
  },
  methods: {
    onSubmit({question, answer_one, answer_two, answer_three, correct_answer}) {
      if(question === '' 
        || answer_one === '' 
        || answer_two === '' 
        || answer_three === '' 
        || correct_answer === '') {
          return alert("please fill in everything")
      }
      console.log('onSubmit test', question, answer_one, answer_two, answer_three, correct_answer)
      axios
        .post('http://localhost:5000/question', {
          question, 
          answer_one, 
          answer_two, 
          answer_three, 
          correct_answer}, {
            contentType: "application/json"
          })
        .then(res => {
          if (res.status === 200) {
            this.$toastr.success('Question succesfully added', 'POST request succes')
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
  },
  components: {
    QMSForm,
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
