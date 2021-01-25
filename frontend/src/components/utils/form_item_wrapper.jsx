import React from "react";
import { Form } from "antd";
import _ from "../../utils/lodash_custom"

const FormItem = props => {
  const {
    initialValue,
    name,
    form,
    children,
    rules,
    valuePropName,
    getValueFromEvent,
    onChange,
    ...rest
  } = props;
  const decoratorProps = {};
  if (_.has(props, "initialValue")) {
    decoratorProps.initialValue = initialValue;
  }
  if (_.has(props, "rules")) {
    decoratorProps.rules = props.rules;
  }
  // Used in Upload
  if (_.has(props, "valuePropName")) {
    decoratorProps.valuePropName = props.valuePropName;
  }
  // Used in Upload
  if (_.has(props, "getValueFromEvent")) {
    decoratorProps.getValueFromEvent = props.getValueFromEvent;
  }
  // const form = useFormContext();
  // if (!form) {
  //   throw new Error("Missing FormContextProvider in its parent.");
  // }

  const field = form.getFieldDecorator(name, decoratorProps)(children);
  return <Form.Item {...rest}>{field}</Form.Item>;
};
export default FormItem;
