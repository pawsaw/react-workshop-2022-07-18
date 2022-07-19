import { useCounter } from './CounterContext';

export interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>-</button>
      {count}
      <button onClick={decrement}>+</button>
    </div>
  );
};
