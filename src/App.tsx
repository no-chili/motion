import BaseRouter from './router/index'
import { BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<BaseRouter />
		</BrowserRouter>
	)
}

export default App
