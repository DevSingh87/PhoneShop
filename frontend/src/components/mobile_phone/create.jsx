/* eslint-disable class-methods-use-this */
import React from "react";
import BaseComponent from "../utils/base_component";
import { create } from "../../models/actions/mobile_phone";
import "antd/dist/antd.css";
import { Card, Form, Input, DatePicker, Row, Col, Button, message } from "antd";
import moment from 'moment';
import FormItem from "../utils/form_item_wrapper";

class MobilePhoneCreate extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mobile_phone: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            const params = { mobile_phone: values };
            create(params)
            .then(res => {
                message.success("Mobile Phone inventory has been created successful")
                this.props.history.push('/mobile_phones');
            })
            .catch( err => {
                if(err.status === 404)
                    this.props.history.push('/404');
                else
                    message.error("Something went wrong, Please try again")
            })
        }
    })
  }

  disabledDate = current => {
    return moment() < moment(current);
  };

  render () {
    return (
      <div className="page__wrapper">
        <Card title="Mobile Phone - New Inventory">
            <div className="form-wrapper">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={24}>
                            <FormItem
                            label= "Manufacturer"
                            name="manufacturer" form={this.props.form}
                            rules={[{ required: true, message: 'Please enter your mobile brand name' }]}>
                                <Input type="text"  placeholder="Enter Mobile Brand Name" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            <FormItem
                            label= "Model"
                            name="model" form={this.props.form}
                            rules={[{ required: true, message: 'Please enter model name' }]}>
                                <Input type="text"  placeholder="Enter Model Name" />
                            </FormItem>
                        </Col>

                        <Col xs={8}>
                            <FormItem
                            label= "Model Number"
                            className="margin_l_r"
                            name="model_number" form={this.props.form}
                            rules={[{ required: true, message: 'Please model number' }]}>
                                <Input type="text"  placeholder="Enter Model Number" />
                            </FormItem>
                        </Col>

                        <Col xs={8}>
                            <FormItem
                            label= "Storage Capacity"
                            name="storage_capacity" form={this.props.form}
                            rules={[{ required: true, message: 'Please enter storage capacity' }]}>
                                <Input type="text"  placeholder="Enter Storage Size" />
                            </FormItem>
                        </Col>

                        <Col xs={8}>
                            <FormItem
                            label= "Year of Manufacture"
                            name="manufacturing_year" form={this.props.form}
                            rules={[{ required: true, message: 'Please enter the year of manufacture' }]}>
                                <Input type="text"  placeholder="Enter Year of Manufacture" />
                            </FormItem>
                        </Col>

                        <Col xs={8}>
                            <FormItem
                            label= "Color"
                            className="margin_l_r"
                            name="color" form={this.props.form}
                            rules={[{ required: true, message: 'Please enter color' }]}>
                                <Input type="text"  placeholder="Enter Color" />
                            </FormItem>
                        </Col>

                        <Col xs={8}>
                            <FormItem
                            label= "Price"
                            name="price" form={this.props.form}
                            rules={[{ required: true, message: 'Please selling price' }]}>
                                <Input type="text"  placeholder="Enter Selling Price" />
                            </FormItem>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24}>
                            <Form.Item>
                            <Button type="primary" htmlType="submit">
                                SAVE
                            </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Card>
      </div>
    );
  }
}

const WrappedNormalMobilePhoneCreateForm = Form.create()(MobilePhoneCreate);
export default WrappedNormalMobilePhoneCreateForm;
