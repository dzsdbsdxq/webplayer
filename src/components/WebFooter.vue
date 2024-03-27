<template>
  <header class="footer">
    <van-row class="footer-container" justify="center">
      <van-col span="24">
        <div class="line-t-20"></div>
        <p class="message">Released under the MIT License.</p>
        <p class="copyright"
          >Copyright © 2024-present
          <a target="_blank" href="https://github.com/dzsdbsdxq">JackieLee</a></p
        >
        <div class="line-t-20"></div>
      </van-col>
    </van-row>
  </header>
</template>
<script setup lang="ts" name="WebFooter"></script>
<style scoped lang="scss">
  .footer {
    color: #666;
    width: 100%;
    height: 70px;
    padding: 10px 0;

    &-container {
      position: relative;
      height: 100%;
      max-width: max-width();
      margin: 0 auto;
      border-top: 1px solid #ccc;

      p {
        text-align: center;
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        color: rgb(60 60 67 / 75%);
      }
    }
  }
</style>
