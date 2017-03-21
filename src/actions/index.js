import axios from 'axios'
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MSG } from './types';

const BASE_URL = 'http://scottbowlerdev.com/api';

export function signinUser({email, password}) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/signin`, {email, password}).then(response => {
            dispatch({type: AUTH_USER});

            localStorage.setItem('token', response.data.token);

            browserHistory.push('/feature');
        }).catch(() => {
            dispatch(authError('Bad login info'))
        });
    }
}

export function signupUser({email, password}){
    return function (dispatch) {
        axios.post(`${BASE_URL}/signup`, {email, password}).then(response => {
            console.log('Called API success');
            dispatch({type: AUTH_USER});

            localStorage.setItem('token', response.data.token);

            browserHistory.push('/feature');
        }).catch(err => {
            console.log('Error calling api');
            dispatch(authError(err.response.data.error))
        }) ;
    }
}

export function signoutUser () {
    localStorage.removeItem('token');
    return {type: UNAUTH_USER};
}

export function fetchMsg(){
    return function (dispatch) {
        axios.get(`${ BASE_URL }`, {
            headers: { authorization: localStorage.getItem('token') }
        }).then(response =>{
            dispatch({
                type: FETCH_MSG,
                payload: response.data.message
            });


        })
    }
}

export function authError (err){
    return {
        type: AUTH_ERROR,
        payload: err
    }
}