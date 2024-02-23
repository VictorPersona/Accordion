import React, { useState } from 'react'

export default function Cards({ question, answer }) {
  const [showValue, setShowValue] = useState(true)
  function toggle() {
    setShowValue((prev) => !prev)
  }

  return (
    <div className="cardContainer">
      <div className="textContainer">
        <div className="question">{question}</div>
        <div className={`answer ${showValue ? 'hide' : ''}`}>{answer}</div>
      </div>

      <button className="show" onClick={toggle}>
        {showValue ? '+' : '-'}
      </button>
    </div>
  )
}
