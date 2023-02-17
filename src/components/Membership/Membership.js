import React, { useContext, useState } from 'react';
import './Membership.css';
import bkash from '../../images/bkash.png';
import { findUser } from '../../CustomHook/utilities';
import GetUser from '../../CustomHook/getUser';
import { memberTaka } from '../../App';

const Membership = () => {

    const user1 = findUser();
    const personInfo = GetUser(user1);

    const [taka, setTaka] = useContext(memberTaka);



    const addValue = () => {
        if (personInfo === undefined) {
            alert("You are not loggedIn")
        }
        else {
            const memberTaka = parseFloat(taka) + parseFloat(personInfo.taka);
            const email = personInfo.email;
            const data = {email , memberTaka};

            fetch('http://localhost:4000/taka', {
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
    }

    return (
        <div class="product-card container text-center  mt-5 mb-5">
            <div className='image-div'>
                <img src={bkash} alt="" height='100' width='100' className='mx-auto' />
            </div>

            <div className="product-details information-div">
                <h2>******12-34</h2>
                <h2 className="product-description">Please Add Taka</h2>
                <input type="text" name="taka" className='form-controll' onChange={e => setTaka(e.target.value)} placeholder='Add Taka' style={{ height: "50px" }} required />
                <br />
                <button className='add-to-cart-button' onClick={addValue} >Add</button>
            </div>
        </div>
    );
};

export default Membership;