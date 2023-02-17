import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetProducts from '../../CustomHook/getProducts';
import GetUser from '../../CustomHook/getUser';
import { deleteProductLocal, deleteUser, findObj, findUser } from '../../CustomHook/utilities';
import './Prof.css';
import registration from '../../images/registration.jpg'

const Prof = () => {

    const user1 = findUser();
    const [valid, setValid] = useState(false);

    const personInfo = GetUser(user1);

    const [selectProduct, setSelectProduct] = useState([])
    const products = GetProducts();

    const [option, setOption] = useState()

    function handleChange(event) {
        setOption(event.target.value)
    }

    const navigate = useNavigate();

    const productInfo = (event) => {


        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const rentPrice = form.rentPrice.value;
        const price = form.price.value;
        const img = form.image.value;
        const category = option;
        const seller = personInfo.name;
        const sellerinfo = seller;

        const data = { name, rentPrice, price, img, category, seller, sellerinfo };
        form.reset();

        fetch('http://localhost:4000/userproduct', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });




    }


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


    const total = selectProduct.reduce((initial, product) => product.rentPrice * product.quantity + initial, 0);

    const confirmOrder = () => {

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

    if (valid) {

        deleteProductLocal(selectProduct[0].id)
    }

    const logout = () => {

        deleteUser(user1);
        navigate('/login')

        // signOut(auth).then(() => {
        //     // Sign-out successful.
        //   }).catch((error) => {
        //     // An error happened.
        //   });


    }



    return (
        <div className='container mt-5'>
            <div className="page-content page-container text-center" id="page-content" >
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 className="f-w-600">{personInfo.name}</h6>
                                            <p>Word No.{personInfo.word}</p>
                                            <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{personInfo.email}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">City</p>
                                                    <h6 className="text-muted f-w-400">{personInfo.city}</h6>
                                                    <button onClick={() => logout()} className='btn btn-success'>Logout</button>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-12'>

                                                    <h4 style={{ color: "red", marginTop: "20px" }}>Post Your Product</h4>
                                                    <form className='login' onSubmit={productInfo}>
                                                        <input type="text" name="name" className="form-controll" placeholder='Product name' required />
                                                        <br />
                                                        <input type="number" name="rentPrice" className="form-controll" placeholder='Rent Price' required />
                                                        <br />
                                                        <input type="number" name="price" className="form-controll" placeholder='price' required />
                                                        <br />
                                                        <input type="text" name="image" className="form-controll" placeholder='image-url' required />
                                                        <br />
                                                        <label for="cars">Choose a Category  :  </label>

                                                        <select id="cars" className='form-controll' onChange={handleChange}>
                                                            <option value="mobile">mobile</option>
                                                            <option value="laptop">laptop</option>
                                                            <option value="home appliance">home appliance</option>
                                                            <option value="doll">doll</option>
                                                        </select>
                                                        <br />
                                                        <br />
                                                        <input type="submit" value="Submit" className='btn btn-danger' />
                                                    </form>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    selectProduct.length > 0 ? <div><h3>Total price: {total}</h3><button className='btn btn-danger' onClick={confirmOrder}>Confirm</button></div> : <p></p>
                }
            </div>



        </div>
    );
};

export default Prof;