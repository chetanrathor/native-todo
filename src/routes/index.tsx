import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './Protected'
import { publicRoutes } from './PublicRoutes'

const AppRouter = () => {
    const [isAuthenticate] = useState(true)
    console.log('first', isAuthenticate)
    const routes = isAuthenticate ? protectedRoutes : publicRoutes
    const children = useRoutes([...routes])
    return (
        <div className="">{children}</div>
    )
}

export default AppRouter