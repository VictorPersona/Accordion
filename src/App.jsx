import { useState } from 'react'
import Cards from './components/Cards'
import data from './assets/data.json'
import './App.css'

function App() {
  const cardData = data.map((item) => {
    return <Cards key={item.id} question={item.title} answer={item.info} />
  })

  return (
    <>
      <div className="Container">
        <h2 classname="mainHeading">Frequently Asked Questions</h2>
        {cardData}
      </div>
    </>
  )
}

export default App
