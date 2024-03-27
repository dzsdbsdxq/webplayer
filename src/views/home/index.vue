<template>
  <div class="rich_content homePage">
    <div class="line-t-20"></div>
    <play-ground></play-ground>
    <div class="line-t-30"></div>
    <head-line :title="`WebPlayer 是什么？`"></head-line>
    <div class="about">
      DzPlayer 是一个极简的视频播放器 JS
      库，内置硬解、软解视频功能，支持原生控件样式以及自定义控件样式，小巧的体积实现了全部的视频播放功能。
    </div>
    <head-line :title="`特性`"></head-line>
    <div class="line-t-20"></div>
  </div>
</template>
<script setup lang="ts" name="Home"></script>

<style scoped lang="scss">
  .homePage {
    position: relative;
    color: #000;
  }
</style>
