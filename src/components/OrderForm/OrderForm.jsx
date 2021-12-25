import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import CreditApp from "../CreditCard/CreditApp";
import App from "../CreditCard/CreditApp";
import { useNavigate } from "react-router-dom";
//добить инвойс
const OrderForm = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    navigate("/");
    console.log("Received values of form: ", values);
  };
  console.log(App);
  return (
    <>
      <div className="container" style={{ marginTop: "10vh" }}>
        <Form
          name="complex-form"
          onFinish={onFinish}
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item label="Name">
            <Form.Item
              name="name"
              noStyle
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Please input your name"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Surname">
            <Form.Item
              name="surname"
              noStyle
              rules={[{ required: true, message: "Surname is required" }]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Please input your surname"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Address">
            <Form.Item
              name="address"
              noStyle
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Input your address"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Birth date" style={{ marginBottom: 0 }}>
            <Form.Item
              name="year"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
              <Input placeholder="Input birth year" />
            </Form.Item>
            <Form.Item
              name="month"
              rules={[{ required: true }]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input birth month" />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Phone number">
            <Form.Item
              name="phoneNumber"
              noStyle
              rules={[{ required: true, message: "Phone number is required" }]}
            >
              <Input
                type="number"
                style={{ width: "100%" }}
                placeholder="Please input your phone number"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
            {/* <Link to="/credit"> */}
            <button
              style={{ width: "10vw" }}
              className="auth-btn"
              type="submit"
            >
              Submit
            </button>
            {/* </Link> */}
          </Form.Item>
        </Form>
      </div>
      {/* <Modal
        title="Payment"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="payment-form"
          onFinish={onSecondFinish}
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 12 }}
        >
          <CreditApp />
        </Form>
      </Modal> */}
    </>
  );
};

export default OrderForm;
