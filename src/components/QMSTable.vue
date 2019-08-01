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
        <td @click="editQuestion(question.id, $event)" class="edit">EDIT</td>
        <td @click="deleteQuestion(question.id, $event)" class="delete">DELETE</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'QMSTable',
  props: ['list'],
  methods: {
    editQuestion(id) {
      this.$router.push({ path: `/qms/${id}` })
    },
    deleteQuestion(id) {
      this.$emit('deleteQuestion', id)
    }

  }
}
</script>

<style scoped>
  .table {
    margin: 1rem;
  }

  .edit {
    color: blue;
  }
  .edit:hover {
    cursor: pointer;
    transform: scale(1.1)
  }

  .delete {
    color: red;
  }
  .delete:hover {
    cursor: pointer;
    transform: scale(1.1)
  }
</style>
