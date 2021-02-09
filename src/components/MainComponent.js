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
import {fetchCuisines, fetchTypes, fetchFoods, fetchDrinks} from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCuisines: () => dispatch(fetchCuisines()),
        fetchTypes: () => dispatch(fetchTypes()),
        fetchFoods: () => dispatch(fetchFoods()),
        fetchDrinks: () => dispatch(fetchDrinks())
    };
}

const mapStateToProps = (store) => {
    return {
        cuisines: store.cuisines,
        types: store.types,
        foods: store.foods,
        drinks: store.drinks
    };
}

class Main extends Component {
    componentDidMount(){
        this.props.fetchCuisines();
        this.props.fetchTypes();
        this.props.fetchFoods();
        this.props.fetchDrinks();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route path='/home' component={() => <Home discountFoods={this.props.foods.foods.filter((food) => food.discount)} />} />
                    <Route path='/menu' component={() => <Menu cuisines={this.props.cuisines.cuisines} errMsgCuisines={this.props.cuisines.errMsg}
                                                                types={this.props.types.types} errMsgTypes={this.props.types.errMsg}
                                                                foods={this.props.foods.foods} errMsgFoods={this.props.foods.errMsg}/>}/>
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