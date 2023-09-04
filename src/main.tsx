import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import store from './store'
import App from './App'
import './style/global.css'
import 'uno.css'

import { HashRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
)
