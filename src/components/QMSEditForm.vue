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
    <QMSForm v-bind:values="{...values}" v-on:onSubmit="onSubmit"/>
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
      } else if (correct_answer !== answer_one
        || correct_answer !== answer_two
        || correct_answer !== answer_three
      ){
          return alert("the correct answer does not match any answers, please check the box in front of the correct answer")
      }
      console.log('onSubmit test', question, answer_one, answer_two, answer_three, correct_answer)
      axios
        .put(`http://localhost:5000/question/${this.$route.params.id}`, {
          question, 
          answer_one, 
          answer_two, 
          answer_three, 
          correct_answer}, {
            contentType: "application/json"
          })
        .then(res => {
          if (res.status === 200) {
            this.$toastr.success('Question succesfully updated', 'PUT request succes')
          } else {
            this.$toastr.error('There was an error, question is not updated in the database', 'PUT request error')
          }
        })
        .catch(err => console.log(err))

    },
    onClick() {
      this.$router.push({ path: `/qms` })
    }  
  },
  components: {
    QMSForm,
  },
  created() {
    axios
      .get(`http://localhost:5000/question/${this.$route.params.id}`)
      .then(res => {
        console.log('response test EDIT created: ', res)
        this.values.question = res.data.question
        this.values.answer_one = res.data.answer_one
        this.values.answer_two = res.data.answer_two
        this.values.answer_three = res.data.answer_three
        this.values.correct_answer = res.data.correct_answer
      })
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
