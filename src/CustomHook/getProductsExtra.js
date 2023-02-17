import { useEffect, useState } from "react";

export const GetProductExtra = (data)=>{

    const [products, setProducts] = useState([]);
   
    if(data.length === 0){
       data = 'smartphones'
    }

    console.log(data)
  
    useEffect(() => {
 
        //call the get api for all products information
        fetch(`http://localhost:4000/multipleProduct/${data}`)
           .then(res => res.json())
           .then(data => setProducts(data))
           .catch(err => {
              if(err) throw err;
           })
     }, [])
   
 
    return products;
 
 }