/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faBars} from '@fortawesome/fontawesome-free-solid';
import {Link} from 'react-router-dom';
import Signup from './SignupComponent';
import Login from './LoginComponent';
import ContactUs from './ContactUsComponent';
import TableOrder from './TableOrderComponent';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isSignupModalOpen: false,
            isLoginModalOpen: false,
            isContactModalOpen: false,
            isOrderTableModalOpen: false
        };
        this.toggleSignup = this.toggleSignup.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleContact = this.toggleContact.bind(this);
        this.toggleOrderTable = this.toggleOrderTable.bind(this);
    }
    toggleSignup = () => this.setState({isSignupModalOpen: !this.state.isSignupModalOpen})
    toggleLogin = () => this.setState({isLoginModalOpen: !this.state.isLoginModalOpen})
    toggleContact = () => this.setState({isContactModalOpen: !this.state.isContactModalOpen})
    toggleOrderTable = () => {
        if (this.props.isLoggedIn){
            this.props.fetchTables();
        }
        this.setState({isOrderTableModalOpen: !this.state.isOrderTableModalOpen})
    }
    render(){
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
                                <Link className="nav-link" to="/drinks">Drinks</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.toggleOrderTable}>Table Ordering</a>
                                <TableOrder isOpen={this.state.isOrderTableModalOpen}
                                    toggle={this.toggleOrderTable}
                                    isLoggedIn={this.props.isLoggedIn}
                                    resetForm={this.props.resetOrderTableForm}
                                    tables={this.props.tables} />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.toggleContact}>Contact Us</a>
                                <ContactUs isOpen={this.state.isContactModalOpen} 
                                            toggle={this.toggleContact}
                                            resetForm={this.props.resetContactForm}
                                            user={this.props.user}
                                            postForm={this.props.postContactForm} />
                            </li>
                            {this.props.isLoggedIn && 
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                            </li>
                            }
                            
                        </ul>
                        <ul className="navbar-nav col-md-3 col-lg-3 p-0 flex-end">
                            {!this.props.isLoggedIn &&
                            <React.Fragment>
                                <li className="nav-item">
                                    <a className="nav-link" id="login" onClick={this.toggleLogin} >Log in</a>
                                    <Login auth={this.props.auth} user={this.props.user} 
                                            isOpen={this.state.isLoginModalOpen} toggle={this.toggleLogin} />
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="sign-up" onClick={this.toggleSignup}>Sign Up</a>
                                    <Signup isOpen={this.state.isSignupModalOpen} toggle={this.toggleSignup} 
                                            resetForm={this.props.resetSignupForm} registerNewUser={this.props.registerNewUser}/>
                                </li>
                            </React.Fragment>
                            }
                            {this.props.isLoggedIn &&
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
                            }
                            {this.props.isLoggedIn &&
                            <li className="nav-item">
                                <a className="nav-link" id="logout" onClick={() => this.props.logout()}>Logout</a>
                            </li>
                            }
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
}
export default Navbar;