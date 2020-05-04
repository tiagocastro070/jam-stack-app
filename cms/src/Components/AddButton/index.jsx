import React, { useState } from 'react'

import './index.scss'

export default function AddButton(props) {
  const [action, setAction] = useState(false)
  
  return (
    <button className={`add-button ${props.align}`} onClick={() => {
      props.action(!action)
      setAction(!action)
    }}>
      <span className='btn btn-primary'>+</span> Create new setting
    </button>
  );
}
