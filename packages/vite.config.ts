import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./index.ts", // 打包的时候以指定文件为入口
      name: "mmcat-ui", // 打包后dist目录下的js文件名
    },
    rollupOptions: {
      external: ["vue", "mmcat-ui"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
