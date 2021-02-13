import * as ActionTypes from './ActionTypes';
import baseUrl from './baseUrl';

export const addCuisines = (cuisines) => ({
    type: ActionTypes.ADD_CUISINES,
    payload: cuisines
})

export const cuisinesFailed = (errMsg) => ({
    type: ActionTypes.CUISINES_FAILED,
    payload: errMsg
})

export const fetchCuisines = () => (dispatch) => {
    return fetch(baseUrl + '/api/menu/cuisines/')
        .then((response) => {
            if (response.ok){
                return response;
            }
            var err = new Error('Error ' + response.status + ': ' + response.statusText);
            err.response = response;
            throw err;
        }, 
        (error) => {
            var err = new Error(error.message);
            throw err;
        })
        .then((response) => response.json())
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
    return fetch(baseUrl + '/api/menu/types/')
        .then((response) => {
            if (response.ok){
                return response;
            }
            var err = new Error('Error ' + response.status + ': ' + response.statusText);
            err.response = response;
            throw err;
        },
        (error) => {
            var err = new Error(error.message);
            throw err;
        })
        .then((response) => response.json())
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
    return fetch(baseUrl + '/api/menu/foods')
            .then((response) => {
                if(response.ok){
                    return response;
                }
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                throw err;
            },
            (error) => {
                throw new Error(error.message);
            })
            .then((response) => response.json())
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
    return fetch(baseUrl + '/api/menu/drinks/')
            .then((response) => {
                if (response.ok){
                    return response;
                }
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                throw err;
            },
            (error) => {
                throw new Error(error.message);
            })
            .then((response) => response.json())
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
    return fetch(baseUrl + '/api/menu/breakfast/')
            .then((response) => {
                if (response.ok){
                    return response;
                }
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                throw err;
            },
            (error) => {
                throw new Error(error.message);
            })
            .then((response) => response.json())
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
    return fetch(baseUrl + '/api/menu/dinner/')
            .then((response) => {
                if (response.ok){
                    return response;
                }
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                throw err;
            },
            (error) => {
                throw new Error(error.message);
            })
            .then((response) => response.json())
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
    return fetch(baseUrl + '/api/menu/supper/')
            .then((response) => {
                if (response.ok){
                    return response;
                }
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                throw err;
            },
            (error) => {
                throw new Error(error.message);
            })
            .then((response) => response.json())
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
    return fetch(baseUrl + '/api/pages/reviews')
            .then((response) => {
                if (response.ok){
                    return response;
                }
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                throw err;
            },
            (error) => {
                throw new Error(error.message);
            })
            .then((response) => response.json())
            .then((reviews) => dispatch(addReviews(reviews)))
            .catch((error) => dispatch(reviewsFailed(error.message)));
}

export const authSuccess = () => ({
    type: ActionTypes.LOGIN_SUCCESS
})

export const authFailure = (errMsg) => ({
    type: ActionTypes.LOGIN_FAILURE,
    payload: errMsg
})

export const authenticate = (username, password) => (dispatch) => {
    return fetch(baseUrl + '/api/accounts/token-auth/', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then((response) => {
            if (response.ok){
                return response;
            }
            else{
                var err = new Error('Error ' + response.status + ': ' + response.statusText);
                err.response = response;
                throw err;
            }
        },
        (error) => {
            throw new Error(error.message);
        })
        .then((response) => (response.json()))
        .then((response) => {
            localStorage.setItem('token', response.token);
            dispatch(authSuccess());
        })
        .catch((error) => dispatch(authFailure(error.message)));
}

export const logoutSuccess = () => ({
    type: ActionTypes.LOGOUT_SUCCESS
})

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
}