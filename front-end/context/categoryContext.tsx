import { createContext, ReactNode, useState } from 'react';
import { IContext } from '../interfaces/IContext';

interface CategoryProviderProps {
  children: ReactNode;
}

const Context = createContext<IContext>({
  category: 'all',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCategory: () => {},
});

const Provider = ({ children }: CategoryProviderProps) => {
  const [category, setCategory] = useState('');

  return (
    <Context.Provider value={{ category, setCategory }}>
      {children}
    </Context.Provider>
  );
};

export default {
  Context,
  Provider,
};
