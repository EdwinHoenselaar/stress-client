<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">question</th>
        <th scope="col">answer</th>
        <th scope="col">edit</th>
        <th scope="col">delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="question in list" v-bind:key="question.id">
        <td>{{question.id}}</td>
        <td>{{question.question}}</td>
        <td>{{question.correct_answer}}</td>
        <td>EDIT</td>
        <td>DELETE</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'QMSTable',
  props: ['list']
}
</script>

<style scoped>
  .table {
    margin: 1rem;
  }
</style>
