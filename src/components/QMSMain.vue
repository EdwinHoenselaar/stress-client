<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h1 class="title">Stress</h1>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-info new">
          Add new question
        </button>
      </div>
    </div>
    <div class="row">
      <QMSTable />
    </div>
  </div>
</template>

<script>
import QMSTable from './QMSTable'

export default {
  name: 'QMSMain',
  components: {
    QMSTable,
  }
}
</script>

<style scoped>
  .new {
    margin: 2rem;
  }
  .title {
    font-family: 'Pacifico', cursive;
    margin: 2rem;
  }
</style>
