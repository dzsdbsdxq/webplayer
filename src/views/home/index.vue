<template>
  <div class="rich_content homePage">
    <web-start v-if="useUserStoreImp.getCloseTv"></web-start>
    <web-tv-panel
      v-if="!useUserStoreImp.getCloseTv"
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
        @_fullscreen="fullScreenFunc"
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
        width: '450px',
        background: 'rgba(0,0,0,0.6)',
      }"
    >
      <video-list
        v-show="useUserStoreImp.getPlayLists.length > 0 && showLists"
        :show="showLists"
        :lists="useUserStoreImp.getPlayLists"
        @_change="selectChangeVideoFunc"
      ></video-list>
    </van-popup>

    <div class="volume" v-if="currentVolume.show">
      {{ currentVolume.value }}
    </div>
  </div>
</template>
<script setup lang="ts" name="Home">
import { API_POST_GET_VIDEO_DETAIL } from "@/api/user";
import { useUserStore } from "@/store/modules/user";
import { useKeys } from "@/utils/useKeyboardEvent";
import DzPlayer from "dz-player";
import { reactive, ref } from "vue";
const player = ref();
const showControl = ref<boolean>(false);
const showLists = ref<boolean>(false);
const currentIdx = ref<number>(0);
const currentVolume = reactive({
  show: false,
  value: "30%",
});

const useUserStoreImp = useUserStore();

const openHandSetFunc = () => {
  if (useUserStoreImp.getCloseTv || showLists.value) {
    return;
  }
  showControl.value = !showControl.value;
  useUserStoreImp.setShowHandSet(showControl.value);
};
const initPlayer = (val: DzPlayer) => {
  player.value = val;
};
const togglePlayFunc = () => {
  if (!showControl.value) {
    return;
  }
  _checkVideoUrl(function () {
    player.value?.togglePlay();
  });
};

const _checkVideoUrl = async (cb: Function) => {
  //判断是否存在url，如果不存在src，则获取url再播放
  if (!useUserStoreImp.getPlayLists[currentIdx.value].url) {
    const { data } = await API_POST_GET_VIDEO_DETAIL({
      fileId: useUserStoreImp.getPlayLists[currentIdx.value].fileId as string,
    });
    if (data.length) {
      let url = data[data.length - 1].url;
      useUserStoreImp.setVideoOptions(currentIdx.value, {
        url: url,
      });
      useUserStoreImp.SetCurrentVideo(
        useUserStoreImp.getPlayLists[currentIdx.value]
      );
      player.value.setVideoOptions({
        type: useUserStoreImp.getCurrentVideo.type,
        src: useUserStoreImp.getCurrentVideo.url,
      });
    }
  }
  cb && cb();
};

const changeVideoFunc = (type: string) => {
  if (type === "rewind") {
    if (currentIdx.value > 0) {
      currentIdx.value = currentIdx.value - 1;
    } else {
      return;
    }
  } else {
    if (currentIdx.value < useUserStoreImp.getPlayLists.length - 1) {
      currentIdx.value = currentIdx.value + 1;
    } else {
      return;
    }
  }
  _checkVideoUrl(function () {
    useUserStoreImp.SetCurrentVideo(
      useUserStoreImp.getPlayLists[currentIdx.value]
    );
    player.value.setVideoOptions({
      type: useUserStoreImp.getCurrentVideo.type,
      src: useUserStoreImp.getCurrentVideo.url,
    });
    player.value?.play();
  });
};
const selectChangeVideoFunc = (index: number) => {
  currentIdx.value = index;
  _checkVideoUrl(function () {
    useUserStoreImp.SetCurrentVideo(
      useUserStoreImp.getPlayLists[currentIdx.value]
    );
    player.value.setVideoOptions({
      type: useUserStoreImp.getCurrentVideo.type,
      src: useUserStoreImp.getCurrentVideo.url,
    });
    player.value?.play();
    showLists.value = false;
  });
};
const changeVideoVolumeFunc = (type: string) => {
  let volume = player.value.volume();
  if (type === "dec") {
    player.value.volume(volume - 0.1);
  } else {
    player.value.volume(volume + 0.1);
  }
  currentVolume.show = true;
  currentVolume.value = Math.floor(player.value.volume() * 100) + "%";
  setTimeout(function () {
    currentVolume.show = false;
  }, 2000);
};
const showVideoListFunc = () => {
  if (!showControl.value) {
    return;
  }
  showLists.value = !showLists.value;
};

const closeVideoPageFunc = () => {
  useUserStoreImp.powerOff();
  showControl.value = false;
  showLists.value = false;
};

const fullScreenFunc = () => {
  player.value.toggleFullScreen();
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
  .volume {
    position: fixed;
    font-size: 60px;
    left: 100px;
    bottom: 100px;
    color: #fff;
  }
}
</style>
