import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const HomeRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Home></Home>}> </Route>
        </Routes>
    )
}

export default HomeRoutes