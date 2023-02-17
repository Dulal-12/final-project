import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToLocal, findObj, findUser } from '../../CustomHook/utilities';
import './ProductInformation.css';



const ProductInformation = ({ product }) => {

    const { id, name, rentPrice, price, img, rating } = product;

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
        const value3 = event.target.third.checked;

        if (value1 && value2 && value3) {
            alert("Please chose only one plan...");
        }
        else if(value1 && value2){
            alert("Please chose only one plan...");
        }
        else if(value1 && value3){
            alert("Please chose only one plan...");
        }
        else if(value2 && value3){
            alert("Please chose only one plan...");
        }
        else if (!value1 && !value2 && !value3) {
            alert("please chose plan..")
        }
        else {
            if (value1) {
                addToLocal(id);
                setAdd(true);
            }
            else if(value2){
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
        <div className='mt-5 mb-2'>
            <div className="product-card">
                <div>
                    <div className='image-div'>
                        <img src={img} alt="" height='100' width='100' className='mx-auto' />
                    </div>

                    <div className='m-3 product-details information-div'>
                        <h2>{name}</h2>
                        <p class="product-description"><small>Rent Price:{rentPrice}</small></p>
                        <p class="product-price"><small>Price:{price}</small></p>
                        <p>Rating: {rating} stars</p>
                    </div>
                </div>

                <form onSubmit={addToProduct} className="mt-5">
                    <h4>Choose your plan:</h4>

                    <div>
                        <input type="checkbox" id="first" name="first" />
                        <label for="first">1</label>
                    </div>

                    <div>
                        <input type="checkbox" id="second" name="second" />
                        <label for="second">2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="third" name="third" />
                        <label for="third">3</label>
                    </div>
                    {
                        ((Object.keys(data).length === 0) && (valid === false)) ? <input type="submit" value="Add to Cart" className='add-to-cart-button' /> : <p>You already added product or you get product</p>
                    }
                    {/* Here work add hook */}
                    {
                        add && <div><p className='text text-success'>Thanks for add to cart...</p><Link to='/orders'>Go Order</Link></div>
                    }
                </form>
            </div>

        </div>
    );
};

export default ProductInformation;