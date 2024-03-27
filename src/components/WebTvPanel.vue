<template>
  <div class="tv-panel-container">
    <div class="monitor">
      <div class="monitorscreen">
        <div ref="playerContainer" class="videoArea"></div>
      </div>
    </div>
    <div class="holder">
      <div class="pedestal"></div>
    </div>
  </div>
</template>
<script setup lang="ts" name="WebTvPanel"></script>
<style scoped lang="scss">
  .tv-panel-container {
    max-width: 1024px;
    margin: auto;
    position: relative;

    .monitor {
      background: #000;
      position: relative;
      border-top: 3px solid #888;
      margin: 5%;
      padding: 2% 2% 4%;
      border-radius: 10px;
      border-bottom-left-radius: 50% 2%;
      border-bottom-right-radius: 50% 2%;
      transition: margin-right 1s;

      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 3%;
        left: 0;
        right: 0;
        margin: auto;
        height: 0.5%;
        width: 28%;
        background: #ddd;
        border-radius: 50%;
        box-shadow: 0 0 3px 0 white;
      }

      .monitorscreen {
        background-color: #777;
        background-size: cover;
        background-position: top center;
        height: 0;
        padding-bottom: 56.25%;
        position: relative;
        overflow: hidden;
      }
    }

    .holder {
      position: absolute;
      bottom: -100px;
      left: 0;
      right: 0;
      margin: auto;
      width: 50px;
      height: 100px;
      background-color: #000;

      .pedestal {
        position: absolute;
        bottom: 0;
        left: -75px;
        margin: auto;
        width: 200px;
        height: 10px;
        background-color: #000;
        border-radius: 100px / 50px;
      }
    }
  }
</style>
