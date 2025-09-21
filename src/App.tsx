import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((count) => count + 1);
    }
    function decrement() {
        setCount((count) => Math.max(0, count - 1));
    }

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
