import { createContext, useContext, useState } from 'react'

const CartCtx = createContext()

export function CartProvider({ children }){
  const [cart, setCart] = useState([])
  const addToCart = item => setCart(prev=>[...prev,item])
  const removeFromCart = index => setCart(prev => prev.filter((_,i)=>i!==index))
  const clearCart = () => setCart([])
  return <CartCtx.Provider value={{cart,addToCart,removeFromCart,clearCart}}>{children}</CartCtx.Provider>
}

export const useCart = ()=> useContext(CartCtx)
