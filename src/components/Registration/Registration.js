import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/login.jpg';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../../Authentication/firebase.confog';


const auth = getAuth(app);
const Registration = () => {

    const [message, setMessage] = useState('');

    const registerUser = (event) => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const number = form.number.value;
        const city = form.city.value;
        const address = form.city.value;
        const word = form.word.value;
        const email = form.email.value;
        const password = form.password.value;

        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            alert("Invalid email....");
        }
        else {

            let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regPass.test(password)) {
                alert("Invalid password");
            }
            else {

                if (city.toLowerCase() === "gazipur") {

                    setMessage("Loading.....");

                    //firebase user create
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {

                            const id = userCredential.user.uid;
                            form.reset();
                            setMessage("user create successfully and check your email address for verification.")
                            const newUser = { id, name, city, address, word, email, password, number };
                            verifyEmail();

                            //new user information will go newUser api for saved in database
                            fetch('http://localhost:4000/newUser', {
                                method: 'POST', // or 'PUT'
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(newUser),
                            })
                                .then((response) => response.json())
                                .then((data) => console.log("Success"))
                                .catch((error) => console.log("error"));

                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            form.reset();
                            setMessage(errorMessage);

                        });
                }
                else {
                    alert("Invalid city...Only Gazipur...")
                }
            }
        }




    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // if he/his not check --> not login
            });
    }



    return (
        <div className="container">
            <section className='form text-center login-container m-5 p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={login} className="img-fluid mx-auto " alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h1>Register Now!</h1>
                            <form className='login' onSubmit={registerUser}>
                                <input type="text" name="name" className='form-controll' placeholder='Name' required />
                                <br />
                                <input type="number" name="number" className='form-controll' placeholder='Phone-number' required />
                                <br />
                                <input type="text" name="city" className='form-controll' placeholder='City' required />
                                <br />
                                <input type="text" name="address" className='form-controll' placeholder='Address' required />
                                <br />
                                <input type="number" name="word" className="form-controll" placeholder='Word No' required />
                                <br />
                                <input type="email" name="email" className="form-controll" placeholder='Email' required />
                                <br />
                                <input type="password" name="password" className="form-controll" placeholder='Password' required />
                                <br />
                                <small style={{ color: "red" }}>Minimum eight characters, at least one letter and one number</small>
                                <br />
                                <input type="submit" value="Submit" className='btn btn-danger' />
                                <br />
                                <h5>{message}</h5>

                            </form>
                            <span> Have you account ? <Link to="/login">Login</Link></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;