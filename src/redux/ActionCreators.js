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
            alert(response.status);
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