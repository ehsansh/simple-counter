import Button from '@/components/button/Button';
import { useCounter } from '@/hooks/useCounter';

function Counter() {
    const { count, increment, decrement } = useCounter(0);

    return (
        <div className="mt-8 flex flex-col items-center gap-4">
            <div className="text-2xl font-bold text-gray-800">Count is: {count}</div>
            <div className="flex gap-4">
                <Button aria-label="Increment count" action={increment}>
                    Increment
                </Button>
                <Button
                    aria-label="Decrement count"
                    isDisabled={count === 0}
                    color="danger"
                    action={decrement}
                >
                    Decrement
                </Button>
            </div>
            {count === 0 && (
                <div className="text-sm text-gray-800 mt-2">Count cannot go below 0</div>
            )}
        </div>
    );
}

export default Counter;
