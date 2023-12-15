import React, { useState } from 'react'
import Dummy from './Dummy'

function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <Dummy />}
    </div>
  )
}

export default MouseContainer