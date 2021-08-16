import React from 'react';
import { useIncrement } from '../../state/CounterProvider';

const CounterIncrementer = () => {
  const increment = useIncrement();

  return <button onClick={increment}>Increment</button>;
};

export default CounterIncrementer;
