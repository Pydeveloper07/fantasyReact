import React from 'react';
import Listings from './ListingsComponent';

const Supper = (props) => {
    return(
        <Listings type={'Supper'} foods={props.foods} errMsg={props.errMsg} />
    );
}

export default Supper;