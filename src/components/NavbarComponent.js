/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faBars} from '@fortawesome/fontawesome-free-solid';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg custom-nav row wow fadeInDown">
            <div className="container">
                <Link className="navbar-brand col-md-2 col-lg-2" to='/home'>
                    <img src="assets/images/logo.png" alt="logo" />
                </Link>
                <div className="collapse navbar-collapse col-md-10 col-lg-10" id="navbarText">
                    <ul className="navbar-nav p-0 col-md-9 col-lg-9 flex-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/menu">Menu <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#drinks">Drinks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#orderTableWindow" id="tableOrderLink">Table Ordering</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#contactUsWindow">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#dashboard">Dashboard</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav col-md-3 col-lg-3 p-0 flex-end">
                        <li className="nav-item">
                            <a className="nav-link" id="login" data-toggle="modal" data-target="#loginWindow">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="sign-up" data-toggle="modal" data-target="#registrationWindow">Sign Up</a>
                        </li>
                        <li className="nav-item active">
                            <div className="dropdown">
                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                    id="cardButton">
                                    <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true"></FontAwesomeIcon>
                                    Cart
                                    <span className="badge badge-pill badge-danger" id="cartNumberOfItems">0</span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="cardButton" id="cart">
                                    <div className="dropdown-item cart-view-header sticky-top">
                                        <div className="row">
                                            <div className="col-6 text-left">
                                                <span>Total Price:</span>
                                            </div>
                                            <div className="col-6 text-right">
                                                <span className="badge badge-danger" id="totalPrice">0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-content dropdown-item">
                                        <div className="items">
                                            <div className="cart-item">
                                                <div className="cart-item">
                                                    <div className="row">
                                                        <div className="col-3 p-1">
                                                            <img style={{width: '100%'}} src="" alt="" />
                                                        </div>
                                                        <div className="col-9">
                                                            <ul className="list-unstyled position-relative">
                                                                <li className="name">
                                                                    
                                                                </li>
                                                                <li className="quantity">
                                                                    Quantity: <span
                                                                        className="badge badge-primary"></span>
                                                                </li>
                                                                <li className="badge badge-success price">
                                                                    
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="food_ordering.html" className="btn btn-success order-btn">Order</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#logout" id="logout">Logout</a>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <FontAwesomeIcon icon={faBars} style={{color:'#fff', fontSize:'28px'}}></FontAwesomeIcon>
                    </span>
                </button>
            </div>
        </nav>
    );
}
export default Navbar;