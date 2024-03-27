<template>
  <section id="playground" class="playground">
    <van-row>
      <van-col class="player-container" span="24">
        <div ref="playerContainer" class="player-container-outer"></div>
        <div class="player-container-title" style="display: none">
          夢然 - 是你♪沦陷 - 王靖雯不胖 ♪ 蔡健雅-Letting go...精選30首超好聽情歌合輯 👉
          精選歌曲單曲版本||全部都是好出名的歌曲和歌手 | 不会让你失望的
        </div>
      </van-col>
      <van-col class="player-lists" span="8">
        <video-list></video-list>
      </van-col>
    </van-row>
  </section>
</template>
<script lang="ts" setup name="PlayGround">
  import DzPlayer from 'dz-player';
  import { onMounted, ref } from 'vue';
  const playerContainer = ref();
  //const dzPlayerObj = ref(null);
  console.log(playerContainer);
  const initPlayer = () => {
    new DzPlayer({
      container: playerContainer.value,
      type: 'auto',
      src: 'https://ts7.sztv.com.cn/szmg/vod/2024/03/25/d2206a716a004e87b215048c4d5eaacd/_h264_1200k_mp4.mp4',
      controlOptions: {
        fullScreenControl: true,
      },
      customStyle: `object-fit: cover;`,
    });
  };
  onMounted(() => {
    initPlayer();
  });
</script>
<style lang="scss" scoped>
  .playground {
    position: relative;

    .player-container {
      padding-right: 10px;

      &-outer {
        width: 100%;
        height: 605px;
        border-radius: 13px;
        overflow: hidden;
      }

      &-title {
        margin-top: 12px;
        margin-bottom: 24px;
        font-size: 26px;
        line-height: 32px;
        font-weight: 700;
        overflow: hidden;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: normal;
      }
    }

    .player-lists {
      height: 405px;
      overflow: scroll;
      border-radius: 8px;
    }
  }
</style>
