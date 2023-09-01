import { Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { createRouterTree } from '../utils/routerTree'

export type RouteProps = {
	path: string
	element: JSX.Element
}

export type RoutePropsWidthChildren = {
	path: string
	element: JSX.Element
	children?: Array<RouteProps>
}
// 使用vite提供的import.meta.glob获取文件目录
const modules = import.meta.glob('../pages/**/**.tsx')
export function makeRoutes() {
	// 生成路由表
	let routes: Array<RouteProps> = Object.entries(modules).map(([key]) => {
		const path = key.replace(/\/index\.tsx$/, '').replace('../', '')
		const moduleValue = () => import(/* @vite-ignore */ key)
		const LazyComponent = lazy(moduleValue)
		return {
			path,
			element: (
				<Suspense fallback={<div>loading...</div>}>
					<LazyComponent />
				</Suspense>
			),
		}
	})

	routes = routes.filter((item) => !item.path.includes('.tsx')).sort((a, b) => a.path.length - b.path.length)

	const routesWithChildren = createRouterTree(routes)

	// 自定义路由表
	routesWithChildren.push(
		{
			path: '/',
			element: <Navigate to='/pages/home/content' />,
		},
		{
			path: '*',
			element: <Navigate to='/pages/error' />,
		}
	)

	return routesWithChildren
}
