/* eslint-disable class-methods-use-this */
import React from "react";
import BaseComponent from "../utils/base_component";
import { list } from "../../models/actions/mobile_phone";
import "antd/dist/antd.css";
import { Card, Row, Col, Pagination, Button, message, Form, Input } from "antd";
import { Link } from "react-router-dom";
import FormItem from "../utils/form_item_wrapper";

class MobilePhoneList extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mobile_phones: null,
      count: null,
      page: 1,
    };

    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList(1)
  }

  getList(page) {
    list(page).then( res => {
      this.setState({
        mobile_phones: res.data.mobile_phones,
        count: res.data.count
      });
    }).catch( err => {
      if(err.status === 404)
          this.props.history.push('/404');
      else
          message.error("Something went wrong, Please try again")
  })
  }

  onChange = page => {
    this.setState({page: page})
    this.getList(page);
  };

  render () {
    const mobile_phones = this.state.mobile_phones || [];
    const mobile_units = this.state.count || 0;
    return (
      <div className="page__wrapper">
        <Card title="Mobile Phone Inventories">
          <div style={{ background: '#ECECEC', padding: '30px'}}>
            <Row gutter={16}>
              {mobile_phones.map( mobile_phone =>
               <Col span={8} style={{textAlign: 'center'}}>
                  <Card title={mobile_phone.manufacture} key={mobile_phone.id} bordered={true}>
                  <p className="mob_phone_manufacturer">{mobile_phone.manufacturer} </p>
                  <p className="model_info"><strong>Model : </strong>{mobile_phone.model}    <strong> Model Name : </strong> {mobile_phone.model_number}</p>
                  <p className="specifications"><strong> Storage Sieze : </strong>{mobile_phone.storage_capacity} <strong> Year of Manufacture : </strong>{mobile_phone.manufacturing_year}</p>
                  <p className="pricing"><strong> Color : </strong> {mobile_phone.color}  <strong>{mobile_phone.price}</strong></p>
                  </Card>
                </Col>
                )
              }
            </Row>
            {mobile_units && <Pagination pageSize={3} current={this.state.page} onChange={this.onChange} total={mobile_units} />}
          </div>
        </Card>
      </div>
    );
  }
}

const WrappedNormalSearchForm = Form.create()(MobilePhoneList);
export default WrappedNormalSearchForm;


// export default Company;
