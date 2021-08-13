import React, { createContext, useContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCount = () => {
  const { count } = useContext(CounterContext);
  return count;
};

export const useIncrement = () => {
  const { increment } = useContext(CounterContext);
  return increment;
};
