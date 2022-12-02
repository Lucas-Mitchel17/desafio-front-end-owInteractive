import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/sass/variables.sass"
          @import "./src/assets/sass/typography.sass"
        `,
      },
    },
  },
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@BaseUi': fileURLToPath(
        new URL('./src/components/ui/base', import.meta.url)
      ),
      '@ComposedUi': fileURLToPath(
        new URL('./src/components/ui/composed', import.meta.url)
      ),
      '@NestedUi': fileURLToPath(
        new URL('./src/components/ui/nested', import.meta.url)
      ),
      '@Layouts': fileURLToPath(
        new URL('./src/components/layout', import.meta.url)
      ),
      '@Views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@Composables': fileURLToPath(
        new URL('./src/utils/composables', import.meta.url)
      ),
      '@Helpers': fileURLToPath(
        new URL('./src/utils/helpers', import.meta.url)
      ),
      '@Types': fileURLToPath(new URL('./src/utils/types', import.meta.url)),
      '@Modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@Libraries': fileURLToPath(new URL('./src/libraries', import.meta.url)),
      '@Plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
    },
  },
});
