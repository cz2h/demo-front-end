import React, { useState } from "react";
import { Card, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TextDisplayer = ({ item, index, onClick, onDelete }) => {
  return (
    <Col span={8} key={index + item.fileName} style={{ marginBottom: "1%" }}>
      <Card
        title={item.fileName}
        bordered={false}
        hoverable={true}
        onClick={() => {
          onClick();
        }}
      ></Card>
      <DeleteOutlined
        onClick={() => {
          onDelete();
        }}
      />
    </Col>
  );
};

export default TextDisplayer;
