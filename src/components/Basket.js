import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeProduct, increseAmount,decreseAmount} from '../features/shop/productSlice'
const Basket = () => {
    const incart = useSelector(state => state.product.addedItems)
    const total = useSelector(state => state.product.total)
   
    const dispatch = useDispatch();
    const allinCart = incart.map(item => {return (
        item.amount>0 ?
        <div className="basket-item">
            <img src={item.url} width='90px'/>
            <div className="basket-specs">
              <p className="basket-name">{item.name}</p>
              <p className="basket-price">{item.price.toFixed(2)}</p>
            </div>
            
            <div className="basket-math">
               <i class="fa-solid fa-plus" onClick={e => dispatch(increseAmount(item.id))}></i>
               <p className="basket-number">{item.amount}</p>
               <i class="fa-solid fa-minus" onClick={e => dispatch(decreseAmount(item.id))}></i>
            </div>
            <button onClick={e => dispatch(removeProduct(item.id))}>Sil</button>
        </div> : ''
    )})
  return (
    <div className="basket">
        {allinCart}
        <span>CƏM : {total.toFixed(2)} ₼</span>
     </div>
  )
}

export default Basket