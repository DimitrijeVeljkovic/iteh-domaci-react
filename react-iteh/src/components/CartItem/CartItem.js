import React from 'react';
import './CartItem.css'

export default function CartItem(props) {
    const {cartItem} = props;

    return (
        <div className='cart-item'>
            <div>
                <p>{cartItem.name}</p>
            </div>
            <div>
                <p>{cartItem.model}</p>
            </div>
            <div>
                <p>{cartItem.ram}</p>
            </div>
            <div>
                <p>{cartItem.color}</p>
            </div>
            <div>
                <p>{cartItem.amount}</p>
            </div>
            <div>
                <p>{cartItem.price}</p>
            </div>
            <div>
                <p>{cartItem.total}</p>
            </div>
            <div>
                <button>AA</button>
            </div>
        </div>
    )
}