import './App.css';
import Button from './components/Button';

import { useCounter } from './hooks/useCounter';

function App() {
    const { count, increment, decrement } = useCounter(0);

    return (
        <>
            <div>{count}</div>
            <div>
                <Button action={increment}>Increment</Button>
                <Button action={decrement}>Decrement</Button>
            </div>
        </>
    );
}

export default App;
