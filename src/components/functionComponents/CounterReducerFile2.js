import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
            dafault:
            return state
    }
}

function CounterReducerFile2() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>FirstCounter = {count.firstCounter}</h1>
            <h1>SecondCounter = {count.secondCounter}</h1>
            <div>
                <button type='button' onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                <button type='button' onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            </div>
            <div>
                <button type='button' onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
                <button type='button' onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            </div>
            <div>
                <button type='button' onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment 10</button>
                <button type='button' onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement 10</button>
            </div>
            <button type='button' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterReducerFile2 