import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import GetProducts from '../../CustomHook/getProducts';
import { deleteProductLocal, findObj, findUser } from '../../CustomHook/utilities';
import OrdersInfo from '../OrdersInfo/OrdersInfo';
import './Orders.css';

const Orders = () => {

    const[selectProduct , setSelectProduct] = useState([]);

    //system all products get here
    const products = GetProducts();
  

    //here all the product find which is order
    useEffect(()=>{
        const storedCart = findObj();
        const cart = [];
       
        for(const id in storedCart){
           
         
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
               
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                cart.push(addedProduct);
            }
        }
        setSelectProduct(cart);
    },[products])

     
    //delete form state and also localStorage
    const deleteProduct = (id) =>{
       
        deleteProductLocal(id);
        const addedP = selectProduct.filter(product => product.id !== id);
        setSelectProduct(addedP);

    }



    return (
        <div className="container mt-5">

        <div className='text-center order-container'>
        {
            selectProduct.map(product => <OrdersInfo product={product} deleteProduct={deleteProduct} key={product.id}></OrdersInfo>)
        }
        </div>

        <div className='text-center'>

            {
                selectProduct.length>0?  <button className='btn btn-warning'><Link to='/profile'>Confirm order</Link></button>:<h2 className='text text-danger'>Added Product in Your Cart</h2>
            }
          
        </div>
    </div>
    );
};

export default Orders;