import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  return (
    <>
      <div className="Container">
        <Cards question="WHAT" answer="HEllo" />
        <Cards question="Governance" answer="Grant" />
      </div>
    </>
  )
}

export default App
