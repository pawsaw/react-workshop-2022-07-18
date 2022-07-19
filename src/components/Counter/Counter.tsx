import { useState } from 'react';
import { noop } from '../../util/noop';

export interface OnValueChanged {
    (value: number): void;
}

export interface CounterProps {
    value?: number;
    onValueChaned?: OnValueChanged;
}

export const Counter: React.FC<CounterProps> = ({
    value = 100,
    onValueChaned = noop
}) => {
    
    const increment = () => {
        const newValue = value + 1;
        onValueChaned(newValue);
    };

    const decrement = () => {
        const newValue = value - 1;
        onValueChaned(newValue);
    };
    
    return <div>
        <button onClick={decrement}>-</button>
        {value}
        <button onClick={increment}>+</button>
    </div>
}