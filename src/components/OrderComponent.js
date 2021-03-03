import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/fontawesome-free-solid';
import baseUrl from '../redux/baseUrl';
import { faCheck, faMapMarkerAlt, faMoneyBillWave, faPencilAlt, faPhoneAlt, faStarHalfAlt, faTruck } from '@fortawesome/free-solid-svg-icons';

const phone_number_vld = (val) => /^(\+998){1}[0-9]{9}$/.test(val);

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
                        <h5 className="col-md-9 col-lg-9 name">{props.item.name}</h5>
                        <div className="col-md-3 col-lg-3 text-right">
                            <span className="badge badge-danger price p-2">{props.item.price*(1-props.item.discount/100)}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row h-100">
                        <div className="col-md-6 col-lg-6 quantity-form">
                            <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>{props.item.quantity}</span>
                        </div>
                        <button className="btn btn-danger flex-grow-1 col-md-6 col-lg-6" id="removeItem" onClick={() => props.removeCartItem(props.item.id)}>
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
                <RenderItem key={item.id} item={item} removeCartItem={props.removeCartItem} />
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
    constructor(props){
        super(props);
        this.state = {
            phone_number: this.props.user.user?this.props.user.user.phone_number:'',
            phone_number_err: "",
            address: this.props.user.user?this.props.user.user.address:'',
            isPhoneInputOpen: false,
            isAddressInputOpen: false
        }
        this.handlePhoneBtnClick = this.handlePhoneBtnClick.bind(this);
        this.handleOrderBtnClick = this.handleOrderBtnClick.bind(this);
    }
    handlePhoneBtnClick = () => {
        if (phone_number_vld(this.state.phone_number)){
            this.setState({isPhoneInputOpen: false, phone_number_err: ""})
            return;
        }
        this.setState({phone_number_err: "Correct form: +998xxxxxxxxx"})
        return;
    }

    handleOrderBtnClick = () => {
        if (!this.state.address){
            return;
        }
        let itemList = [];
        let quantityList = [];
        let formData = new FormData();
        for (var i=0; i<this.props.cart.items.length; i++){
            itemList.push(this.props.cart.items[i].id);
            quantityList.push(parseInt(this.props.cart.items[i].quantity));
        }
        formData.append('item_list', itemList);
        formData.append('quantity_list', quantityList);
        formData.append('price', this.props.cart.totalCost*(1 - this.props.userStatus.status_bonus/100));
        formData.append('delivery_fee', this.props.cart.totalCost*0.1);
        this.props.postCart(formData);
    }

    render(){
        if (!this.props.user.user){
            return (
                <div></div>
            );
        }
        const deliveryFee = this.props.cart.totalCost/10;
        const totalCost = this.props.cart.totalCost*(1 - this.props.userStatus.status_bonus/100) + deliveryFee;
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
                            {!this.state.isPhoneInputOpen &&
                            <p className="col-md-6 text-right phone-content"
                                onMouseEnter={() => document.getElementsByClassName('edit-phone-btn')[0].setAttribute('style', 'right: 10px; opacity: 1')}
                                onMouseLeave={() => document.getElementsByClassName('edit-phone-btn')[0].setAttribute('style', 'right: 50%; opacity:0')}>
                                <button className="btn btn-info edit-phone-btn" onClick={() => this.setState({isPhoneInputOpen: true})}><FontAwesomeIcon icon={faPencilAlt} /></button>
                                <span>{this.state.phone_number}</span>
                            </p>
                            }
                            {this.state.isPhoneInputOpen &&
                            <p className="col-md-6 text-center edit-phone-block row">
                                <input className="form-control col-9" type="text" defaultValue={this.state.phone_number}
                                    onChange={(e) => this.setState({phone_number: e.target.value})} name="phoneNumber" />
                                <button className="btn btn-success ml-1"><FontAwesomeIcon icon={faCheck}
                                    onClick={this.handlePhoneBtnClick} /></button>
                                <small className="text-danger">{this.state.phone_number_err}</small>
                            </p>
                            }
                        </div>
                        <div className="address row">
                            <p className="col-md-6 col-lg-6">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />Address:
                            </p>
                            {!this.state.isAddressInputOpen &&
                            <p className="col-md-6 col-lg-6 text-right address-content"
                                onMouseEnter={() => document.getElementsByClassName('edit-add-btn')[0].setAttribute('style', 'right: 10px; opacity: 1')}
                                onMouseLeave={() => document.getElementsByClassName('edit-add-btn')[0].setAttribute('style', 'right: 50%; opacity:0')}>
                                <button className="btn btn-info edit-add-btn" onClick={() => this.setState({isAddressInputOpen: true})}><FontAwesomeIcon icon={faPencilAlt}/></button>
                                <span>{this.state.address}</span>
                            </p>
                            }
                            {this.state.isAddressInputOpen &&
                            <p className="col-md-6 col-lg-6 edit-address-block text-center row">
                                <input className="form-control col-9" type="text" defaultValue={this.state.address}
                                    onChange={(e) => this.setState({address: e.target.value})} name="address" />
                                <button className="btn btn-success ml-1"><FontAwesomeIcon icon={faCheck}
                                    onClick={() => this.setState({isAddressInputOpen: false})} /></button>
                            </p>
                            }
                            
                        </div>
                        <div className="client-status row">
                            <p className="col-md-6">
                                <FontAwesomeIcon icon={faStarHalfAlt} />Client status:
                            </p>
                            <p className="col-md-6 text-right">
                                {this.props.userStatus.status} ({this.props.userStatus.status_bonus}% off)
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
                        <button className="order-btn" onClick={this.handleOrderBtnClick}>
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
                    <OrderList cart={this.props.cart} removeCartItem={this.props.removeCartItem} />
                    <OrderDetails user={this.props.user} 
                        cart={this.props.cart} 
                        postCart={this.props.postCart}
                        userStatus={this.props.userStatus} />
                </div>
            </React.Fragment>
        );
    }
}

export default Order;