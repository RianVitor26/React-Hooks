import { UseState } from "./components/UseState"
import { UseEffect } from "./components/UseEffect"
import { UseRef } from "./components/UseRef"
import GlobalStyle  from './styles/GlobalStyle'

const App = () => {
  return (
    <>
      <UseState />
      <UseEffect />
      <UseRef />
      <GlobalStyle />
    </> 
  )
}

export default App