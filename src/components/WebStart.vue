<template>
  <div class="start-switch">
    <i class="fas fa-power-off" onclick="tvswitch()"></i>
    <h2>开启电视</h2>
  </div>
</template>
<script setup lang="ts" name="WebHeader"></script>
<style scoped lang="scss">
  .start-switch {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: -webkit-box;
    display: flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #181818;

    i {
      font-size: 90px;
      color: #bfe8eb;
      text-shadow:
        0 0 10px #26e5f7,
        0 0 20px #26e5f7,
        0 0 30px #26e5f7,
        0 0 40px #26e5f7,
        0 0 #26e5f7;
      margin-top: 80px;
      cursor: pointer;
    }

    h2 {
      font-size: 50px;
      margin-top: 50px;
      color: #bfe8eb;
      text-shadow:
        0 0 10px #26e5f7,
        0 0 20px #26e5f7,
        0 0 30px #26e5f7,
        0 0 40px #26e5f7,
        0 0 #26e5f7;
    }
  }
</style>
