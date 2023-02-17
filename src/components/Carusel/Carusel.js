import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carusel.css';
import laptop from  '../../images/laptop.png'
import mobile from '../../images/mobile.png'
import home from '../../images/home (2).png';

const Carusel = () => {
    return (
        <div className='container my-5 bg-light carousel'>
            <Carousel>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        // "https://i.imgur.com/b9zkoz0.jpg"
                        src={mobile}
                        alt="Mobile-phones"
                    />
                    <Carousel.Caption>
                        <h2>Mobile-phones</h2>
                        <p style={{color:"black"}}>Rent the latest smartphones from Apple, Samsung, Oppo and more, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        // https://iili.io/HROmrbt.md.jpg
                        src= {home}
                        alt="Mobile-phones"
                    />
                    <Carousel.Caption>
                        <h2>Home appliance</h2>
                        <p style={{color:"black"}}>Rent the latest home appliance from walton, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        // "https://i.imgur.com/6pK5oZl.jpg"
                        src={laptop}
                        alt="Laptops"
                    />
                    <Carousel.Caption>
                        <h2>Laptops</h2>
                        <p style={{color:"black"}}>Rent the latest laptops from Apple, Samsung, Oppo and more, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carusel;