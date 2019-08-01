<template>
  <div>
    <div class="stress-level-container">
      <div class="stress-meter">
        <h1 class="vertical-text">Your stress level is: {{percentage}}%</h1>
      </div>
    </div>
  </div>
</template>

,<script>
export default {
  name: "StressLevel",
  props: ['percentage'],
}
</script>

<style scoped>
  .stress-meter {
    padding: 20px 20px;
  }
  .vertical-text {
    padding-top: 20vh;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
</style>
