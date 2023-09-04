import { useRoutes } from 'react-router-dom'
// import { makeRoutes } from './router'
import { makeRoutes } from './router/router'

import errorImage from './assets/error.png'
const routes = makeRoutes()

document.addEventListener(
	'error',
	(e) => {
		const target = e.target as HTMLImageElement
		const tagName = target?.tagName || ''
		if (tagName.toLowerCase() === 'img') {
			target.src = errorImage
		}
	},
	true
)

function App() {
	return useRoutes(routes)
}

export default App
