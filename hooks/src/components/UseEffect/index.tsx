import { useEffect, useState } from "react"
import * as C from './style'

export const UseEffect = () => {

  const [count, setCount] = useState(0)
  const [api, setApi] = useState('api')

    const incrementCount = () => {
        setCount((prevState) => prevState + 1)
  }
  
  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
      console.log(response)
    }
    fetchResourceTypes()
  },[count])

  return (
    <C.Container>
       <h1>UseEffect</h1> 
        <p>{count}</p>  
        <button onClick={incrementCount}>Fetch(s)</button>
    </C.Container>
  ) 
}
