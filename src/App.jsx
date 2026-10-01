import { useState } from 'react'
import './App.css'
import Jogo from './components/Jogo'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="app">
      
      <Jogo />
      
  </div>
  )
}

export default App
