import React from 'react';
import Listings from './ListingsComponent';

const Breakfast = (props) => {
    return(
        <Listings type={'Breakfast'} errMsg={props.errMsg} 
                foods={props.foods}
                addToCart={props.addToCart}
                isLoggedIn={props.isLoggedIn} />
    );
}

export default Breakfast;