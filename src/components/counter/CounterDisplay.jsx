import React from 'react';
import { useCount } from '../../state/CounterProvider';

const CounterDisplay = () => {
  const count = useCount();

  return <h1>Your count is: {count}</h1>;
};

export default CounterDisplay;
