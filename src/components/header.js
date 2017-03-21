/**
 * Created by jorgecruz on 3/20/17.
 */
import React, { Component } from 'react';
import { Link } from  'react-router';
import {connect } from 'react-redux'

class Header extends Component {
    renderAuthLinks(){
        const { authenticated } = this.props;
        
        if(authenticated){
            return (
                <li className="nav-item">
                    <Link to = 'signout' className="nav-link">Sign Out</Link>
                </li>
            )
        }
        return [
            <li className="nav-item" key='signin'>
                <Link to="/signin" className="nav-link">Sign In</Link>
            </li>,
            <li className="nav-item" key='signup'>
                <Link to="/signup" className="nav-link">Sign up</Link>
            </li>
        ]
    }
    
    render(){
      return(  
          <nav className="navbar navbar-light">
              <Link to="/" className="navbar-brand">Cool Auth App</Link>
            <ul className="nav nabbar-nav">
                {this.renderAuthLinks()}
            </ul>
        </nav>
        )
    }
}

function mapStateProps(state) {
    return { authenticated: state.auth.autheticated }    
}

export default connect(mapStateProps)(Header);