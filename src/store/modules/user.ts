import { defineStore } from 'pinia';
import { LoginParams, SessionParams } from '@/api/models/userModel';
import { API_POST_GET_AUTH, API_POST_GET_SESSIONID } from '@/api/user';

interface UserState {
  userId: number;
  token: string;
  name: string;
  avatar: string;
  SzrToken: string;
  SessionId: string;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userId: 0,
    token: '',
    SzrToken: '',
    name: 'amdin',
    avatar: '',
    SessionId: '',
  }),
  getters: {
    getUserId(): number {
      return this.userId;
    },
    getSzrToken(): string {
      return this.SzrToken;
    },
    getToken(): string {
      return this.token;
    },
    getAvatar(): string {
      return this.avatar;
    },
    getName(): string {
      return this.name;
    },
    getSessionId(): string {
      return this.SessionId;
    },
  },
  actions: {
    // 清空token及用户信息
    resetToken() {
      this.avatar = this.token = this.name = '';
    },
    setUserId(uid: number) {
      this.userId = uid ?? 0;
    },
    // 登录成功保存token
    setToken(token: string) {
      this.token = token ?? '';
      // const ex = 7 * 24 * 60 * 60 * 1000;
      // Storage.set(ACCESS_TOKEN_KEY, this.token, ex);
    },
    setSzrToken(token: string) {
      this.SzrToken = token ?? '';
    },
    setSessionId(sid: string) {
      this.SessionId = sid ?? '';
    },
    // 登录
    login() {
      return new Promise((resolve, reject) => {
        try {
          if (this.SzrToken) {
            resolve(true);
          } else {
            resolve(true);
          }
        } catch (error) {
          return reject(error);
        }
      });
    },
    // 登录成功之后, 获取用户信息以及生成权限路由
    async afterLogin() {
      try {
        const postData = {
          tenantId: 'ysz',
          token: this.getToken,
          uid: this.getUserId,
        } as LoginParams;
        const { data } = await API_POST_GET_AUTH(postData);
        this.setSzrToken(data.token);
        return data;
      } catch (error) {
        // return this.logout();
      }
    },
    async getSessionInfo() {
      try {
        const postData = {
          sessionName: `web_${this.userId}`,
        } as SessionParams;
        const { data } = await API_POST_GET_SESSIONID(postData);

        this.setSessionId(data.sessionId);
        //this.setSzrToken(data);
        return data;
      } catch (error) {}
    },
    // 登出
    async logout() {
      // await logout();
      // const wsStore = useWsStore();
      // wsStore.closeSocket();
      // this.resetToken();
      // resetRouter();
    },
  },
});
