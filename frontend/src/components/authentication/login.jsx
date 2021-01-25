/* eslint-disable class-methods-use-this */
import React from "react";
import axios from "axios";
import BaseComponent from "../utils/base_component";
import "antd/dist/antd.css";
import { Card, Form, Input, Icon, Row, Col, Button, message } from "antd";
import moment from 'moment';
import FormItem from "../utils/form_item_wrapper";

class Login extends BaseComponent {
    state = {
        email: '',
        password: '',
        loggedIn: false
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/v1/users/sign_in', {user: {email: this.state.email, password: this.state.password}}, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              }
            })
            .then((res) => {
                window.localStorage.setItem('auth_token', res.headers['authorization']);
                window.location = '/mobile_phones'
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render(){
        return (
          <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
              <Col span={4} >
               <Card>
                <Form onSubmit={this.onFormSubmit} >
                  <Form.Item
                  label= "Email Id"
                  name="email" form={this.props.form}
                  rules={[{ required: true, message: 'Please enter email id' }]}>
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25' }} />}
                       type="user"  placeholder="Email Id"
                       onChange={event => this.setState({email: event.target.value})} />
                  </Form.Item>

                  <Form.Item
                  label= "Password"
                  name="password" form={this.props.form}
                  rules={[{ required: true, message: 'Please enter password' }]}>
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25' }} />}
                       type="password"  placeholder="Password"
                       onChange={event => this.setState({password: event.target.value})} />
                  </Form.Item>

                  <Form.Item>
                  <Button type="primary" htmlType="submit">
                      Login
                  </Button>
                  </Form.Item>
                </Form>
                </Card>
              </Col>
            </Row>

        );
    }
}

export default Login;
