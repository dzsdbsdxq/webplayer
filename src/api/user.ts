import request from "@/utils/request";
import { videoDetailParams, videoListParams } from "./models/userModel";

enum Api {
  getVideoList = "/api/video/lists", // 获取视频列表
  getVideoDetail = "/api/video/detail", //获取视频详情
}

//获取视频列表
export function API_POST_GET_VIDEO_LIST(data: videoListParams) {
  return request({
    url: `${Api.getVideoList}?folderId=${data.folderId}&marker=${data.marker}`,
    method: "GET",
  });
}

//获取视频详情
export function API_POST_GET_VIDEO_DETAIL(data: videoDetailParams) {
  return request({
    url: `${Api.getVideoDetail}`,
    method: "POST",
    data,
  });
}
