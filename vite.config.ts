import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasmPlugin from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			include: [/\.tsx$/, /\.sql$/],
		}),
		UnoCSS(),
		wasmPlugin(),
		topLevelAwait(),
	],
})
