import { countContext } from "../../contexts/CountContext";
import { useContext } from 'react'

export const ProductPrice = () => {

  const { count } = useContext(countContext)
  const product = 230.3


  return (
    <>
      <h1>Preço por produto: { product * count}</h1>
          <p>Quantidade de produtos: {count}</p>
          
    </>
  )
}
