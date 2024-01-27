import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppProvider from 'providers/AppProvider'
import AppRouter from 'routes'

function App() {
  const [count, setCount] = useState(0)
  console.log('count', count)
  return (
    <AppProvider>
      <AppRouter></AppRouter>
    </AppProvider>
  )
}

export default App
