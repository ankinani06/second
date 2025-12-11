import { useCart } from '../context/CartContext.jsx'

export default function Cart(){
  const { cart, removeFromCart, clearCart } = useCart()
  const total = cart.reduce((s,i)=>s+i.price,0)
  return (
    <div className="card">
      <h2>Cart</h2>
      {cart.length===0 && <p style={{color:'#6b7280'}}>Your cart is empty</p>}
      {cart.map((c,i)=>(
        <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'1px solid #f3f4f6'}}>
          <div>
            <div style={{fontWeight:600}}>{c.name}</div>
            <div style={{color:'#6b7280'}}>₹{c.price}</div>
          </div>
          <div>
            <button style={{background:'#ef4444',color:'#fff',border:'none',padding:'6px 8px',borderRadius:8}} onClick={()=>removeFromCart(i)}>Remove</button>
          </div>
        </div>
      ))}
      <hr style={{margin:'12px 0'}} />
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontWeight:700}}>Total</div>
        <div style={{fontWeight:700}}>₹{total}</div>
      </div>
      <div style={{marginTop:12,display:'flex',gap:8}}>
        <button className="button" onClick={()=>alert('Proceed to checkout (no backend)')}>Checkout</button>
        <button style={{background:'#d1d5db',border:'none',padding:'8px 12px',borderRadius:8}} onClick={clearCart}>Clear</button>
      </div>
    </div>
  )
}
