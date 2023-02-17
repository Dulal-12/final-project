import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>

            <div className="container my-5">

                <footer className="text-white text-center text-lg-start bg-dark" style={{ borderRadius: "15px" }}>

                    <div className="container p-4">

                        <div className="row mt-4">

                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">


                                <h2>About Us!</h2>
                                <h3 style={{ textAlign: "left" }}>Welcome To <span id="W_Name1">pase.com</span></h3>
                                <p style={{ textAlign: "justify" }}><span id="W_Name2">pase.com</span> is a Professional <span id="W_Type1">eCommerce</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">eCommerce</span>, with a focus on dependability and <span id="W_Spec">rent and sell</span>. We're working to turn our passion for <span id="W_Type3">eCommerce</span> into a booming <a href="pase.com" rel="do-follow" style={{ color: "inherit", textDecoration: "none" }}>online website</a>. We hope you enjoy our <span id="W_Type4">eCommerce</span> as much as we enjoy offering them to you.</p>
                                <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                                <p style={{ fontWeight: "bold", textAlign: "center" }}>Thanks For Visiting Our Site<br />
                                    <span style={{ color: "tomato", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>Have a nice day!</span></p>


                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4 pb-1">Enter your email address</h5>

                                <div className="form-outline form-white mb-4">
                                    <input type="text" id="formControlLg" className="form-control form-control-lg" />
                                    <label className="form-label" for="formControlLg" style={{ marginLeft: "0px" }}>For new offer</label>
                                    <div className="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "48.8px" }}></div><div className="form-notch-trailing"></div></div></div>

                                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                                    <li className="mb-3">
                                        <span className="fa-li"><i class="fas fa-home"></i></span><span className="ms-2">Kashimpur , 1346 , Gazipur</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">dulalmiah11@gmail.com</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i class="fas fa-phone"></i></span><span className="ms-2">01305675840</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i class="fas fa-print"></i></span><span className="ms-2">0196738283</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Opening hours</h5>

                                <table className="table text-center text-white">
                                    <tbody className="font-weight-normal">
                                        <tr>
                                            <td>Mon - Thu:</td>
                                            <td>8am - 11pm</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat:</td>
                                            <td>8am - 5pm</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>9am - 12pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>


                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2023 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">pase.com</a>
                    </div>

                </footer>

            </div>
        </div>


    );
};

export default Footer;