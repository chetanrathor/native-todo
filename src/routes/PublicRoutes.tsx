import React from 'react'

const PublicApplication = () => {
    return (
        <div>PublicRoutes</div>
    )
}

export const publicRoutes = [
    {
        path: '',
        element: <PublicApplication />,
        children: [{}]
    }
]