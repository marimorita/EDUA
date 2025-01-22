import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StateProvider } from './Components/Context/Context.jsx'
import App from './App.jsx'
import './index.css'
import { Financial } from './Components/Pages/Interface/Financial.jsx'

createRoot(document.getElementById('root')).render(
  <StateProvider>
    <Financial />
  </StateProvider>
)