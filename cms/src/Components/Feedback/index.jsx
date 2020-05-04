import React from 'react'

import './index.scss'

export default function Feedback (props) {
  return (
    <div className={`feedback feedback--${props.type}`}>
      {props.children}
    </div>
  )
}
