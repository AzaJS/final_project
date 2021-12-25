import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, Select } from "antd";
import { productsContext } from "../../contexts/productsContext";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateProduct(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <h2>Edit product</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
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
          <Input />
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
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <button className="auth-btn" type="submit">
            Edit product
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
