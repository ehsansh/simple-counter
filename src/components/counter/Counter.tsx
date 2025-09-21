import Button from '@/components/button/Button';
import { useCounter } from '@/hooks/useCounter';

function Counter() {
    const { count, increment, decrement } = useCounter(0);

    return (
        <div className="mt-8 flex flex-col items-center gap-4">
            <div className="text-2xl font-bold text-gray-800">Count is: {count}</div>
            <div className="flex gap-4">
                <Button action={increment}>Increment</Button>
                <Button color="danger" action={decrement}>
                    Decrement
                </Button>
            </div>
        </div>
    );
}

export default Counter;
