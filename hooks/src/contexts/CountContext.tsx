import { createContext, ReactNode, useState } from 'react'


const initialValue = {
  count: 0,
  setCount: () => {}
}

type countProps = {
  children: ReactNode;
}

type countTypes = {
  count: number;
  setCount: (newState: number) => void;
}


export const countContext = createContext<countTypes>(initialValue);



export const CountProvider = ({ children }: countProps) => {
  
  const  [count, setCount ] = useState(initialValue.count)


  
  return (
    <countContext.Provider value={{count, setCount}}>{ children }</countContext.Provider>
  )
}
