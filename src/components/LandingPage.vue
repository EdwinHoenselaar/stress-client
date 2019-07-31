<template>
  <div class="landing-page-container">
    <div class="wrapper">
      <div class="neon-wrapper">
        <span class="txt">Stress</span>
        <span class="gradient"></span>
        <span class="dodge"></span>
      </div>
    </div>
    <div class="body-text">
      <h3>Stress is always present in our everyday life.</h3>
      <p>Not everyone deals with stress in the same way. But recent studies show that being succesful and celebrating victories help reduce stress. So to help you reduce your stress, would you like to play a little game?</p>
    </div>
    <div class="btn-wrapper">
      <button class="btn-play">PLAY</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    onClick() {
      this.$router.push({ path: `/quiz` })
    }
  }
}
</script>

<style scoped>
  .landing-page-container {
    height: 100vh;
    width: 100vw;
    background: black;
    color: white;
  }

  .wrapper {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
  }

  .txt {
    color: white;
    background: black;
    font-size: 200px;
    font-weight: bold;
    font-family: 'Bree Serif', serif;
    text-transform: uppercase;
  }

  .txt::before {
    content: 'stress';
    position: absolute;
    mix-blend-mode: difference;
    filter: blur(3px);
  }

  .neon-wrapper {
    display: inline-flex;
    filter: brightness(200%);
    overflow: hidden;
  }

  .gradient {
    background: linear-gradient(113.84782939255456deg, rgba(6, 227, 250,1) 5.014840798704803%,rgba(229, 151, 64,1) 97.6753912574204%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  }

  .dodge {
    background: radial-gradient(circle, white, black 35%) center / 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
    animation: dodge-area 3s linear infinite;
  }

  @keyframes dodge-area {
    to {
      transform: translate(50%, 50%)
    }
  }

  .body-text {
    font-family: 'Bree Serif', serif;
    align-items: center;
  }

  .body-text h3,
  .body-text p {
    width: 70vw;
    margin: auto;
  }

  .btn-wrapper {
    width: 100vw;
    margin-top: 20px;
    display: flex;
  }

  .btn-play {
    font-family: 'Bree Serif', serif;
    font-size: 3rem;
    width: 30vw;
    height: 15vh;
    margin: auto;
    border: none;
    border-radius: 10px;
    outline: inherit;
    background: linear-gradient(113.84782939255456deg, rgba(6, 227, 250,1) 5.014840798704803%,rgba(229, 151, 64,1) 97.6753912574204%);
  }

  .btn-play:hover {
    transform: scale(1.1);
  }
</style>
