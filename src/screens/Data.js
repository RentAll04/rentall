import React, { useState } from "react";

import { Form, Input, Button, Select } from "antd";
import { addCategoryData } from "../firebase/config";
const { Option } = Select;

const Data = () => {
  const [form] = Form.useForm();

  const [categoryName, setCategoryName] = useState("");

  const handleChange = (value) => {
    setCategoryName(value);
  };

  const handleOk = (values) => {
    console.log(values);
    console.log(values.specifics.split(","));
    addCategoryData(values);
    form.setFieldsValue({
      categoryName: "",
      name: "",
      brand_name: "",
      delivery: "",
      product_age: "",
      quality: "",
      rental_time: "",
      rented: "",
      specifics: "",
      type: "",
    });
  };
  return (
    <>
      <div style={{ margin: "100px 150px" }}>
        <h3>ADD DATA</h3>
        <Form form={form} name="addData" onFinish={handleOk} layout="vertical">
          <Form.Item
            style={{ marginTop: "28px" }}
            name="categoryName"
            label="Category Name(any one from: electronics, furniture,clothes,gaming,sports,accessories)"
            rules={[
              {
                required: true,
                message: "Please enter name of the product",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="name"
            label="Product Name"
            rules={[
              {
                required: true,
                message: "Please enter name of the product",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="brand_name"
            label="Brand Name"
            rules={[
              {
                required: true,
                message: "Please enter brand name of the product",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="delivery"
            label="Delivery(in days)"
            rules={[
              {
                required: true,
                message: "Please enter number only",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="product_age"
            label="Product Age(in days)"
            rules={[
              {
                required: true,
                message: "Please enter number only",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="quality"
            label="Quality(out of 10)"
            rules={[
              {
                required: true,
                message: "Please enter number only",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="rented"
            label="Number of Times Rented"
            rules={[
              {
                required: true,
                message: "Please enter number only",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="rental_time"
            label="Rental Time"
            rules={[
              {
                required: true,
                message: "Please enter number only",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="type"
            label="Type"
            rules={[
              {
                required: true,
                message: "Please enter type",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "28px" }}
            name="specifics"
            label="Specifications(add specifications using commas"
            rules={[
              {
                required: true,
                message: "Please enter specifications",
              },
            ]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>

          <Button htmlType="submit" size="large">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Data;
