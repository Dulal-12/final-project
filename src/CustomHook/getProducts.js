import { useEffect, useState } from "react"

const GetProducts = () => {

   //here we declare products and setProducts hook 
   const [products, setProducts] = useState([]);

   useEffect(() => {

      //call the get api for all products information
      fetch('http://localhost:4000/get')
         .then(res => res.json())
         .then(data => setProducts(data))
         .catch(err => {
            if(err) throw err;
         })
   }, [])

   return products;
}





export default GetProducts;