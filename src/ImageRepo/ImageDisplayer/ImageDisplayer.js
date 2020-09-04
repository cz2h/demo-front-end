import React, { useState } from "react";
import { connect } from "react-redux";
import { actions } from "../../redux/actions";
// import Axios from "axios";
import { Row, Input } from "antd";

// import { apiEndPoints } from "../../resourses/endPoints";
import { myFuns } from "../../Util/AxiosUtil";

import "./ImageDisplayer.css";

import ImageInDetail from "./ImageInDetail/ImageInDetail";
import TextDisplayer from "./ItemDisplayInText/TextDisplayer";

const { Search } = Input;

const ImageDisplayer = (props) => {
  const [filter, setFilter] = useState("");
  const [url, setCurDisplayedFileUrl] = useState("");

  const fileItems =
    props.fileNames === []
      ? []
      : props.fileNames.map((item, index) => {
          if (item.fileName.includes(filter)) {
            return (
              <TextDisplayer
                item={item}
                index={index}
                key={index}
                onClick={() => {
                  myFuns.getImageURL(
                    props.token,
                    item.fileName,
                    setCurDisplayedFileUrl
                  );
                }}
                onDelete={() => {
                  setCurDisplayedFileUrl("");
                  myFuns.deleteThisImage(props.token, item.fileName, (res) => {
                    props.initUserListImages(res);
                  });
                }}
              />
            );
          }
          return "";
        });

  const viewImageComponent =
    url === "" ? (
      ""
    ) : (
      <ImageInDetail
        url={url}
        hideThisImage={() => setCurDisplayedFileUrl("")}
      />
    );
  const fileNameDisplayerStyle =
    url === "" ? {} : { float: "left", width: "50%", height: "90%" };

  return (
    <div className="site-card-wrapper">
      <div style={{ marginBottom: "30px" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={(value) => setFilter(value)}
        />
      </div>
      <div className="image-display-window">
        <div style={fileNameDisplayerStyle}>
          <Row gutter={8}>{fileItems}</Row>
        </div>
        <div style={fileNameDisplayerStyle}>
          <Row gutter={8}>{viewImageComponent}</Row>
        </div>
      </div>
    </div>
  );
};

const actionsCreatos = {
  getImage: actions.getImage,
  initUserListImages: actions.getUserProfile,
};

const mapState = (state) => {
  return {
    token: state.reducer.token,
    fileNames: state.reducer.myImages,
    shouldUpdate: state.reducer.shouldUpate,
  };
};

export default connect(mapState, actionsCreatos)(ImageDisplayer);
