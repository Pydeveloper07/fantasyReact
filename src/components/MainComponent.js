import React, {Component} from 'react';
import Navbar from './NavbarComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import ContactUs from './ContactUsComponent';
import TableOrder from './TableOrderComponent';
import Menu from './MenuComponent';
import Dashboard from './DashboardComponent';
import Drinks from './DrinksComponent';
import Breakfast from './BreakfastComponent';
import Dinner from './DinnerComponent';
import Supper from './SupperComponent';
import {fetchCuisines, fetchTypes, fetchFoods, fetchDrinks, fetchDailyFoods} from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCuisines: () => dispatch(fetchCuisines()),
        fetchTypes: () => dispatch(fetchTypes()),
        fetchFoods: () => dispatch(fetchFoods()),
        fetchDrinks: () => dispatch(fetchDrinks()),
        fetchDailyFoods: () => dispatch(fetchDailyFoods())
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
        supper: store.supper
    };
}

class Main extends Component {
    componentDidMount(){
        this.props.fetchCuisines();
        this.props.fetchTypes();
        this.props.fetchFoods();
        this.props.fetchDrinks();
        this.props.fetchDailyFoods();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path='/home' component={() => <Home discountFoods={this.props.foods.foods.filter((food) => food.discount)} 
                                                            dinner={this.props.dinner.foods} dinnerErrMsg={this.props.dinner.errMsg}
                                                            supper={this.props.supper.foods} supperErrMsg={this.props.supper.errMsg}/>} />
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
                <Login />
                <Signup />
                <ContactUs />
                <TableOrder />
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));