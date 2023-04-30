import { useState } from 'react'
import './App.scss'
import logo from '../public/logo.png'
import { BrowserRouter } from 'react-router-dom'
import FirstPage from './pages/first/FirstPage'
import Routers from './Routers/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  )
}

export default App
