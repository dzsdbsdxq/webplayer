import request from "@/utils/request";
import { videoListParams, videoModel } from "./models/userModel";

enum Api {
  getVideoList = "/base/appLogin", // 获取视频列表
  getVideoDetail = "", //获取视频详情
}

//获取视频列表
export function API_POST_GET_SONG_LIST(data: videoListParams) {
  return request<videoModel>({
    url: Api.getVideoList,
    method: "get",
    data,
  });
}
