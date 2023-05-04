// React Hooks Tutorial - 2 - useState Hook
import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter