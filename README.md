# WebPlayer

## 技术栈

移动端 vant3.x + vue3.x + vite2.x + ts.4.x + REM 布局 + Viewport (VW) 布局

## Git 提交信息规范

项目使用 `husky` 规范 Git 提交信息

```
feat 增加新功能
fix 修复问题/BUG
style 代码风格相关无影响运行结果的
perf 优化/性能提升
refactor 重构
revert 撤销修改
test 测试相关
docs 文档/注释
chore 依赖更新/脚手架配置修改等
workflow 工作流改进
ci 持续集成
types 类型定义文件更改
wip 开发中
```

提供三个布局方案

**1. REM 布局**

使用 js 动态设置 html 的 font-size，css 使用 rem 单位，文本大小可选择使用 px

js 设置 viewport 的 scale 以支持高清设备的 1px

可设置页面最大最小宽度

**2. VW 布局**

css 使用 vw 单位，文本大小可选择使用 px

使用 transform 以支持高清设备的边框 1px（包括圆角），使用 @mixin `./vw/scss/_border.scss`

可设置容器固定纵横比，不可设置页面最大最小宽度

**3. REM + VW 布局**

html 的 font-size 使用 vw 单位，css 使用 rem 单位，文本大小可选择使用 px

使用 transform 以支持高清设备的边框 1px（包括圆角），使用 @mixin `./vw-rem/scss/_border.scss`

可设置容器固定纵横比，可设置页面最大最小宽度

## 使用

1. yarn dev

2. 业务代码中样式的调用方式可参考 `./rem/scss/rem.scss` 及 `./vw/scss/vw.scss` 及 `./vw-rem/scss/vw-rem.scss` 三个文件；可在 html 文件相应位置配置 `data-content-max` 属性来限制容器最大最小宽
