import * as ActionTypes from './ActionTypes';
import baseUrl from './baseUrl';
import axios from 'axios';

export const addCuisines = (cuisines) => ({
    type: ActionTypes.ADD_CUISINES,
    payload: cuisines
})

export const cuisinesFailed = (errMsg) => ({
    type: ActionTypes.CUISINES_FAILED,
    payload: errMsg
})

export const fetchCuisines = () => (dispatch) => {
    return axios.get(baseUrl + '/api/menu/cuisines/')
                .then((response) => response.data)
                .then((cuisines) => dispatch(addCuisines(cuisines)))
                .catch((error) => dispatch(cuisinesFailed(error.message)));
}

export const addTypes = (types) => ({
    type: ActionTypes.ADD_TYPES,
    payload: types
})

export const typesFailed = (errMsg) => ({
    type: ActionTypes.TYPES_FAILED,
    payload: errMsg
})

export const fetchTypes = () => (dispatch) => {
    return axios.get(baseUrl + '/api/menu/types/')
                .then((response) => response.data)
                .then((types) => dispatch(addTypes(types)))
                .catch((error) => dispatch(typesFailed(error.message)));
}

export const addFoods = (foods) => ({
    type: ActionTypes.ADD_FOODS,
    payload: foods
})

export const foodsFailed = (errMsg) => ({
    type: ActionTypes.FOODS_FAILED,
    payload: errMsg
})

export const fetchFoods = () => (dispatch) => {
    return axios.get(baseUrl + '/api/menu/foods/')
                .then((response) => response.data)
                .then((foods) => dispatch(addFoods(foods)))
                .catch((error) => dispatch(foodsFailed(error.message)))
}

export const addDrinks = (drinks) => ({
    type: ActionTypes.ADD_DRINKS,
    payload: drinks
})

export const drinksFailed = (errMsg) => ({
    type: ActionTypes.DRINKS_FAILED,
    payload: errMsg
})

export const fetchDrinks = () => (dispatch) => {
    return axios.get(baseUrl + '/api/menu/drinks/')
                .then((response) => response.data)
                .then((drinks) => dispatch(addDrinks(drinks)))
                .catch((error) => dispatch(drinksFailed(error.message)));
}

export const addBreakfast = (foods) => ({
    type: ActionTypes.ADD_BREAKFAST,
    payload: foods
})

export const breakfastFailed = (errMsg) => ({
    type: ActionTypes.BREAKFAST_FAILED,
    payload: errMsg
})

export const fetchBreakfast = () => (dispatch) => {
    return axios.get(baseUrl + '/api/menu/breakfast/')
                .then((response) => response.data)
                .then((foods) => dispatch(addBreakfast(foods)))
                .catch((error) => dispatch(breakfastFailed(error.message)));
}

export const addDinner = (foods) => ({
    type: ActionTypes.ADD_DINNER,
    payload: foods
})

export const dinnerFailed = (errMsg) => ({
    type: ActionTypes.DINNER_FAILED,
    payload: errMsg
})

export const fetchDinner = () => (dispatch) => {
    return axios.get(baseUrl + '/api/menu/dinner/')
                .then((response) => response.data)
                .then((foods) => dispatch(addDinner(foods)))
                .catch((error) => dispatch(dinnerFailed(error.message)));
}

export const addSupper = (foods) => ({
    type: ActionTypes.ADD_SUPPER,
    payload: foods
})

export const supperFailed = (errMsg) => ({
    type: ActionTypes.SUPPER_FAILED,
    payload: errMsg
})

export const fetchSupper = () => (dispatch) => {
    return axios.get(baseUrl + '/api/menu/supper/')
                .then((response) => response.data)
                .then((foods) => dispatch(addSupper(foods)))
                .catch((error) => dispatch(supperFailed(error.message)));
}

export const fetchDailyFoods = () => (dispatch) => {
    dispatch(fetchBreakfast());
    dispatch(fetchDinner());
    dispatch(fetchSupper());
}

export const addReviews = (reviews) => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
})

export const reviewsFailed = (errMsg) => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMsg
})

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING,
})

export const fetchReviews = () => (dispatch) => {
    dispatch(reviewsLoading());
    return axios.get(baseUrl + '/api/pages/reviews/')
                .then((response) => response.data)
                .then((reviews) => dispatch(addReviews(reviews)))
                .catch((error) => dispatch(reviewsFailed(error.message)));
}

export const authSuccess = () => ({
    type: ActionTypes.LOGIN_SUCCESS,
})

export const authFailure = (errMsg) => ({
    type: ActionTypes.LOGIN_FAILURE,
    payload: errMsg
})

