import { countContext } from "../../contexts/CountContext";
import { useContext } from 'react'


type countTypes = {
  count: number;
  setCount: (newState: number) => void;
}


export const ProductsCount = () => {

    const { count, setCount } = useContext(countContext);

    const handleClick = () => {
        setCount(count + 1)
    }

  return (
      <>
          <h1>Quantidade de produtos:</h1>
          <p>{count}</p>
          <button onClick={() => handleClick}>Adicionar Produto</button>
    </>
  )
}
