<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h1 class="title">Stress</h1>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-info new" @click="onClick"> 
          Add new question
        </button>
      </div>
    </div>
    <div class="row">
      <QMSTable v-bind:list="questionsList" v-on:deleteQuestion="deleteQuestion"/>
    </div>
  </div>
</template>

<script>
import QMSTable from './QMSTable'
import axios from 'axios'

export default {
  name: 'QMSMain',
  components: {
    QMSTable,
  },
  data() {
    return {
      questionsList: [],
    }
  },
  created() {
    axios
      .get('http://localhost:5000/question')
      .then(res => {
        this.questionsList = res.data
      })
      .catch(err => console.log(err))
  },
  methods: {
    onClick() {
      this.$router.push({ path: `/qms/form` })
    },
    deleteQuestion(id) {
      axios
        .delete(`http://localhost:5000/question/${id}`)
        .then(res => {
          if (res.status === 200) {
            this.$toastr.success('Question succesfully deleted', 'DELETE request succes')
          } else {
            this.$toastr.error('There was an error, question is not deleted in the database', 'DELETE request error')
          }

          axios
            .get('http://localhost:5000/question')
            .then(res => {
              this.questionsList = res.data
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
  .new {
    margin: 2rem;
  }
  .title {
    font-family: 'Pacifico', cursive;
    margin: 2rem;
  }
</style>