export const authenticate = (username, password) => (dispatch) => {
    let data = {
        username: username,
        password: password
    }
    return axios.post(baseUrl + '/api/accounts/token-auth/', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.data)
        .then((data) => {
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                alert("Your session has expired!");
                dispatch(logoutSuccess());
                sessionStorage.clear();
            }, data.expiry_time);
            dispatch(authSuccess(data.user));
            dispatch(fetchUser());
            dispatch(fetchUserReview());
            dispatch(fetchUserTables());
            dispatch(fetchUserOrderHistory());
            dispatch(fetchUserStatus());
            dispatch(initCart());
        })
        .catch((error) => dispatch(authFailure("Incorrect login credentials!")));
}

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
})

export const userFailed = (errMsg) => ({
    type: ActionTypes.USER_FAILED,
    payload: errMsg
})

export const fetchUser = () => (dispatch) => {
    return axios.get(baseUrl + '/api/accounts/current_user/', {
                    headers:{
                        Authorization: `JWT ${localStorage.getItem('token')}`
                    }
                })
                .then((response) => response.data)
                .then((user) => dispatch(addUser(user)))
                .catch((error) => dispatch(userFailed(error.message)));
}

export const logoutSuccess = () => ({
    type: ActionTypes.LOGOUT_SUCCESS
})

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    sessionStorage.clear();
    dispatch(initCart());
    dispatch(logoutSuccess());
}

export const registerUserSuccess = (user) => ({
    type: ActionTypes.REGISTER_USER_SUCCESS,
    payload: user
})

export const registerUserFailure = (errMsg) => ({
    type: ActionTypes.REGISTER_USER_FAILURE,
    payload: errMsg
})

