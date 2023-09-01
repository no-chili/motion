import { RouteProps, RoutePropsWidthChildren } from '../router'

export function createRouterTree(routes: Array<RouteProps>) {
	const routesWithChildren: Array<RoutePropsWidthChildren> = []
	routes.forEach((i) => {
		let falg = true
		routesWithChildren.map((item) => {
			if (i.path?.includes(item.path!)) {
				i.path = i.path.replace(item.path + '/', '')
				falg = false
				if (item.children) {
					item.children.push(i)
				} else {
					item.children = [i]
				}
			}
		})
		if (falg) {
			routesWithChildren.push(i)
		}
	})

	routesWithChildren.forEach((item) => {
		if (item.children) {
			item.children = createRouterTree(item.children)
		}
	})

	return routesWithChildren
}
