<template>
  <div class="rich_content homePage">
    <web-start v-if="useUserStore().getCloseTv"></web-start>
    <web-tv-panel
      v-if="!useUserStore().getCloseTv"
      @openHandSet="openHandSetFunc"
      @loaded="initPlayer"
    ></web-tv-panel>

    <van-popup
      v-model:show="showControl"
      :overlay="false"
      :teleport="`body`"
      position="right"
      :style="{ height: '100%', width: '30%', background: 'transparent' }"
    >
      <web-hand-set
        @_toggle="togglePlayFunc"
        @_change="changeVideoFunc"
        @_menu="showVideoListFunc"
        @_close="closeVideoPageFunc"
        @_volume="changeVideoVolumeFunc"
      ></web-hand-set>
    </van-popup>

    <van-popup
      v-model:show="showLists"
      :overlay="true"
      :teleport="`body`"
      position="left"
      :style="{
        padding: '20px',
        height: '100%',
        width: '30%',
        background: 'rgba(0,0,0,0.6)',
      }"
    >
      <video-list
        v-show="videoLists.length > 0 && showLists"
        :show="showLists"
        :lists="videoLists"
        @_change="selectChangeVideoFunc"
      ></video-list>
    </van-popup>
  </div>
</template>
<script setup lang="ts" name="Home">
import { videoModel } from "@/api/models/userModel";
import { useUserStore } from "@/store/modules/user";
import { useKeys } from "@/utils/useKeyboardEvent";
import DzPlayer from "dz-player";
import { ref } from "vue";
const player = ref();
const showControl = ref<boolean>(false);
const showLists = ref<boolean>(false);
const currentIdx = ref<number>(0);
const currentVideo = ref<videoModel>();
const videoLists = ref<videoModel[]>([
  {
    id: 1,
    name: "深圳卫视",
    poster:
      "https://www.sztv.com.cn/ysz/upload/Image/dsdb/szws/wanjianbaodao/2024/03/28/d5e0dfbb7427484e96653bf7958fe17a.jpg",
    url: "https://livepull-tcyzb.sztv.com.cn/live/xmt12.m3u8",
    type: "auto",
    fileId: "",
  },
  {
    id: 1,
    name: "晚间报道 如何让“知产”变“资产” 更好服务实体经济？ 2024-03-27",
    poster:
      "https://www.sztv.com.cn/ysz/upload/Image/dsdb/szws/wanjianbaodao/2024/03/27/18d4f0910598421daa2e041a4915e15d.jpg",
    url: "https://videocutv.sztv.com.cn/cutv/vod/szt/szws/wjbd/2024/03/27/bf0e99192c194213bf40b7ab3aa79878/bf0e99192c194213bf40b7ab3aa79878_h264_1000k_mp4.mp4",
    type: "auto",
    fileId: "",
  },
  {
    id: 1,
    name: "晚间观察：如何让“知产”变“资产” 更好服务实体经济？ 深圳需更加精细化地发掘知识产权潜在的价值",
    poster:
      "https://www.sztv.com.cn/ysz/upload/Image/dsdb/szws/wanjianbaodao/2024/03/27/1bd8bd7538574d888061d1cdb96b86c7.jpg",
    url: "https://videocutv.sztv.com.cn/cutv/vod/2024/03/27/bf87a53cf769461eb9b40cdfaf9c408c/bf87a53cf769461eb9b40cdfaf9c408c_h264_500k_mp4.mp4",
    type: "auto",
    fileId: "",
  },
]);

const openHandSetFunc = () => {
  if (useUserStore().getCloseTv || showLists.value) {
    return;
  }
  showControl.value = !showControl.value;
  useUserStore().setShowHandSet(showControl.value);
};
const initPlayer = (val: DzPlayer) => {
  player.value = val;
  console.log(player.value);
};
const togglePlayFunc = () => {
  if (!showControl.value) {
    return;
  }
  player.value?.togglePlay();
};

const changeVideoFunc = (type: string) => {
  if (type === "rewind") {
    if (currentIdx.value > 0) {
      currentIdx.value--;
    } else {
      return;
    }
  } else {
    if (currentIdx.value < videoLists.value.length - 1) {
      currentIdx.value++;
    } else {
      return;
    }
  }
  currentVideo.value = videoLists.value[currentIdx.value];
  player.value.setVideoOptions({
    type: currentVideo.value.type,
    src: currentVideo.value.url,
  });
  player.value.play();
};
const selectChangeVideoFunc = (index: number) => {
  currentIdx.value = index;
  currentVideo.value = videoLists.value[currentIdx.value];
  player.value.setVideoOptions({
    type: currentVideo.value.type,
    src: currentVideo.value.url,
  });
  player.value.play();
  showLists.value = false;
};
const changeVideoVolumeFunc = (type: string) => {
  let volume = player.value.volume();
  console.log("volume:", volume);
  if (type === "dec") {
    player.value.volume(volume - 0.1);
  } else {
    player.value.volume(volume + 0.1);
  }
};
const showVideoListFunc = () => {
  if (!showControl.value) {
    return;
  }
  showLists.value = !showLists.value;
};

const closeVideoPageFunc = () => {
  useUserStore().setCloseTv(true);
  showControl.value = false;
  showLists.value = false;
};

useKeys({
  shift: openHandSetFunc,
  k: togglePlayFunc,
  s: showVideoListFunc,
});
</script>

<style scoped lang="scss">
.homePage {
  position: relative;
  color: #000;
}
</style>
