import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StateProvider } from './Components/Context/Context.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StateProvider>
    <App />
  </StateProvider>,
)