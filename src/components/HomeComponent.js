/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/fontawesome-free-solid';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LeaveReview from './LeaveReviewComponent';
import Card from './CardComponent';

const SectionHero = () => {
    return(
        <section className="hero position-relative">
            <h3 className="hero-title">Do you want to eat <strong>a delicious food</strong> in the world?</h3>
            <div className="hero-footer-image">
                <img src="assets/images/ink_white.png" alt="" />
            </div>
        </section>
    );
}

const SectionOurWork = () => {
    return(
        <section className="our-work row wow fadeInUp" data-wow-duration="1s" data-wow-delay="300ms">
            <div className="col-md-6 col-lg-6 col-sm-12 our-work-content">
                <h3 className="title">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
                    Morbi
                    vitae
                    pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 our-work-image">
                <img src="assets/images/food.png" alt="" />
            </div>
        </section>
    );
}

const SectionFeatures = () => {
    return(
        <section className="features">
            <h3 className="title text-center wow slideInRight">Why people <strong>choose us</strong>?</h3>
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12 feature wow rotateIn" data-wow-delay="0.5s" data-wow-duration="1s">
                    <img src="assets/images/Group1.png" alt="" />
                    <h4 className="feature-content text-center">
                        <strong>Delicious</strong> foods from <br />the popular <strong>chef</strong> cookers
                    </h4>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 feature wow rotateIn" data-wow-delay="0.8s" data-wow-duration="1s">
                    <img src="assets/images/Group2.png" alt="" />
                    <h4 className="feature-content text-center">
                        <strong>Delicious</strong> foods from <br />the popular <strong>chef</strong> cookers
                    </h4>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 feature wow rotateIn" data-wow-delay="1s" data-wow-duration="1s">
                    <img src="assets/images/Group3.png" alt="" />
                    <h4 className="feature-content text-center">
                        <strong>Fast</strong> delivery service
                    </h4>
                </div>
            </div>
        </section>
    );
}

const SectionDailyFood = () => {
    return(
        <section className="daily-food-str mb-5">
            <h3 className="title text-center wow fadeInUp"><img src="/assets/images/daily_food.png" alt="" /></h3>
            <div className="row">
                <div className="col-md-4 col-lg-4 position-relative wow slideInLeft" data-wow-delay="0.5s">
                    <img src="/assets/images/icons/ar_lb.png" alt="" className="ar-lb" />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 feature wow fadeInUp" data-wow-delay="0.3s">
                    <Link to="/menu/breakfast"><img className="type" src="/assets/images/breakfast.png" alt="" /></Link>
                    <h4 className="name text-center">Breakfast</h4>
                </div>
                <div className="col-md-4 col-lg-4 position-relative wow slideInRight" data-wow-delay="0.5s">
                    <img src="/assets/images/icons/ar_rb.png" alt="" className="ar-rb" />
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 feature wow fadeInLeft" data-wow-delay="0.6s">
                    <Link to="/menu/dinner"><img className="type" src="/assets/images/dinner.png" alt="" /></Link>
                    <h4 className="name text-center">Dinner</h4>
                </div>
                <div className="col-md-4 col-lg-4"></div>
                <div className="col-md-4 col-lg-4 col-sm-12 feature wow fadeInRight" data-wow-delay="0.6s">
                    <Link to="/menu/supper"><img className="type" src="/assets/images/lunch.png" alt="" /></Link>
                    <h4 className="name text-center">Supper</h4>
                </div>
            </div>
        </section>
    );
}

class SectionDiscountFoods extends Component{
    render(){
        const discountFoods = this.props.discountFoods.map((food) => {
            return(
                <Card key={food.id} food={food}/>
            );
        });
        return(
            <section className="discount-foods">
                <h1 className="title">Get our foods at <span>&#127775;</span><span className="special">discount</span><span>&#127775;</span></h1>
                <OwlCarousel loop items={3} margin={10} nav={true} className="owl-theme owl-carousel-discount">
                    {discountFoods}
                </OwlCarousel>
            </section>
        );
    }
}

const RenderReview = (props) => {
    var className = 'carousel-item';
    if (props.item === 1){
        className = 'carousel-item active';
    }
    return(
        <div className={className}>
            <div className="review-block">
                <div className="ava">
                    <img src="assets/images/client1.jpg" alt="Image Not Found" />
                    {/* <img src="{% static 'img/user.png' %}" alt="Image Not Found"> */}
                </div>
                <h3 className="name text-center">Tukhtamurod Isroilov</h3>
                <h3 className="name text-center">Black@Tiger</h3>
                <div className="rating-block text-center">
                    <span>Rating:</span>
                    <FontAwesomeIcon icon={faStar} className="star checked"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fas star checked"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fas star checked"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fas star checked"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="fas star"></FontAwesomeIcon>
                </div>
                <p className="text-center"><small className="font-italic">Date: 19/05/2020</small></p>
                <p className="text-center review-content"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo 
                    eget orci egestas varius. Nunc ac magna sit amet erat rhoncus tincidunt sed non justo. Donec tincidunt imperdiet porttitor.</q></p>
            </div>
        </div>
    );
}

const SectionReviews = () => {
    const arr = [1, 2, 3];
    const reviewList = arr.map((value) => {
        return(
            <RenderReview key={value} item={value} />
        );
    });
    const indicatorList = arr.map((value) => {
        var className = '';
        if (value+1 === 1){
            className = "active";
        }
        return(
            <li data-target="#carouselExampleIndicators" key={value} data-slide-to={value+1} className={className}></li>
        );
    });
    return(
        <section className="reviews mt-5">
            <h3 className="title text-center text-white">
                What others say...
                {/* <button data-toggle="modal" data-target="#rateWindow" className="review-btn" id="editReviewBtn">Edit Your Review</button> */}
                <button data-toggle="modal" data-target="#rateWindow" className="review-btn" id="leaveReviewBtn">Leave Review</button>
            </h3>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {indicatorList}
                </ol>
                <div className="carousel-inner">
                    {reviewList}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
}

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <SectionHero />
                <div className="container">
                    <SectionOurWork />
                    <SectionFeatures />
                    <SectionDailyFood />
                    <SectionDiscountFoods discountFoods={this.props.discountFoods} />
                </div>
                <SectionReviews />
                <LeaveReview />
            </React.Fragment>
        );
    }
}

export default Home;