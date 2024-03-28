export interface videoModel {
  id: number;
  name: string;
  poster: string;
  url?: string;
  type?: string;
  time?: string;
  isPlay?: boolean;
  fileId?: string;
}

// 获取视频详情参数
export interface videoListParams {
  type: string;
  from: string;
}

// 获取视频详情参数
export interface videoDetailParams {
  fileId: string;
}
