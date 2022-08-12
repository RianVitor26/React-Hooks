import { useState } from "react"
import { Container } from './style'

export const UseState = () => {

    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount((prevState) => prevState + 1)
    }

  return (
    <Container>
          <h1>UseState</h1>
          <p>{count}</p>  
          <button onClick={incrementCount}>Increment</button>
    </Container>
  )
}
