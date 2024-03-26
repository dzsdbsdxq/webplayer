import { createApp } from 'vue';
import App from './App.vue';
import { setupPlugins } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import scroll from '@/directive/scroll';
const app = createApp(App);
// if (import.meta.env.PROD) {
//   import('vconsole').then((res) => {
//     new res.default()
//   })
// }
app.config.globalProperties.$soundIdx = 0;
app.config.globalProperties.$audioHowl = false;

// 安装插件（vant-ui等）,若使用了 vite-plugin-components 插件，则需要手动引入组件
setupPlugins(app);
// 安装vuex
setupStore(app);
// 安装router
setupRouter(app);

app.use(scroll).mount('#app');
