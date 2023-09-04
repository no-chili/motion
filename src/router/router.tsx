import { Navigate } from 'react-router-dom'
import Content from '../pages/home/content'
import NotFound from '../pages/error'
import Home from '../pages/home'
import Article from '../pages/home/Article'
import Photos from '../pages/home/Photos'

export type RouteProps = {
	path: string
	element: JSX.Element
}

export type RoutePropsWidthChildren = {
	path: string
	element: JSX.Element
	children?: Array<RouteProps>
}

export function makeRoutes() {
	const routes: Array<RoutePropsWidthChildren> = [
		{
			path: '/',
			element: <Navigate to='/pages/home/content' />,
		},
		{
			path: '/pages/home',
			element: <Home />,
			children: [
				{
					path: 'content',
					element: <Content />,
				},
				{
					path: 'article',
					element: <Article />,
				},
				{
					path: 'photos',
					element: <Photos />,
				},
			],
		},
		{
			path: '/pages/error',
			element: <NotFound />,
		},
		{
			path: '*',
			element: <Navigate to='/pages/error' />,
		},
	]
	return routes
}
