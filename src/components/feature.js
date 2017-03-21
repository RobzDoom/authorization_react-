import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component{
    componentWillMount(){
        this.props.fetchMsg();
    }

    render() {
        return (
            <div>
                <h2>This is the protected secret feature</h2>
                <p><strong>Secret Message:</strong></p>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{ message: state.auth.message };

}

export default connect(mapStateToProps, actions)(Feature)