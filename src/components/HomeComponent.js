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
import baseUrl from '../redux/baseUrl';

const SectionHero = () => {
    return(
        <section className="hero position-relative">
            <h3 className="hero-title">Would you like to eat <strong>a delicious food</strong> in the world?</h3>
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
        if (!this.props.discountFoods){
            return(
                <div></div>
            );
        }
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
    if (props.active){
        className = 'carousel-item active';
    }
    var fullName = null;
    if (props.review.user.first_name && props.review.user.last_name){
        fullName = props.review.user.first_name + " " + props.review.user.last_name;
    }
    var rating = [];
    for (var i=0; i<5; i++){
        if(i<props.review.rate){
            rating.push(
                <FontAwesomeIcon key={i} icon={faStar} className="star checked"></FontAwesomeIcon>
            );
        }
        else{
            rating.push(
                <FontAwesomeIcon key={i} icon={faStar} className="fas star"></FontAwesomeIcon>
            );
        }
    }
    return(
        <div className={className}>
            <div className="review-block">
                <div className="ava">
                    <img style={{width: '200px', height: '200px'}} src={baseUrl + props.review.user.avatar} alt="Image Not Found" />
                </div>
                <h3 className="name text-center">{fullName}</h3>
                <h3 className="name text-center">{props.review.user.username}</h3>
                <div className="rating-block text-center">
                    <span>Rating:</span>
                    {rating}
                </div>
                <p className="text-center"><small className="font-italic">Date: {props.review.created_date}</small></p>
                <p className="text-center review-content"><q>{props.review.content}</q></p>
            </div>
        </div>
    );
}

const SectionReviews = (props) => {
    if (props.errMsg || props.isLoading || !props.reviews){
        return(
            <div></div>
        );
    }
    var reviewList = [];
    reviewList.push(
        <RenderReview key={props.reviews[0].id} review={props.reviews[0]} active={true}/>
    );
    reviewList.push(props.reviews.map((review) => {
        if(review !== props.reviews[0]){
            return(
                <RenderReview key={review.id} review={review} active={false}/>
            );
        }
    }));
    var indicatorList = [];
    for (var i=0; i<props.reviews.length; i++){
        var className = '';
        if (i === 0){
            className = "active";
        }
        indicatorList.push(
            <li data-target="#carouselExampleIndicators" key={i} data-slide-to={i+1} className={className}></li>
        );
    }
    return(
        <section className="reviews mt-5">
            <h3 className="title text-center text-white">
                What others say...
                {props.isLoggedIn &&
                <React.Fragment>
                    {props.userHasReview &&
                    <button className="review-btn" id="editReviewBtn" onClick={props.toggle}>Edit Your Review</button>
                    }
                    {!props.userHasReview &&
                    <button className="review-btn" id="editReviewBtn" onClick={props.toggle}>Leave Review</button>
                    }
                </React.Fragment>
                }
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
    constructor(props){
        super(props);
        this.state = {
            isReviewModalOpen: false
        }
        this.toggleReviewModal = this.toggleReviewModal.bind(this);
    }
    toggleReviewModal = () => {
        this.setState({
            isReviewModalOpen: !this.state.isReviewModalOpen
        })
    }
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
                <SectionReviews reviews={this.props.reviews} 
                                isLoading={this.props.isLoading} 
                                errMsg={this.props.errMsg}
                                isLoggedIn={this.props.isLoggedIn} 
                                toggle={this.toggleReviewModal} 
                                userHasReview={this.props.userReview.review?true:false} />
                {this.props.isLoggedIn &&
                <LeaveReview isOpen={this.state.isReviewModalOpen} 
                            toggle={this.toggleReviewModal}
                            user={this.props.user}
                            userReview={this.props.userReview}
                            resetForm={this.props.resetReviewForm}
                            addReview={this.props.addReview}
                            updateReview={this.props.updateReview} />
                }
            </React.Fragment>
        );
    }
}

export default Home;