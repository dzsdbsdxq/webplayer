import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { VantResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import type { ConfigEnv, UserConfig } from "vite";
import { loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const CWD = process.cwd();

export default ({ mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_BASE_URL, VITE_DROP_CONSOLE } = loadEnv(mode, CWD);

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "./src"),
        },
      ],
    },
    plugins: [
      vue(),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
      
      createHtmlPlugin({
        template: "./index.html",
        inject: {
          tags: [
            {
              injectTo: "head",
              tag: "link",
              attrs: {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
                rel: "stylesheet",
              },
            },
          ],
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
        scss: {
          additionalData: `@import "src/styles/vw-rem/_util.scss";
                       @import "src/styles/vw-rem/_border.scss";
                       @import "src/styles/func.scss";`,
        },
      },
      // TODO 构建包含@charset问题 https://github.com/vitejs/vite/issues/5833
      // postcss: {
      //   plugins: [
      //     {
      //       postcssPlugin: 'internal:charset-removal',
      //       AtRule: {
      //         charset: (atRule) => {
      //           if (atRule.name === 'charset') {
      //             atRule.remove();
      //           }
      //         },
      //       },
      //     },
      //   ],
      // },
    },
    server: {
      port: 9000,
      proxy: {
        "/api": {
          // REST API
          target: "",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    optimizeDeps: {
      include: ["vant", "@vant/touch-emulator"],
      exclude: ["vue-demi"],
    },
    build: {
      minify: "terser",
      manifest: false, // 是否产出manifest.json
      sourcemap: false, // 是否产出sourcemap.json
      outDir: "build",
      assetsDir: "assets",
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: Object.is(VITE_DROP_CONSOLE, "true"),
        },
      },
    },
  };
};
