import React from 'react'
import './App.css'
import Header from './component/Header'
import Threads from './component/Threads'

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Threads />
    </div>
  )
}

export default App
