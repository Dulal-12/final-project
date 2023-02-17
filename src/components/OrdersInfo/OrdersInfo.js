import React from 'react';
import './OrdersInfo.css';

const OrdersInfo = ({product , deleteProduct}) => {

    const {name , category ,img} = product; 
    const total = product.rentPrice*product.quantity;

    return (
        <div className='card m-3 p-3 info'>
           <div>
           <img src={img} alt="" height="100" width="100"/>
            <h4>{name}</h4>
            <p><small>Category:{category}</small></p>
            <p>price:{total}</p>
            <button className='btn btn-success' onClick={()=>deleteProduct(product.id)}>Remove</button>
           </div>

        </div>
    );
};

export default OrdersInfo;