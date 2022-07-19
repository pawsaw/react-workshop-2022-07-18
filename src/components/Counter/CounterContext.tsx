import React from 'react';
import { ReactNode, useContext } from 'react';
import { noop } from '../../util/noop';

export interface CounterService {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = React.createContext<CounterService>({
  count: 0,
  increment: noop,
  decrement: noop,
});

export interface CounterProviderProps {
  counter: CounterService;
  children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({ counter, children }) => (
  <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>
);

export const useCounter = () => useContext(CounterContext);
