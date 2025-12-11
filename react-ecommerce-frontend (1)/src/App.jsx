import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

export default function App(){
  return (
    <CartProvider>
      <div style={{display:'flex', gap:30, padding:20}}>
        <div style={{flex:3}}>
          <ProductList />
        </div>
        <div style={{flex:1}}>
          <Cart />
        </div>
      </div>
    </CartProvider>
  )
}
