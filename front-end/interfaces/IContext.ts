import { SetStateAction, Dispatch } from 'react';

export interface IContext {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}
