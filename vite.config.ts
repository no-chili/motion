import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasmPlugin from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import UnoCSS from 'unocss/vite'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), UnoCSS(), wasmPlugin(), topLevelAwait()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	base: './',
})
