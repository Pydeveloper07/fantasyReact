import React, {Component} from 'react';
import Navbar from './NavbarComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import ContactUs from './ContactUsComponent';
import TableOrder from './TableOrderComponent';
import Menu from './MenuComponent';
import Dashboard from './DashboardComponent';
import Drinks from './DrinksComponent';
import Breakfast from './BreakfastComponent';
import Dinner from './DinnerComponent';
import Supper from './SupperComponent';
import {
    fetchCuisines, fetchTypes, fetchFoods, fetchDrinks, 
    fetchDailyFoods, fetchReviews, authenticate, logout} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCuisines: () => dispatch(fetchCuisines()),
        fetchTypes: () => dispatch(fetchTypes()),
        fetchFoods: () => dispatch(fetchFoods()),
        fetchDrinks: () => dispatch(fetchDrinks()),
        fetchDailyFoods: () => dispatch(fetchDailyFoods()),
        fetchReviews: () => dispatch(fetchReviews()),
        authenticate: (username, password) => dispatch(authenticate(username, password)),
        logout: () => dispatch(logout()),
        resetSignupForm: () => dispatch(actions.reset('signup'))
    };
}

const mapStateToProps = (store) => {
    return {
        cuisines: store.cuisines,
        types: store.types,
        foods: store.foods,
        drinks: store.drinks,
        breakfast: store.breakfast,
        dinner: store.dinner,
        supper: store.supper,
        reviews: store.reviews,
        login: store.login
    };
}

class Main extends Component {
    componentDidMount(){
        this.props.fetchCuisines();
        this.props.fetchTypes();
        this.props.fetchFoods();
        this.props.fetchDrinks();
        this.props.fetchDailyFoods();
        this.props.fetchReviews();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar logout={this.props.logout} isLoggedIn={this.props.login.isLoggedIn} 
                        auth={this.props.authenticate} login={this.props.login} 
                        resetSignupForm={this.props.resetSignupForm} />
                <Switch>
                    <Route path='/home' component={() => <Home discountFoods={this.props.foods.foods.filter((food) => food.discount)} 
                                                            reviews={this.props.reviews.reviews} isLoading={this.props.reviews.isLoading} errMsg={this.props.reviews.errMsg}/>} />
                    <Route exact path='/menu' component={() => <Menu cuisines={this.props.cuisines.cuisines} errMsgCuisines={this.props.cuisines.errMsg}
                                                                types={this.props.types.types} errMsgTypes={this.props.types.errMsg}
                                                                foods={this.props.foods.foods} errMsgFoods={this.props.foods.errMsg}/>}/>
                    <Route path='/menu/breakfast' component={() => <Breakfast foods={this.props.breakfast.foods} errMsg={this.props.breakfast.errMsg} />} />    
                    <Route path='/menu/dinner' component={() => <Dinner foods={this.props.dinner.foods} errMsg={this.props.dinner.errMsg} />} />   
                    <Route path='/menu/supper' component={() => <Supper foods={this.props.supper.foods} errMsg={this.props.supper.errMsg} />} />                                     
                    <Route path='/drinks' component={() => <Drinks drinks={this.props.drinks.drinks} errMsg={this.props.drinks.errMsg} />} />
                    <Route path='/dashboard' component={Dashboard} /> 
                    <Redirect to='/home' />
                </Switch>
                <ContactUs />
                <TableOrder />
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));