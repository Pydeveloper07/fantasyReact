import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/fontawesome-free-solid';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemAmount: 1
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        this.setState({itemAmount: event.target.value});
    }
    render(){
        var resRender = null;
        var discountRender = null;
        if (this.props.type === 'Menu' || this.props.type === 'Drinks'){
            resRender = (
                <div className="res-container text-center" style={{fontSize: '1.5em', overflow: 'hidden'}}>
                    <p className="float-left"><FontAwesomeIcon icon={faThumbsUp} className="like" style={{color:'blue'}}></FontAwesomeIcon><span><small>75</small></span></p>
                    <p className="float-right"><span><small>10</small></span><FontAwesomeIcon icon={faThumbsDown} className="dislike" style={{color:'blue'}}></FontAwesomeIcon></p>
                </div>
            );
        }
        else if (this.props.type === 'discount'){
            discountRender = (
                <h3 className="discount">-25%</h3>
            );
        }
        return(
            <div className="card item">
                <div className="image-container">
                    <img className="card-img-top" src="assets/images/lunch.png" alt=""/>
                </div>
                <div className="card-body">
                    {resRender}
                    {discountRender}
                    <h4 className="card-title text-left food-name">Pizza</h4>
                    <p className="content">A very delicious pizza</p>
                    <div className="row bottom-row">
                        <div className="col-md-6">
                            <p className="price mb-0" style={{textDecoration: 'line-through'}}>25,000</p>
                            <p className="price actual_price">35,000</p>
                        </div>
                        <p className="col-md-6 text-right">
                            <input type="number" name="quantity" onChange={this.state.handleInputChange} defaultValue={1} min='1' className="quantity" />
                        </p>
                    </div>
                    <button className="btn order-btn">add to cart</button>
                </div>
            </div>
        );
    }
}

export default Card;