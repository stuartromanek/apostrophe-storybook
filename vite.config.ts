import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      Modules: '/apos-build/default/apos/modules'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math';
          @import "/node_modules/apostrophe/modules/@apostrophecms/ui/ui/apos/scss/global/import-all.scss";
        `
      }
    }
  }
});
