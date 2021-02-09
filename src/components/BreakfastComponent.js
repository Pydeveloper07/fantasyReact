import React from 'react';
import Listings from './ListingsComponent';

const Breakfast = (props) => {
    return(
        <Listings type={'Breakfast'} errMsg={props.errMsg} foods={props.foods} />
    );
}

export default Breakfast;