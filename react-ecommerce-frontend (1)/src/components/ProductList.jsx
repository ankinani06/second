import products from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductList(){
  const { addToCart } = useCart()
  return (
    <div className="card">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(p=>(
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p style={{color:'#374151', fontWeight:600}}>₹{p.price}</p>
            <div style={{display:'flex', gap:8}}>
              <button className="button" onClick={()=>addToCart(p)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
