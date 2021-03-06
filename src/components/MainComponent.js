import React, {Component} from 'react';
import Navbar from './NavbarComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import TableOrder from './TableOrderComponent';
import Menu from './MenuComponent';
import Dashboard from './DashboardComponent';
import Drinks from './DrinksComponent';
import Breakfast from './BreakfastComponent';
import Dinner from './DinnerComponent';
import Supper from './SupperComponent';
import {
    fetchCuisines, 
    fetchTypes, 
    fetchFoods, 
    fetchDrinks, 
    fetchDailyFoods, 
    fetchReviews, 
    authenticate, 
    logout,
    registerNewUser, 
    fetchUserReview, 
    fetchUser, 
    addReview,
    updateReview,
    postContactForm,
    fetchTables,
    updateUserDetails,
    initCart,
    addToCart,
    removeCartItem,
    postCart,
    fetchUserOrderHistory,
    fetchUserStatus,
    fetchUserTables,
    addOrderedTable} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import Order from './OrderComponent';

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
        resetSignupForm: () => dispatch(actions.reset('signup')),
        resetReviewForm: () => dispatch(actions.reset('review')),
        resetContactForm: () => dispatch(actions.reset('contact')),
        resetOrderTableForm: () => dispatch(actions.reset('orderTable')),
        resetEditProfileForm: () => dispatch(actions.reset('editProfile')),
        registerNewUser: (formData) => dispatch(registerNewUser(formData)),
        fetchUserReview: () => dispatch(fetchUserReview()),
        fetchUser: () => dispatch(fetchUser()),
        addReview: (formData) => dispatch(addReview(formData)),
        updateReview: (formData) => dispatch(updateReview(formData)),
        postContactForm: (formData => dispatch(postContactForm(formData))),
        fetchTables: () => dispatch(fetchTables()),
        addOrderedTable: (table) => dispatch(addOrderedTable(table)),
        updateUserDetails: (formData) => dispatch(updateUserDetails(formData)),
        initCart: () => dispatch(initCart()),
        addToCart: (item) => dispatch(addToCart(item)),
        removeCartItem: (id) => dispatch(removeCartItem(id)),
        postCart : (formData) => dispatch(postCart(formData)),
        fetchUserOrderHistory: () => dispatch(fetchUserOrderHistory()),
        fetchUserStatus: () => dispatch(fetchUserStatus()),
        fetchUserTables: () => dispatch(fetchUserTables())
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
        user: store.user,
        userReview: store.userReview,
        tables: store.tables,
        userOrderedTables: store.userOrderedTables, 
        cart: store.cart,
        orderHistory: store.orderHistory,
        userStatus: store.userStatus
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
        this.props.fetchUserReview();
        this.props.fetchUser();
        this.props.initCart();
        this.props.fetchUserOrderHistory();
        this.props.fetchUserStatus();
        this.props.fetchUserTables();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar logout={this.props.logout} 
                        isLoggedIn={this.props.user.isLoggedIn} 
                        auth={this.props.authenticate} 
                        user={this.props.user} 
                        resetSignupForm={this.props.resetSignupForm}
                        resetContactForm={this.props.resetContactForm}
                        resetOrderTableForm={this.props.resetOrderTableForm} 
                        registerNewUser={this.props.registerNewUser}
                        postContactForm={this.props.postContactForm}
                        fetchTables={this.props.fetchTables}
                        tables={this.props.tables}
                        cart={this.props.cart}
                        addOrderedTable={this.props.addOrderedTable} />
                <Switch>
                    <Route path='/home' component={() => <Home discountFoods={this.props.foods.foods.filter((food) => food.discount)} 
                                                            reviews={this.props.reviews.reviews} 
                                                            isLoading={this.props.reviews.isLoading} 
                                                            errMsg={this.props.reviews.errMsg}
                                                            isLoggedIn={this.props.user.isLoggedIn} 
                                                            user={this.props.user.user}
                                                            userReview={this.props.userReview} 
                                                            resetReviewForm={this.props.resetReviewForm}
                                                            addReview={this.props.addReview}
                                                            updateReview={this.props.updateReview}
                                                            addToCart={this.props.addToCart}  />} />
                    <Route exact path='/menu' component={() => <Menu cuisines={this.props.cuisines.cuisines} 
                                                                    errMsgCuisines={this.props.cuisines.errMsg}
                                                                    types={this.props.types.types} 
                                                                    errMsgTypes={this.props.types.errMsg}
                                                                    foods={this.props.foods.foods} 
                                                                    errMsgFoods={this.props.foods.errMsg}
                                                                    addToCart={this.props.addToCart}
                                                                    isLoggedIn={this.props.user.isLoggedIn} />}/>
                    <Route path='/menu/breakfast' component={() => <Breakfast foods={this.props.breakfast.foods} 
                                                                            errMsg={this.props.breakfast.errMsg}
                                                                            addToCart={this.props.addToCart}
                                                                            isLoggedIn={this.props.user.isLoggedIn} />} />    
                    <Route path='/menu/dinner' component={() => <Dinner foods={this.props.dinner.foods} 
                                                                        errMsg={this.props.dinner.errMsg}
                                                                        addToCart={this.props.addToCart}
                                                                        isLoggedIn={this.props.user.isLoggedIn} />} />   
                    <Route path='/menu/supper' component={() => <Supper foods={this.props.supper.foods} 
                                                                        errMsg={this.props.supper.errMsg}
                                                                        addToCart={this.props.addToCart}
                                                                        isLoggedIn={this.props.user.isLoggedIn} />} />                                     
                    <Route path='/drinks' component={() => <Drinks drinks={this.props.drinks.drinks} 
                                                                    errMsg={this.props.drinks.errMsg}
                                                                    addToCart={this.props.addToCart}
                                                                    isLoggedIn={this.props.user.isLoggedIn} />} />
                    <Route path='/dashboard' component={() => <Dashboard userOrderedTables={this.props.userOrderedTables}
                                                                        user={this.props.user}
                                                                        resetEditProfileForm={this.props.resetEditProfileForm}
                                                                        updateUserDetails={this.props.updateUserDetails}
                                                                        orderHistory={this.props.orderHistory}
                                                                        userStatus={this.props.userStatus} />} /> 
                    <Route path='/order' component={() => <Order cart={this.props.cart}
                                                                user={this.props.user}
                                                                removeCartItem={this.props.removeCartItem}
                                                                postCart={this.props.postCart}
                                                                userStatus={this.props.userStatus} />} />
                    <Redirect to='/home'/>
                </Switch>
                <TableOrder />
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));