import React from "react";
import { Col } from "antd";
import { Image } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";

const ImageInDetail = ({ url, hideThisImage }) => {
  return (
    <Col
      span={18}
      style={{
        marginLeft: "5%",
        marginBottom: "1%",
        maxHeight: "500px",
        width: "100%",
      }}
    >
      <Image
        alt="imageTODO"
        style={{
          marginLeft: "20%",
          marginBottom: "10%",
          maxHeight: "500px",
          maxWidth: "70%",
        }}
        src={url}
      />
      <CloseSquareOutlined
        onClick={() => hideThisImage()}
        style={{ float: "right" }}
      />
    </Col>
  );
};

export default ImageInDetail;
