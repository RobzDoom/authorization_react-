/**
 * Created by jorgecruz on 3/20/17.
 */
import React, { Component } from 'react'
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
    renderError(){
        const { errorMsg } = this.props;

        if(errorMsg){
            return(
                <div className="alert alert-danger">
                    <strong>Ooooops</strong> {errorMsg}
                </div>

            )
        }
    }
    handleSignin(values){
        this.props.signinUser(values);
    }


    render(){
        const { handleSubmit, fields: { email, password}}  = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleSignin.bind(this))}>
                <fieldset className="form-group">
                    <label>Email</label>
                    <input className="form-control" {...email}/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password</label>
                    <input className="form-control" {...password}/>
                </fieldset>
                <button className="btn btn-primary">Sign In</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { errorMsg: state.auth.error }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)