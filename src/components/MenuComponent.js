import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from './CardComponent';

const MenuHeader = () => {
    return(
        <section className="menu-header position-relative">
            <h3 className="title">Our Menu</h3>
            <div className="hero-footer-image">
                <img src="assets/images/ink white.png" alt="" />
            </div>
        </section>
    );
}

const RenderCuisine = () => {
    return(
        <div className="cuisine" style={{backgroundImage: 'url(assets/images/food.png)'}}>
            <div className="overlay text-center">
                <span>Uzbek</span>
            </div>
        </div>
    );
}

const SectionCuisine = () => {
    var cuisineList = [];
    for (var i=0; i<4; i++){
        cuisineList.push(
            <RenderCuisine key={i} />
        );
    }
    return(
        <section className="section-cuisine fadeInUp mt-5" data-wow-duration="1s" data-wow-delay="300ms">
            <OwlCarousel margin={10} className="owl-theme owl-carousel-cuisine">
                {cuisineList}
            </OwlCarousel>
        </section>
    );
}

const RenderFoodTypes = () => {
    return(
        <div className="item text-center" style={{backgroundImage: 'url(assets/images/food.png)'}}>
            <a href="#pizza">Pizza</a>
        </div>
    );
}

const SectionFoodTypes = () => {
    var foodTypesList = [];
    for (var i=0; i<3; i++){
        foodTypesList.push(
            <RenderFoodTypes key={i} />
        );
    }
    return(
        <section className="food-types mt-3">
            <OwlCarousel margin={20} className="owl-theme owl-carousel-type">
                {foodTypesList}
            </OwlCarousel>
        </section>
    );
}

const SectionFoods = () => {
    var types = ['Pizza', 'Fastfood', 'Tea'];
    var foodList = [];
    for (var i=0; i<3; i++){
        foodList.push(
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                <div className="item">
                    <Card />
                </div>
            </div>
        );
    }
    var typesListRendered = types.map((type) => {
        return(
            <React.Fragment>
                <h2 id={type} className="title text-center">{type}</h2>
                <div class="row">
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
                    <SectionCuisine />
                    <SectionFoodTypes />
                    <SectionFoods />
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;