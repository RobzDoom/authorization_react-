/**
 * Created by jorgecruz on 3/20/17.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component{
    handleFormSubmit(values){
        console.log('handleFormSubmit');
        this.props.signupUser(values);
    };

    render(){

        const { errorMsg, handleSubmit, fields: { email, password, passwordConfirm}} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email</label>
                    <input className="form-control" {...email}/>
                    { email.touched  && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" {...password}/>
                    { password.touched  && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password Confirm</label>
                    <input className="form-control" type="password" {...passwordConfirm}/>
                    { passwordConfirm.touched  && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
                </fieldset>
                <button type="submit" className="btn btn-primary">Sign Up!</button>
                { errorMsg && <div className="alert alert-danger">{errorMsg}</div> }
            </form>
        )
    }
}
function validate(values) {
    const error = {};

    if (!values.email){
        error.email = 'Please enter an email'
    }
    if (!values.password){
        error.password = 'please enter a password'
    }
    if (!values.passwordConfirm){
        error.passwordConfirm = 'please confirm password'
    }
    if (values.password !== values.passwordConfirm){
        error.passwordConfirm = 'Passwords do not match'
    }
    return error;
}

function mapStateToProps(state) {
    return { errorMsg: state.auth.error }
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}, mapStateToProps, actions)(SignUp)