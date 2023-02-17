import React, { useState } from 'react';
import './ForgotPassword.css';
import forgot from '../../images/forgot.jpg';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../../Authentication/firebase.confog';

const auth = getAuth(app);

const ForgotPassword = () => {

    const[message , setMessage] = useState('');

    const forgotPassword = (event)=>{

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            alert("Invalid email....");
        }
        else{
            setMessage("please wait...");
            sendPasswordResetEmail(auth, email)
            .then(() => {
                      setMessage("check your email address...");
            })
            .catch((error) => {
              
              const errorMessage = error.message;
              setMessage(errorMessage);
             
            });
        }
    }
    return (
        <div className="container">
            <section className='form text-center login-container m-5 p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={forgot} className="img-fluid" alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h1>Enter Your Email</h1>
                            <form className='login' onSubmit={forgotPassword}>
                                <input type="email" name="email" className="form-controll" placeholder='Email' required />
                                <br />
                                <input type="submit" value="Submit" className='btn btn-danger' />
                                <br/>
                                <h4>{message}</h4>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassword;