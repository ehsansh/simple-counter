import { useReducer } from 'react';

interface State {
    count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: Math.max(0, state.count - 1) };
        default:
            return state;
    }
}

export function useCounter(initialValue = 0) {
    const [state, dispatch] = useReducer(reducer, { count: initialValue });
    return {
        count: state.count,
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({ type: 'decrement' }),
    };
}
