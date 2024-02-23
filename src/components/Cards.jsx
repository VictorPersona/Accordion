import React, { useState } from 'react'

export default function Cards(props) {
  const [showValue, setShowValue] = useState(true)
  function toggle() {
    setShowValue((prev) => !prev)
  }

  return (
    <div className="cardContainer">
      <div className="textContainer">
        <div className="question">{props.question}</div>
        <div className={`answer ${showValue ? 'hide' : ''}`}>
          {props.answer}
        </div>
      </div>

      <button className="show" onClick={toggle}>
        +
      </button>
    </div>
  )
}
