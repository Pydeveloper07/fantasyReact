import React, {Component} from 'react';
import Card from './CardComponent';

class Listings extends Component{
    render(){
        var backgroundImg;
        var title;
        switch(this.props.type){
            case 'Drinks': 
                backgroundImg = '/assets/images/drinks-page-bg.jpg';
                title = "Don't chase anything but drinks and dreams...";
                break;
            case 'Breakfast': 
                backgroundImg = '/assets/images/breakfast_bg.jpg';
                title = "A good breakfast is a start of a good day!";
                break;
            case 'Dinner': 
                backgroundImg = '/assets/images/dinner-bg.jpg';
                title = "Dinner is where the magic happens in the kitchen!";
                break;
            case 'Supper': 
                backgroundImg = '/assets/images/supper-bg.jpg';
                title = "After dinner rest a while, after supper walk a while!";
                break;
            default: 
                backgroundImg = '/assets/images/supper-bg.jpg';
                title = "After dinner rest a while, after supper walk a while!";
        }
        var foodList = null;
        if (this.props.errMsg){
            foodList = (
                <h1 className="text-danger" style={{zIndex: '10'}}>{this.props.errMsg}</h1>
            );
        }
        else{
            foodList = this.props.foods.map((food) => {
                return(
                    <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12" key={food.id}>
                        <div className="item">
                            <Card food={food} addToCart={this.props.addToCart} isLoggedIn={this.props.isLoggedIn}/>
                        </div>
                    </div>
                );
            });
        }
        return(
            <React.Fragment>
            <section className="listings-header position-relative" style={{backgroundImage: `url(${backgroundImg})`}}>
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className="hero-footer-image">
                    <img src="/assets/images/ink_white.png" alt="" />
                </div>
            </section>
            <div className="container">
                <section className="foods">
                    <div className="row">
                        {foodList}
                    </div>
                </section>
            </div>
            </React.Fragment>
        );
    }
}

export default Listings;