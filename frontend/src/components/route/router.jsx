/* eslint-disable class-methods-use-this */
import React from "react";
import { Switch, Route, Redirect, BrowserRouter as Router, Link } from "react-router-dom";
import { Col, Button } from "antd";
import BaseComponent from "../utils/base_component";
import MobilePhoneList from "../mobile_phone/index";
import MobilePhoneCreate from "../mobile_phone/create";
import PageNotFound from '../public/404'

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class Routes extends BaseComponent {
  render () {
    return (
      <div>
        <Router history={history}>
          <div className="button_top">
            <Col xs={20} style={{textAlign: 'right'}}>
              <Link to="/mobile_phones/new"><Button  type="primary">Mobile Phone - New Inventory</Button></Link>
            </Col>
            <Col xs={4} style={{textAlign: 'left'}} >
              <Button  type="primary" onClick={this.handleLogOut}> Log Out </Button>
            </Col>
          </div>
          <Switch>
            <Route exact path="/mobile_phones" component={MobilePhoneList} />
            <Route exact path="/mobile_phones/new" component={MobilePhoneCreate} />
            <Route exact path="/404" component={PageNotFound} />
            <Redirect to="/mobile_phones" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
