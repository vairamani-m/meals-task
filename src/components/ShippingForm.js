import React from 'react';
import { Modal, Form, Input, Button, Row, Col, message } from 'antd';
import { phoneNumberValidationRule, emailValidationRule } from '../utils/formvalidationRules';

const ShippingForm = ({ visibleForm, onCancel, onCallBack }) => {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Submit success!');
    onCancel(); 
    onCallBack(values)

  };

  const handleModalClose = () => {
    form.resetFields();
    onCancel(); 
  };

  return (
    <Modal
      visible={visibleForm}
      title="Shipping Address"
      onCancel={handleModalClose}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Zip Code"
              name="zipCode"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={emailValidationRule}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={phoneNumberValidationRule}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='float-right'>
            Purchase
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ShippingForm;
