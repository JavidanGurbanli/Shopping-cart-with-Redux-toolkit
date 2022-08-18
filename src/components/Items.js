import React from 'react'
import data from '../data'
import {useSelector,useDispatch } from 'react-redux';
import {addProduct} from '../features/shop/productSlice'
const Items = () => {
    const dispatch = useDispatch()
    const itemsSelector = useSelector(state => state.product.items)
    const items = itemsSelector.map(item =>{
        return(
            <div className='item'>
                <img src={item.url}/>
                <p className='item-name'>{item.name}</p>
                <p className='item-price'>{item.price.toFixed(2)} ₼</p>
                <div className='item-add'>
                    <button value={item.id} onClick={e => dispatch(addProduct(item.id))}>Səbətə at</button>
                    <i class="fa-solid fa-heart fa-xl"></i>
                </div>
            </div>
        )
    })
  return (
    <div className="item-background">{items}</div>
  )
}

export default Items