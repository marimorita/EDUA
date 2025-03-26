import { StrictMode } from 'react'
import { StateProvider } from './Context/Context'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './Pages/Home/Home'

createRoot(document.getElementById('root')).render(
  <StateProvider>
    <App/>
  </StateProvider>
)