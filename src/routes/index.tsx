import React, { useState } from 'react'
import { protectedRoutes } from './Protected'
import { publicRoutes } from './PublicRoutes'
import { useRoutes } from 'react-router-dom'

const AppRouter = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(true)
    console.log('first', isAuthenticate)
    const routes = isAuthenticate ? protectedRoutes : publicRoutes
    const children = useRoutes([...routes])
    return (
        <div className="">{children}</div>
    )
}

export default AppRouter