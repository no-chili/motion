# 让你更了解我

https://motion-ashen.vercel.app/

## 做了什么

- 响应式的布局，可以在 PC、移动端设备上浏览
- 使用 web 端代码编辑器，实现代码编写，并适配了 SQL 的执行
- 实现了路由的跳转页面过渡动画
- 手写了 tab 栏切换组件，并添加流畅的动画
- 单词默写，并使得分本地化
- 上传到了 git 并在 vercel 部署

## 使用到的技术

- react
- react-router-dom
- @monaco-editor/react
- @reduxjs/toolkit
- dom-confetti
- framer-motion
- monaco-editor
- sql.js

## 遇到的一些麻烦，最终都能独立解决

- Vite 导入.wasm 文件失败，import 时使用?url 获取路径，Json 文件使用?raw 获取内容
- Frame-motion 的 useScroll 默认监听 window，需要手动使用 ref 获取 dom
- Sql.js 默认导入路径和 pnpm 冲突，需要 vite 手动导入，或者使用 CDN 导入
- UnoCSS 配置 theme 的 breakpoints 是覆盖操作不是合并，会导致原有查询失效
- vite 发布线上访问空白页问题，需要在 vite.config.ts 配置 base: './'
