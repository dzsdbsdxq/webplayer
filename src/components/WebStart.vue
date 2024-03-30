<template>
  <div class="start-switch">
    <i @click="openVideoPageFunc" class="fas fa-power-off"> </i>
    <h2>开启电视</h2>
  </div>
</template>
<script setup lang="ts" name="WebStart">
import { videoModel } from "@/api/models/userModel";
import { API_POST_GET_VIDEO_LIST } from "@/api/user";
import { useUserStore } from "@/store/modules/user";

const getVideoListFunc = async () => {
  const { data } = await API_POST_GET_VIDEO_LIST({
    folderId: "660615fd598444a426ff4b9daa83b55b7d1c17b4",
    marker: "",
  });
  await data.items.map((item: any, idx: number) => {
    useUserStore().pushPlayLists({
      id: idx,
      name: item["name"],
      poster: item["thumbnail"],
      url: "",
      type: "auto",
      time: item["video_media_metadata"]["video_media_video_stream"][0][
        "duration"
      ] as number,
      isPlay: false,
      fileId: item["file_id"],
    } as videoModel);
  });
  useUserStore().SetCurrentVideo(useUserStore().getPlayLists[0]);
  useUserStore().setCloseTv(false);
};

const openVideoPageFunc = async () => {
  getVideoListFunc();
};
</script>
<style scoped lang="scss">
.start-switch {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: -webkit-box;
  display: flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #181818;

  i {
    font-size: 90px;
    color: #bfe8eb;
    text-shadow: 0 0 10px #26e5f7, 0 0 20px #26e5f7, 0 0 30px #26e5f7,
      0 0 40px #26e5f7, 0 0 #26e5f7;
    margin-top: 80px;
    cursor: pointer;
  }

  h2 {
    font-size: 50px;
    margin-top: 50px;
    color: #bfe8eb;
    text-shadow: 0 0 10px #26e5f7, 0 0 20px #26e5f7, 0 0 30px #26e5f7,
      0 0 40px #26e5f7, 0 0 #26e5f7;
  }
}
</style>
