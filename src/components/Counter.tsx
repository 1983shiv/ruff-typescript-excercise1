import React, { useReducer} from 'react'

const initialState = { count: 0 }

type CounterState = {
    count: number
}

type CounterAction = {
    type: string,
    payload: number
}

function reducer(state: CounterState, action: CounterAction){
    switch(action.type){
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state;    
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h2>Counter</h2>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10})}>Increment by 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 5})}>Decrement by </button>
        </>
    )
}

export default Counter