import { UploadOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, TimePicker, Upload, Button } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();

  const createEvent = (values) => {
    values["start_date"] = moment(values.start_date).format("DD-MM-YYYY");
    values["end_date"] = moment(values.end_date).format("DD-MM-YYYY");
    values["start_time"] = moment(values.start_time).format("HH:MM:SS");
    values["end_time"] = moment(values.end_time).format("HH:MM:SS");
    console.log(values);
    navigate("/event", { state: values });
  };

  const props = {
    name: "file",
  };

  return (
    <div className="create_page text-center">
      <h3>Create an Event</h3>
      <div className="event_form">
        <Form layout="vertical" onFinish={createEvent}>
          <Row>
            <Col lg={6}>
              <Form.Item
                label="Event Name"
                name="event_name"
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item
                label="Host Name"
                name="host_name"
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Item
                label="Start Date"
                name="start_date"
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <DatePicker format="DD/MM/YYYY" />
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item
                label="End Date"
                name="end_date"
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <DatePicker format="DD/MM/YYYY" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Item
                label="Start Time"
                name="start_time"
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <TimePicker />
              </Form.Item>
            </Col>
            <Col lg={6}>
              <Form.Item
                label="End Time"
                name="end_time"
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <TimePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Item
                label="Event Photo"
                name="event_photo"
                rules={[{ required: true, message: "Please fill the field" }]}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col lg={6}></Col>
          </Row>
          <Form.Item>
            <button className="button_component gradiant_bg" type="submit">
              NEXT
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateEvent;
