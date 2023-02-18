import React, { useReducer} from 'react'

const initialState = { count: 0 }

type CounterState = {
    count: number
}

// type CounterAction = {
//     type: string,
//     payload: number
// }

// type CounterAction = {
//     type: 'increment' | 'decrement' | 'reset',
//     payload: number
// }

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type:'reset'
}

// discreminated Union in typescript
type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction){
    switch(action.type){
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return { count: 0 }
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
            <button onClick={() => dispatch({ type: 'reset' })}>Reset </button>
        </>
    )
}

export default Counter