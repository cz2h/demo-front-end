import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { actions } from "../redux/actions";

import "antd/dist/antd.css";
import "./ImageRepo.css";

import ImageDisplayer from "./ImageDisplayer/ImageDisplayer";
import ImageUploader from "./ImageUploader/ImageUploader";
import { myFuns } from "../Util/AxiosUtil";

const { Header, Sider, Content, Footer } = Layout;

const ImageRepo = (props) => {
  const [collapsed, toggle] = useState(true);
  myFuns.getMyListOfImages(props.token, (res) => {
    props.initUserListImages(res);
  });

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ color: "#fff" }}>
          <Row>
            <Col span={23}>Image Repo</Col>
            <Col span={1}>
              <span className="trigger" onClick={(e) => toggle(!collapsed)}>
                Upload
              </span>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 20,
              maxHeight: "90%",
            }}
          >
            {<ImageDisplayer />}
          </Content>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            width={350}
          >
            {collapsed ? (
              ""
            ) : (
              <div>
                <ImageUploader />
              </div>
            )}
          </Sider>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          <a href="https://github.com/zengchu2">
            <GithubOutlined />
            {"Source Code"}
          </a>
        </Footer>
      </Layout>
    </div>
  );
};

const actionsCreatos = {
  initUserListImages: actions.getUserProfile,
};

const mapState = (state) => {
  return {
    token: state.reducer.token,
  };
};

export default connect(mapState, actionsCreatos)(ImageRepo);
