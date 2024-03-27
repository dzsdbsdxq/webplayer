<template>
  <div class="rich_content homePage">
    <web-start v-if="false"></web-start>
    <web-tv-panel @openHandSet="openHandSetFunc"></web-tv-panel>

    <van-popup v-model:show="show" :overlay="false" :teleport="`body`" position="right"
      :style="{ height: '100%', width: '30%', background: 'transparent' }">
      <web-hand-set></web-hand-set>
    </van-popup>
  </div>
</template>
<script setup lang="ts" name="Home">
import { ref } from 'vue';
import { useUserStore } from '@/store/modules/user'

const show = ref(false);
const openHandSetFunc = () => {
  show.value = !show.value;
  useUserStore().setShowHandSet(show.value);
}
</script>

<style scoped lang="scss">
.homePage {
  position: relative;
  color: #000;
}
</style>
