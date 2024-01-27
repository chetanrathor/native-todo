import React from 'react'

const Application = () => {
    return (
        <div>Protected</div>
    )
}

export const protectedRoutes = [
    {
        path: '',
        element: <Application></Application>,
        children: [
            {
                path: '',
                element: <>Dashboard</>
            }
        ]
    }
]