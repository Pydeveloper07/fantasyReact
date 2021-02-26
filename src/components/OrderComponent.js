import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/fontawesome-free-solid';
import baseUrl from '../redux/baseUrl';
import { faMapMarkerAlt, faMoneyBillWave, faPhoneAlt, faStarHalfAlt, faTruck } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = (props) => {
    return(
        <section className="order-header position-relative">
            <div className="title">
                <h3>Not only at the restaurant...</h3>
                <p>Get your food easily from our take away service!</p>
            </div>
            <div className="hero-footer-image">
                <img src="assets/images/ink_white.png" alt="" />
            </div>
        </section>
    );
}

const RenderItem = (props) => {
    return (
        <div className="col-12 item">
            <div className="row">
                <div className="col-md-2 position-relative">
                    <img src={baseUrl + props.item.image} alt="" />
                </div>
                <div className="col-md-8 item-content">
                    <div className="row">
                        <h5 className="col-md-8 col-lg-8 name">{props.item.name}</h5>
                        <div className="col-md-4 col-lg-4 text-right">
                            <span className="badge badge-danger price p-2">{props.item.price}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row h-100">
                        <div className="col-md-6 col-lg-6 quantity-form">
                            <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>{props.item.quantity}</span>
                        </div>
                        <button className="btn btn-danger flex-grow-1 col-md-6 col-lg-6" id="removeItem">
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const OrderList = (props) => {
    var itemList = [];
    if (!props.cart.numberOfItems){
        itemList.push(null);
    }
    else{
        itemList = props.cart.items.map((item) => {
            return (
                <RenderItem key={item.id} item={item} />
            );
        })
    }
    return (
        <div className="col-md-8 col-lg-8 col-sm-12 order-list">
            <div className="container row">
                {itemList}
            </div>
        </div>
    );
}

class OrderDetails extends Component{
    render(){
        if (!this.props.user.user){
            return (
                <div></div>
            );
        }
        const deliveryFee = this.props.cart.totalCost/10;
        const totalCost = this.props.cart.totalCost + deliveryFee;
        return(
            <div className="col-md-4 col-lg-4 col-sm-12 order-details">
                <div className="order-card">
                    <img src="assets/images/icons/shopping_cart_full.png" alt="" className="card-img-top" />
                    <div className="card-body">
                        <div className="order-price row">
                            <p className="col-md-6">
                                <FontAwesomeIcon icon={faMoneyBillWave} />Order price:
                            </p>
                            <p className="col-md-6 text-right">
                                {this.props.cart.totalCost}
                            </p>
                        </div>
                        <div className="delivery-price row">
                            <p className="col-md-6">
                                <FontAwesomeIcon icon={faTruck} />Delivery fee:
                            </p>
                            <p className="col-md-6 text-right">
                                {deliveryFee}
                            </p>
                        </div>
                        <div className="phone row">
                            <p className="col-md-6">
                                <FontAwesomeIcon icon={faPhoneAlt}/>Contact-number:
                            </p>
                            <p className="col-md-6 text-right phone-content">
                                {/* <button className="btn btn-info edit-phone-btn"><i className="fas fa-pencil-alt"></i></button> */}
                                <span>{this.props.user.user.phone_number}</span>
                            </p>
                            {/* <p className="col-md-6 text-center edit-phone-block">
                                <input className="form-control" type="text" name="phoneNumber" />
                            </p> */}
                        </div>
                        <div className="address row">
                            <p className="col-md-6 col-lg-6">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />Address:
                            </p>
                            <p className="col-md-6 col-lg-6 text-right address-content">
                                {/* <button className="btn btn-info edit-add-btn"><i className="fas fa-pencil-alt"></i></button> */}
                                <span>{this.props.user.user.address}</span>
                            </p>
                            {/* <p className="col-md-6 col-lg-6 edit-address-block text-center">
                                <input className="form-control" type="text" name="address" />
                            </p> */}
                        </div>
                        <div className="client-status row">
                            <p className="col-md-6">
                                <FontAwesomeIcon icon={faStarHalfAlt} />Client status:
                            </p>
                            <p className="col-md-6 text-right">
                                None (0% off)
                            </p>
                        </div>
                        <div className="total-price row">
                            <p className="col-md-6">
                                <FontAwesomeIcon icon={faMoneyBillWave} />Total price:
                            </p>
                            <p className="col-md-6 text-right">
                                {totalCost}
                            </p>
                        </div>
                        <button className="order-btn">
                            Order
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

class Order extends Component{
    render(){
        return(
            <React.Fragment>
                <SectionHeader />
                <div className="order-content row">
                    <OrderList cart={this.props.cart} />
                    <OrderDetails user={this.props.user} cart={this.props.cart} />
                </div>
            </React.Fragment>
        );
    }
}

export default Order;