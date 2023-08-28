import { Navigate, useRoutes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// 使用vite提供的import.meta.glob获取文件目录
const modules = import.meta.glob('../pages/**/**.tsx')
export default function BaseRouter() {
	// 生成路由表
	const routes = Object.entries(modules).map(([key]) => {
		const path = key.replace(/\.tsx$/, '').replace('../', '')
		const moduleValue = () => import(key)
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

	// 自定义路由表
	routes.push(
		{
			path: '/',
			element: <Navigate to='/pages/home' />,
		},
		{
			path: '*',
			element: <Navigate to='/pages/error' />,
		}
	)

	const element = useRoutes(routes)
	return element
}
