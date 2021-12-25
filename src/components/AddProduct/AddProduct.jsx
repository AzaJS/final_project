import React, { useContext, useState } from "react";

import { Form, Input, Button, Select, Modal } from "antd";

import { productsContext } from "../../contexts/productsContext";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createProduct(values).then(() => handleCancel());
  };
  return (
    <>
      <button className="auth-btn" onClick={showModal}>
        Add product
      </button>
      <Modal
        title="Add Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select gender" }]}
          >
            <Select>
              <Select.Option key="men" value="Men">
                Men
              </Select.Option>
              <Select.Option key="women" value="Women">
                Women
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Album"
            name="album"
            rules={[{ required: true, message: "Please select album!" }]}
          >
            <Select>
              <Select.Option key="kill" value="kill">
                Kill 'Em All
              </Select.Option>
              <Select.Option key="ride" value="ride">
                Ride The Lightning
              </Select.Option>
              <Select.Option key="master" value="master">
                Master of Puppets
              </Select.Option>
              <Select.Option key="justice" value="justice">
                ...And Justice for All
              </Select.Option>
              <Select.Option key="black" value="black">
                The Black Album
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Photo"
            name="photo"
            rules={[{ required: true, message: "Please input URL of photo!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <button
              className="auth-btn"
              style={{ width: "10vw" }}
              type="submit"
            >
              Add product
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProduct;
