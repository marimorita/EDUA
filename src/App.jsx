import { useState } from 'react'
import { Main } from './Components/Layouts/Main/Main'

function App() {
  const [count, setCount] = useState(0) 
  return (
    <div className='relative'>
      <div className="absolute min-h-screen w-full z-[-1] bottom-0 top-0 bg-pink-500 "></div>
      <Main />
    </div>
  )
}
export default App