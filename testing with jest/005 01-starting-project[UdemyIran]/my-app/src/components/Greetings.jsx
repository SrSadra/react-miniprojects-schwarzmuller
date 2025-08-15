import React, { useState } from 'react'

const Greetings = () => {
    const [isChanged, setIsChanged] = useState(false);

  return (
    <div>
          <h2>From greeeting</h2>
          {!isChanged && <p data-testid="p1">we are in greeting now</p>}
          {isChanged && <p data-testid="p2">Hahaha we changed</p>}
          <button onClick={() => setIsChanged(prev => !prev)}>Change Text</button>
    </div>
  )
}

export default Greetings
