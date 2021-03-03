import React, {Component, useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './CardComponent';
import baseUrl from '../redux/baseUrl';

const MenuHeader = () => {
    return(
        <section className="menu-header position-relative">
            <h3 className="title">Our Menu</h3>
            <div className="hero-footer-image">
                <img src="assets/images/ink_white.png" alt="" />
            </div>
        </section>
    );
}

const RenderCuisine = (props) => {
    const [overlayOpacity, setOverlayOpacity] = useState(0);
    const handleMouseEnter = (e) => {
        setOverlayOpacity(1);
    }
    const handleMouseLeave = (e) => {
        setOverlayOpacity(0);
    }
    return(
        <div className="cuisine" style={{backgroundImage: `url(${baseUrl}` + props.cuisine.image + ')'}}>
            <div className="overlay text-center" style={{opacity: overlayOpacity}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span>{props.cuisine.name}</span>
            </div>
        </div>
    );
}

const SectionCuisine = (props) => {
    if (props.errMsg){
        return(
            <h3 className="text-danger">{props.errMsg}</h3>
        );
    }
    var cuisineList = props.cuisines.map((cuisine) => {
        return(
            <RenderCuisine key={cuisine.id} cuisine={cuisine} />
        );
    });
    return(
        <section className="section-cuisine fadeInUp mt-5" data-wow-duration="1s" data-wow-delay="300ms">
            <OwlCarousel margin={10} className="owl-theme owl-carousel-cuisine">
                {cuisineList}
            </OwlCarousel>
        </section>
    );
}

const RenderFoodTypes = (props) => {
    return(
        <div className="item text-center" style={{backgroundImage: `url(${baseUrl}` + props.type.image + ')'}}>
            <a href={`#${props.type.name}`}>{props.type.name}</a>
        </div>
    );
}

const SectionFoodTypes = (props) => {
    if (props.errMsg){
        return(
            <h1 className="text-danger">{props.errMsg}</h1>
        );
    }
    const foodTypesList = props.types.map((type) => {
        return(
            <RenderFoodTypes key={type.id} type={type}/>
        );
    });
    return(
        <section className="food-types mt-3">
            <OwlCarousel margin={20} className="owl-theme owl-carousel-type">
                {foodTypesList}
            </OwlCarousel>
        </section>
    );
}

const SectionFoods = (props) => {
    if (props.errMsg){
        return(
            <h1 className="text-danger">{props.errMsg}</h1>
        );
    }
    const typesListRendered = props.types.map((type) => {
        var foods = props.foods.filter((food) => food.type === type.id);
        const foodList = foods.map((food) => {
            return(
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12" key={food.id}>
                    <div className="item">
                        <Card food={food} addToCart={props.addToCart} isLoggedIn={props.isLoggedIn} />
                    </div>
                </div>
            );
        });
        return(
            <React.Fragment>
                <h2 id={type.name} className="title text-center">{type.name}</h2>
                <div className="row">
                    {foodList}
                </div>
            </React.Fragment>
        );
    });
    return(
        <section className="foods">
            {typesListRendered}
        </section>
    );
}

class Menu extends Component{
    render(){
        return(
            <React.Fragment>
                <MenuHeader />
                <div className="container">
                    <SectionCuisine cuisines={this.props.cuisines} errMsg={this.props.errMsgCuisines}/>
                    <SectionFoodTypes types={this.props.types} errMsg={this.props.errMsgTypes}/>
                    <SectionFoods foods={this.props.foods} 
                                errMsg={this.props.errMsgFoods} 
                                types={this.props.types}
                                addToCart={this.props.addToCart}
                                isLoggedIn={this.props.isLoggedIn} />
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;