import HomeRoutes from 'features/Home/Routes'
import { Outlet, RouteObject } from 'react-router-dom'

const Application = () => {
    return (
        <Outlet></Outlet>
    )
}

export const protectedRoutes: RouteObject[] = [
    {
        path: '',
        element: <Application></Application>,
        children: [
            {
                path: '',
                element: <HomeRoutes />
            }
        ]
    }
]