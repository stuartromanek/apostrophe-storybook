import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      Modules: '/Users/sdr/sites/starter-kit-essentials/apos-build/default/apos/modules'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:math' as *;
          @import "/node_modules/apostrophe/modules/@apostrophecms/ui/ui/apos/scss/global/import-all.scss";
        `
      }
    }
  }
});
