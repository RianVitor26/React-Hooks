import { UseState } from "./components/UseState"
import { UseEffect } from "./components/UseEffect"
import { UseRef } from "./components/UseRef"
import GlobalStyle from './styles/GlobalStyle'
import { ProductPrice } from "./pages/ProductsPrice"
import { ProductsCount } from "./pages/ProductsCount"


const App = () => {

  return (
    <>
      <ProductPrice></ProductPrice>
      <ProductsCount></ProductsCount>
      <GlobalStyle />
    </>
  );
}

export default App