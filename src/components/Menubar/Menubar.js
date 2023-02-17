import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menubar.css';
import { memberTaka } from '../../App';
import { findUser } from '../../CustomHook/utilities';
import GetUser from '../../CustomHook/getUser';

const Menubar = () => {

    const[taka , setTaka] = useContext(memberTaka);
    const user1 = findUser();
    const personInfo = GetUser(user1);

    return (
        <div className='position'>
            <div className='navbar-container container bg-success p-2'>
            <h2><span style={{ color: "white" }}>Pase</span></h2>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/categories">Categories</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/profile">Profile</Link>
                        {/* <Link to='/about'>About Us</Link> */}
                        <Link to='/membership'>Taka:{personInfo?<span>{personInfo.taka}</span>:<span>{0}</span>}</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        </div>
    );
};

export default Menubar;