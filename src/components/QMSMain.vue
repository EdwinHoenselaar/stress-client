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
      <QMSTable v-bind:list="questionsList"/>
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
