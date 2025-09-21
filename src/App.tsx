import { useReducer } from 'react';
import './App.css';
import Button from './components/Button';

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

function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <div>{state.count}</div>
            <div>
                <Button action={() => dispatch({ type: 'increment' })}>Increment</Button>
                <Button action={() => dispatch({ type: 'decrement' })}>Decrement</Button>
            </div>
        </>
    );
}

export default App;
