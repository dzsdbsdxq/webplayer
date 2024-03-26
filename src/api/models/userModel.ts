// 用户登录参数
export interface LoginParams {
  tenantId: string;
  token: string;
  uid: number;
}
export interface SessionParams {
  sessionName: string;
}
/**
 * @description 登录成功返回结果
 */
export interface LoginResult {
  username: string;
  avatar: string;
  token: string;
}
export interface SessionResult {
  sessionId: string;
  userId: string;
  sessionName: string;
  type: string;
}

export interface ChatMsgItem {
  content: string;
  role: string;
  id: string;
  mine: boolean;
  complete: boolean;
  timestamp: number;
}

export interface TuijianParams {
  catalogId: number;
  page: 1;
  pageSize: 20;
  tenantId: 'ysz';
}
export interface TTSGenerateResult {
  filename: string;
  url: string;
}
