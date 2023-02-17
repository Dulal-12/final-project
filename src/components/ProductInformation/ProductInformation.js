import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToLocal, findObj, findUser } from '../../CustomHook/utilities';
import './ProductInformation.css';



const ProductInformation = ({ product }) => {

    const { id, name, rentPrice, price, img, stock, rating } = product;

    const [add, setAdd] = useState(false);
    const [valid, setValid] = useState(false);

    //this findObj --> how many product add in cart
    const data = findObj();

    //get user id form utilities function
    const infoUser = findUser();

    /*
       call this api for user have product or not
       Yes --> valid true 
       No --> valid false

       true --> user can not add product in his/her cart
    */
    useEffect(() => {

        fetch(`http://localhost:4000/cartInfo/${infoUser}`)
            .then(res => res.json())
            .then(data => setValid(data))
            .catch(err => setValid(false))

    }, [])


    const addToProduct = (event) => {
        event.preventDefault();

        const value1 = event.target.first.checked;
        const value2 = event.target.second.checked;

        if (value1 && value2) {
            alert("Please chose only one plan...");
        }
        else if (!value1 && !value2) {
            alert("please chose plan..")
        }
        else {
            if (value1) {
                addToLocal(id);
                setAdd(true);
            }
            else {
                addToLocal(id);
                setAdd(true);
            }
        }
    }





    return (
        <div className='product-container my-5 p-5'>

            <div>
                <div className='image-div'>
                    <img src={img} alt="" height='100' width='100' className='mx-auto' />
                </div>

                <div className='m-3 information-div'>
                    <h3>{name}</h3>
                    <h5><small>Rent Price:{rentPrice}</small></h5>
                    <p><small>Price:{price}</small></p>
                    <p>Stock:{stock}</p>
                    <p>Rating: {rating} stars</p>
                </div>
            </div>

            <form onSubmit={addToProduct}>
                <h4>Choose your plan:</h4>

                <div>
                    <input type="checkbox" id="first" name="first" />
                    <label for="first">1</label>
                </div>

                <div>
                    <input type="checkbox" id="second" name="second" />
                    <label for="second">2</label>
                </div>
                {
                    ((Object.keys(data).length === 0) && (valid === false)) ? <input type="submit" value="Add to Cart" className='btn btn-danger' /> : <p>You already added product or you get product</p>
                }
                {/* Here work add hook */}
                {
                    add && <div><p className='text text-success'>Thanks for add to cart...</p><button className='btn btn success'><Link to='/orders'>Go Order</Link></button></div>
                }
            </form>

        </div>
    );
};

export default ProductInformation;