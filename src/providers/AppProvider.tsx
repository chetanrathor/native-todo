import { ThemeProvider } from '@mui/material'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'stores/app.store'
import { theme } from 'theme/app.theme'

type Properties = {
    children: React.ReactNode
}

const AppProvider = ({ children }: Properties) => {
    console.log('hello')
    return (

        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>{children}</BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}

export default AppProvider