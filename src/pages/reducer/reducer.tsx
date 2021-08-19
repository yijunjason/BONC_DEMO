import React, { useReducer } from "react";

const initialState = {count: 0};

function reducer(state : any, action : any) {
  switch (action.type) {
    case 'increment' :
      return { count: state.count + 1 };
    case 'decrement' :
      return { count: state.count - 1 };
    default :
      return;
  }
}

export default function ReducerPage() {
  const [state, dispatch] : any = useReducer(reducer, initialState);
  return (
    <div>
      {state.count}
      <button onClick={() => {dispatch({ type: 'increment' })}}>increment</button>
      <button onClick={() => {dispatch({ type: 'decrement' })}}>increment</button>
    </div>
  )
}
