import React, { useEffect, useState } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You Clicked ${count} you`  
    },[count])

  return (
    <div>
        <input 
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
        />

        <button onClick={() => setCount(count + 1)}>You Click {count} times</button>
    </div>
  )
}

export default HookCounterOne