import { useRoutes } from 'react-router-dom'
import { makeRoutes } from './router'
const routes = makeRoutes()
function App() {
	return useRoutes(routes)
}

export default App
