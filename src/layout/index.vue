<template>
  <div class="container">
    <router-view #="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup name="Layout"></script>

<style lang="scss">
  .container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
</style>
