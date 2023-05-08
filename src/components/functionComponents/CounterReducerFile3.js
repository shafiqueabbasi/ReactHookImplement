import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterReducerFile3() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <h1>Counter1 = {count}</h1>
                <button type='button' onClick={() => dispatch('increment')}>Increment</button>
                <button type='button' onClick={() => dispatch('decrement')}>Decrement</button>
                <button type='button' onClick={() => dispatch('reset')}>Reset</button>
            </div>
            <div>
                <h1>Counter2 = {count2}</h1>
                <button type='button' onClick={() => dispatch2('increment')}>Increment</button>
                <button type='button' onClick={() => dispatch2('decrement')}>Decrement</button>
                <button type='button' onClick={() => dispatch2('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterReducerFile3