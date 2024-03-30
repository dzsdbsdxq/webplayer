export interface videoModel {
  id: number;
  name: string;
  poster: string;
  url?: string;
  type?: string;
  time?: number;
  isPlay?: boolean;
  fileId?: string;
}

// 获取视频详情参数
export interface videoListParams {
  marker: string;
  folderId: string;
}

// 获取视频详情参数
export interface videoDetailParams {
  fileId: string;
}
