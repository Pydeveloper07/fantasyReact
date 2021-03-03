import React from 'react';
import Listings from './ListingsComponent';

const Dinner = (props) => {
    return(
        <Listings type={'Dinner'} foods={props.foods} errMsg={props.errMsg}
                addToCart={props.addToCart}
                isLoggedIn={props.isLoggedIn} />
    );
}

export default Dinner;