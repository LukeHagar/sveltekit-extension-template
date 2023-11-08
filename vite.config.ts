import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
    rollupOptions: {
      input: {
				background: fileURLToPath(new URL('./src/background.ts', import.meta.url)),
      }
    }
  }
});
