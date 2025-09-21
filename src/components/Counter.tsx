import Button from './Button';

import { useCounter } from '../hooks/useCounter';

function Counter() {
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

export default Counter;
