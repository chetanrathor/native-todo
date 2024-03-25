import AppProvider from 'providers/AppProvider'
import AppRouter from 'routes'
import './App.css'

function App() {
  return (
    <AppProvider >
      <AppRouter></AppRouter>
    </AppProvider>
  )
}

export default App
