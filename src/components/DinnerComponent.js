import React from 'react';
import Listings from './ListingsComponent';

const Dinner = (props) => {
    return(
        <Listings type={'Dinner'} foods={props.foods} errMsg={props.errMsg} />
    );
}

export default Dinner;