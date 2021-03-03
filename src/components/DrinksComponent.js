import React, {Component} from 'react';
import Listings from './ListingsComponent';

const Drinks = (props) => {
    return(
        <Listings type={'Drinks'} foods={props.drinks} errMsg={props.errMsg}
            addToCart={props.addToCart}
            isLoggedIn={props.isLoggedIn} />
    );
}

export default Drinks;