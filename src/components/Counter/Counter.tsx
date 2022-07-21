import { useDispatch, useSelector } from 'react-redux';
import { countSelector, increment, decrement } from '../../domain/counter/store';
import { Store } from '../../store';

export interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const count = useSelector<Store>(countSelector);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
};
