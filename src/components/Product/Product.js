import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {

    //here destruct the product
    const { name, rentPrice, price, img, seller } = product;

    //react-router hook
    const navigate = useNavigate();

    //single product navigate information component for extra information
    const productInfo = (product) => {

        const path = `/productInformation/${product.id}`;
        navigate(path);

    }

    return (
        <div className=' my-5  p-5 col-md-4 col-sm-12'>

            {/* <div className='image-div'>
                <img src={img} alt="" height='100' width='100' className='mx-auto' />
            </div>

            <div className='m-3 information-div'>
                <h3>{name}</h3>
                <h5><small>Rent Price:{rentPrice}</small></h5>
                <p><small>Price:{price}</small></p>
                <p>Seller:{seller}</p>
                <button className='btn btn-danger' onClick={() => productInfo(product)}>Click for Information</button>
            </div> */}
            <div class="product-card">
                <div className='image-div'>
                    <img src={img} alt="" height='100' width='100' className='mx-auto' />
                </div>

                <div class="product-details information-div">
                    <h2>{name}</h2>
                    <p class="product-description"><small>Rent Price:{rentPrice}</small></p>
                    <p class="product-price"><small>Price:{price}</small></p>
                    <button className=' add-to-cart-button' onClick={() => productInfo(product)}>Click for Information</button>
                </div>
            </div>
        </div>
    );
};

export default Product;