import React, { useEffect, useMemo, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
import GetProducts from '../../CustomHook/getProducts';
import Carusel from '../Carusel/Carusel';
import Categories from '../Categories/Categories';
import { GetProductExtra } from '../../CustomHook/getProductsExtra';


const Products = () => {

    const [category , setCategory] = useState('');
    //Here, we call getProducts function ==> which is coming from Custom hook component
    //let products = GetProducts();
    const [products , setProducts] = useState([]);
    

    const find = (data) =>{

      setCategory(data);
     
      fetch(`http://localhost:4000/multipleProduct/${category}`)
           .then(res => res.json())
           .then(data => setProducts(data))
           .catch(err => {
              if(err) throw err;
           })

    }
    //find('smartphones');

    const value = GetProducts();
    // setProducts(value);
  // const  products= useMemo(() => GetProductExtra(category), [category]);
    

    return (
        <div className='container text-center mt-5 mb-5'>

            <Carusel></Carusel>
            <Categories find={find}/>
            <h2><span style={{ borderBottom: "2px solid green", color: "red" }}>Our Products</span></h2>

            <div className='products-container row'>

                {/* {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                } */}
                {
                    (products.length === 0)?value.map(product => <Product product={product} key={product.id}></Product>): products.map(product => <Product product={product} key={product.id}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;