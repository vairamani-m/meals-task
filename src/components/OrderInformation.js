import React from 'react';
import { Result, Button } from 'antd';

const OrderInformation = ({ orderInfo, onBack }) => {
  const { name, address, city, state, zipCode, email, phoneNumber } = orderInfo;

  return (
    <Result
      status="success"
      title="Order Placed Successfully!"
      subTitle={`Thank you, ${name}! Your order has been successfully placed.`}
      extra={[
        <p key="address">Shipping Address: {address}, {city}, {state}, {zipCode}</p>,
        <p key="email">Email: {email}</p>,
        <p key="phoneNumber">Phone Number: {phoneNumber}</p>,
        <Button type="primary" key="back" onClick={onBack}>
          Back to Home
        </Button>,
      ]}
    />
  );
};

export default OrderInformation;
