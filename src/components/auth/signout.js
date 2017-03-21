/**
 * Created by jorgecruz on 3/20/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount(){
        this.props.signoutUser();
    }


    render(){
        return(
        <div>
            <h3>You have been signed out</h3>
            <p>Thanks for Visiting!</p>
        </div>
        )
    }
}

export default connect(null, actions)(Signout);