import React from "react";
import Routes from '../route/router';
import BaseComponent from "../utils/base_component";
import MobilePhoneList from "../mobile_phone/index";
import Login from './login';

class SessionManager extends BaseComponent {

    handleLogOut = () => {
        localStorage.removeItem('auth_token');
        window.location = '/'
    };

    render() {
        const auth_token = localStorage.getItem('auth_token');
        if (auth_token !== null && auth_token !== undefined) {
            return (
              <div>
                <h1>
                Signed In
                </h1>
                <p textAlign="right"><button onClick={this.handleLogOut}> log-out </button></p>
                <Routes />
              </div>
            )
        } else return (
            <div>
                <Login/>
            </div>
        )
    };
}

export default SessionManager;
