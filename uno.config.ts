// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
export default defineConfig({
	presets: [presetIcons(), presetUno()],
	transformers: [transformerDirectives()],
	theme: {
		breakpoints: {
			sm: '320px',
			md: '640px',
			lg: '1024px',
			fs: '1282px',
		},
	},
})
