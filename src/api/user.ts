import {
  LoginParams,
  LoginResult,
  SessionParams,
  SessionResult,
  TTSGenerateResult,
} from './models/userModel';
import request from '@/utils/request';

enum Api {
  getUserId = '/base/appLogin', // 获取用户userid
}

// 根据code获取userid / token
export function getUserId(data: LoginParams) {
  return request<LoginResult>({
    url: Api.getUserId,
    method: 'post',
    data,
  });
}
// 获取数字人Token
export function API_POST_GET_AUTH(data: LoginParams) {
  return request({
    url: `${import.meta.env.VITE_BASE_API}/app/user/tenantUserLogin`,
    method: 'post',
    data,
  });
}
//数字人创建聊天sessionId接口
export function API_POST_GET_SESSIONID(data: SessionParams) {
  return request<SessionResult>({
    url: `${import.meta.env.VITE_BASE_API}/app/chat/fastgpt/createSession`,
    method: 'post',
    data,
  });
}

export function API_POST_TTS_GENERATE(idx: number, text: string) {
  return request<TTSGenerateResult>({
    url: `${import.meta.env.VITE_BASE_TTS_API}?idx=${idx}`,
    method: 'post',
    hideLoading: true,
    noAuthorization: true,
    withCredentials: false,
    data: {
      text,
      voice: 'zh-CN-XiaoxiaoNeural',
    },
  });
}
