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
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #181818;
  }
</style>