export const registerNewUser = (formData) => (dispatch) => {
    return axios.post(baseUrl + '/api/accounts/users/', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then((response) => response.data)
        .then((data) => {
            dispatch(registerUserSuccess(data.username));
            localStorage.setItem('token', data.token);
            dispatch(authSuccess(data.username));
            dispatch(fetchUser());
            dispatch(fetchUserReview());
        })
        .catch((error) => dispatch(registerUserFailure(error.message)));
    }

export const addUserReview = (review) => ({
    type: ActionTypes.ADD_USER_REVIEW,
    payload: review
})

export const userReviewFailed = (errMsg) => ({
    type: ActionTypes.USER_REVIEW_FAILED,
    payload: errMsg
})

export const fetchUserReview = () => (dispatch) => {
    return axios.get(baseUrl + '/api/pages/user-review/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((review) => dispatch(addUserReview(review)))
        .catch((error) => dispatch(userReviewFailed(error.message)));
}

export const addReviewSuccess = (review) => ({
    type: ActionTypes.ADD_REVIEW_SUCCESS,
    payload: review
})

export const addReviewFailed = (errMsg) => ({
    type: ActionTypes.ADD_REVIEW_FAILED,
    payload: errMsg
})

export const addReview = (formData) => (dispatch) => {
    formData.append('created_date', new Date().toISOString());
    return axios.post(baseUrl + '/api/pages/user-review/', formData, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((review) => {
            dispatch(addReviewSuccess(review));
            dispatch(fetchUserReview());
        })
        .catch((error) => dispatch(addReviewFailed(error.message)));
}

export const updateReviewSuccess = (updatedReview) => ({
    type: ActionTypes.UPDATE_REVIEW_SUCCESS,
    payload: updatedReview
})

export const updateReviewFailed = (errMsg) => ({
    type: ActionTypes.UPDATE_REVIEW_FAILED,
    payload: errMsg
})

export const updateReview = (formData) => (dispatch) => {
    formData.append('created_date', new Date().toISOString());
    return axios.put(baseUrl + '/api/pages/user-review/', formData, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((updatedReview) => dispatch(updateReviewSuccess(updatedReview)))
        .catch((error) => dispatch(updateReviewFailed(error.message)));
}

export const postContactForm = (formData) => (dispatch) => {
    return axios.post(baseUrl + '/api/pages/contact/', formData)
                .then((response) => response.data)
                .then((message) => alert(message.message))
                .catch((error) => console.log(error.message));
}

export const addTablesSuccess = (tables) => ({
    type: ActionTypes.TABLES_SUCCESS,
    payload: tables
})

export const addTablesFailed = (errMsg) => ({
    type: ActionTypes.TABLES_FAILED,
    payload: errMsg
})

export const fetchTables = () => (dispatch) => {
    return axios.get(baseUrl + '/api/pages/tables/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((tables) => dispatch(addTablesSuccess(tables)))
        .catch((error) => dispatch(addTablesFailed(error.message)));
}

export const addUserTables = (tables) => ({
    type: ActionTypes.USER_ORDERED_TABLES_SUCCESS,
    payload: tables
})

export const userTablesFailed = (errMsg) => ({
    type: ActionTypes.USER_ORDERED_TABLES_FAILED,
    payload: errMsg
})

export const fetchUserTables = () => (dispatch) => {
    return axios.get(baseUrl + '/api/pages/user-tables/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((tables) => dispatch(addUserTables(tables)))
        .catch((error) => dispatch((userTablesFailed(error.message))));
}

export const updateUserDetailsSuccess = (user) => ({
    type: ActionTypes.UPDATE_USER_DETAILS_SUCCESS,
    payload: user
})

export const updateUserDetailsFailed = (errMsg) => ({
    type: ActionTypes.UPDATE_USER_DETAILS_FAILED,
    payload: errMsg
})

export const updateUserDetails = (formData) => (dispatch) => {
    return axios.put(baseUrl + '/api/accounts/user-update/', formData, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((user) => dispatch(updateUserDetailsSuccess(user)))
        .catch((error) => dispatch(updateUserDetailsFailed(error.message)));
}

export const initCart = () => {
    var totalCost = 0;
    var numberOfItems = 0;
    var items = [];
    if (sessionStorage.getItem('cart')){
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        if (cart.items && cart.items.length>0 && cart.totalCost && cart.numberOfItems){
            totalCost = cart.totalCost;
            numberOfItems = cart.numberOfItems;
            items = cart.items;
        }
    }
    else{
        var cart = {
            totalCost: totalCost,
            numberOfItems: numberOfItems,
            items: items
        };
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    return {
        type: ActionTypes.INIT_CART,
        payload: JSON.parse(sessionStorage.getItem('cart'))
    };
}

export const addToCart = (item) => {
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    var isInTheCart = false;
    for(var i=0; i<cart.items.length; i++){
        if (cart.items[i].id === item.id){
            cart.items[i].quantity = parseInt(cart.items[i].quantity) + parseInt(item.quantity);
            isInTheCart = true;
        }
    }
    if (!isInTheCart){
        cart.items.push(item);
    }
    if (item.discount){
        cart.totalCost += item.price*(1-item.discount/100)*item.quantity;
    }
    else{
        cart.totalCost += item.price*item.quantity;
    }
    cart.numberOfItems = cart.items.length;
    sessionStorage.setItem('cart', JSON.stringify(cart));
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: cart
    }
}

export const removeCartItem = (id) => (dispatch) => {
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    var item = cart.items.filter((item) => item.id === id)[0];
    var updatedCartItems = cart.items.filter((item) => item.id !== id);
    cart.items = updatedCartItems;
    cart.numberOfItems -= 1;
    if (item.discount){
        cart.totalCost -= parseInt(item.quantity)*item.price*(1-item.discount/100);
    }
    else{
        cart.totalCost -= parseInt(item.quantity)*item.price;
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    dispatch(initCart());
}

export const addOrderItemToHistory = (orderItem) => ({
    type: ActionTypes.ADD_ORDER_ITEM_TO_HISTORY,
    payload: orderItem
})

export const postCart = (formData) => (dispatch) => {
    return axios.post(baseUrl + '/api/pages/order/', formData, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((orderItem) => {
            sessionStorage.removeItem('cart');
            dispatch(initCart());
            dispatch(addOrderItemToHistory(orderItem));
            dispatch(fetchUserStatus());
        })
        .catch((error) => console.log(error.message));
}

export const userOrderHistorySuccess = (orders) => ({
    type: ActionTypes.USER_ORDER_HISTORY_SUCCESS,
    payload: orders
})

export const userOrderHistoryFailed = (errMsg) => ({
    type: ActionTypes.USER_ORDER_HISTORY_FAILED,
    payload: errMsg
})

export const fetchUserOrderHistory = () => (dispatch) => {
    return axios.get(baseUrl + '/api/pages/user-order-history/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((orders) => dispatch(userOrderHistorySuccess(orders)))
        .catch((error) => dispatch(userOrderHistoryFailed(error.message)));
}

export const userStatusSuccess = (status) => ({
    type: ActionTypes.USER_STATUS_SUCCESS,
    payload: status
})

export const userStatusFailed = (errMsg) => ({
    type: ActionTypes.USER_STATUS_FAILED,
    payload: errMsg
})

export const fetchUserStatus = () => (dispatch) => {
    return axios.get(baseUrl + '/api/accounts/user-status/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then((response) => response.data)
        .then((status) => dispatch(userStatusSuccess(status)))
        .catch((error) => dispatch(userStatusFailed(error.message)));
}

export const addOrderedTable = (table) => ({
    type: ActionTypes.ADD_ORDERED_TABLE,
    payload: table
})