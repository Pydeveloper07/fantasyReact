import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/fontawesome-free-solid';
import baseUrl from '../redux/baseUrl';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemAmount: 1
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.calculateActualPrice = this.calculateActualPrice.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleInputChange(event){
        this.setState({itemAmount: event.target.value});
    }

    calculateActualPrice(actualPrice, discount){
        return actualPrice*(1 - discount/100);
    }
    handleBtnClick = (e) => {
        var food = this.props.food;
        var item = {
            id: food.id,
            name: food.name,
            price: food.price,
            discount: food.discount,
            quantity: this.state.itemAmount,
            image: food.image
        }
        this.props.addToCart(item);
    }
    render(){
        var discountRender = null;
        var priceRender = null; 
        if (this.props.food.discount){
            discountRender = (
                <h3 className="discount">-{this.props.food.discount}%</h3>
            );
            priceRender = (
                <div className="col-md-6">
                    <p className="price mb-0" style={{textDecoration: 'line-through'}}>{this.props.food.price}</p>
                    <p className="price actual_price">{this.calculateActualPrice(this.props.food.price, this.props.food.discount)}</p>
                </div>
            );
        }
        else{
            priceRender = (
                <div className="col-md-6">
                    <p className="price mb-0">{this.props.food.price}</p>
                </div>
            );
        }
        return(
            <div className="card item">
                <div className="image-container">
                    <img className="card-img-top" src={baseUrl + this.props.food.image} alt=""/>
                </div>
                <div className="card-body">
                    <div className="res-container text-center" style={{fontSize: '1.5em', overflow: 'hidden'}}>
                        <p className="float-left"><FontAwesomeIcon icon={faThumbsUp} className="like" style={{color:'blue'}}></FontAwesomeIcon><span><small>75</small></span></p>
                        <p className="float-right"><span><small>10</small></span><FontAwesomeIcon icon={faThumbsDown} className="dislike" style={{color:'blue'}}></FontAwesomeIcon></p>
                    </div>
                    {discountRender}
                    <h4 className="card-title text-left food-name">{this.props.food.name}</h4>
                    <p className="content">{this.props.food.description}</p>
                    <div className="row bottom-row">
                        {priceRender}
                        <p className="col-md-6 text-right">
                            <input type="number" name="quantity" onChange={this.handleInputChange} value={this.state.itemAmount} min='1' className="quantity" />
                        </p>
                    </div>
                    <button className="btn order-btn" onClick={this.handleBtnClick}>add to cart</button>
                </div>
            </div>
        );
    }
}

export default Card;