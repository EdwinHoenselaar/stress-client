<template>
  <div>
    <div class="stress-level-container">
      <div class="stress-meter">
      </div>
    </div>
  </div>
</template>

,<script>
export default {
  name: "StressLevel",
  props: ['percentage'],
  data() {
    return {
      heigth: '',
    }
  }
}
</script>

<style scoped>
  .stress-level-container {
    width: 100%;
    height: 100vh;
    background: magenta;
  }

  .stress-meter {
    height: 90vh;
    margin: 20px 20px;
    width: 100%;
    background: red;
  }
</style>
