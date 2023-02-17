import React, { useEffect, useState } from 'react';
import './Profile.css';
import person from '../../images/person.jpg';
import { deleteProductLocal, deleteUser, findObj, findUser } from '../../CustomHook/utilities';
import GetUser from '../../CustomHook/getUser';
import GetProducts from '../../CustomHook/getProducts';
import { useNavigate } from 'react-router-dom';



const Profile = () => {


    const user1 = findUser();
    const [valid , setValid] = useState(false);

    const personInfo = GetUser(user1);

    const [selectProduct, setSelectProduct] = useState([])
    const products = GetProducts();

    const navigate = useNavigate();


    useEffect(() => {
        const storedCart = findObj();
        const cart = [];

        for (const id in storedCart) {


            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                cart.push(addedProduct);
            }
        }
        setSelectProduct(cart);
    }, [products])


   const total = selectProduct.reduce((initial , product) => product.rentPrice*product.quantity+initial , 0);

   const confirmOrder = ()=>{

            const productList = [];

            selectProduct.map(product => productList.push(product.id))
            productList.push(personInfo.id)

            
            fetch('http://localhost:4000/cart', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(productList),
              })
                .then((response) => response.json())
                .then((data) => {

                    setValid(data)
                })
                .catch((error) => {
                  console.error(error);

                  setValid(false)
                });
   }

   if(valid){

    deleteProductLocal(selectProduct[0].id)
   }

   const logout = ()=>{

    deleteUser(user1);
    navigate('/login')

    // signOut(auth).then(() => {
    //     // Sign-out successful.
    //   }).catch((error) => {
    //     // An error happened.
    //   });

   
   }



    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <img src={person} className="img-fluid" alt="" />
                </div>
                <div className='col-md-4 col-sm-4 mt-5'>
                    <h1>{personInfo.name}</h1>
                    <h4>{personInfo.city}</h4>
                    <p><small>Word no: {personInfo.word}</small></p>
                    <p>Email:{personInfo.email}</p>
                    <button onClick={()=>logout()} className='btn btn-danger'>Logout</button>
                </div>
                <div className='col-md-4 col-sm-4 cart mt-5'>
                   {
                    selectProduct.length>0? <div><h3>Total price: {total}</h3><button className='btn btn-danger' onClick={confirmOrder}>Confirm</button></div>:<p></p>
                   }
                </div>
            </div>
        </div>
    );
};

export default Profile;