import React, {useEffect, useReducer, useRef} from "react";


type State = {
    count: number
}
type Action = {
    type: 'incr'
}|{
    type: 'decr'
}|{
    type: 'reset'
}
type Reducer = React.Reducer<State, Action>;

const reducer: Reducer = (prevState, action) => {

    switch (action.type) {
        case "incr": return {
            ...prevState,
            count: prevState.count + 1
        }
        case "decr": return {
            ...prevState,
            count: prevState.count - 1
        }
        case "reset": return {
            ...prevState,
            count: 0,
        }
        default: return {
            ...prevState
        }
    }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    const prevState = useRef<number|null>(null);

    useEffect(()=>{
        prevState.current = state.count;
        console.log('useEffect')
    })

    return (
        <>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'incr'})}>+</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
            <button onClick={() => dispatch({type: 'decr'})}>-</button>
            <p>Prev value = {prevState.current}</p>
        </>
    )
}

export default Counter