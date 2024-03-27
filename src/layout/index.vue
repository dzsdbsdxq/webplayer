<template>
  <div class="container">
    <van-sticky>
      <web-header></web-header>
    </van-sticky>
    <div class="line-t-90"></div>
    <div class="container-main">
      <router-view #="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script lang="ts" setup name="Layout"></script>

<style lang="scss">
  .container {
    position: relative;

    &-main {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
  }
</style>
