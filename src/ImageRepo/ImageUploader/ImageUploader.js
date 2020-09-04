import React, { useState } from "react";

import { connect } from "react-redux";
import { actions } from "../../redux/actions";

// import { Upload, message, Button } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

const ImageUploader = (props) => {
  const [errorMessage, setMessage] = useState("");
  const [uploadAsPrivate, setUploadFileAs] = useState(false);

  const myProps = {
    onChange(info) {
      let file = info.file;
      if (file.status !== "uploading") {
        if (!file.type.includes("image")) {
          setMessage(" You should only update images");
        } else {
          let uploadedAlready = false;
          props.curFiles.map((item) => {
            if (item.fileName === file.name) {
              uploadedAlready = true;
            }
          });
          if (uploadedAlready) {
            console.log("updated already");
            setMessage(
              `${file.name} is uploaded already, please rename it if you want to upload again`
            );
          } else {
            let formData = new FormData();
            formData.append("file", file);
            formData.append("token", props.token);
            formData.append("isPrivate", uploadAsPrivate);
            props.uploadImage(formData, file.name);
          }
        }
      }
    },
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          [...e.target.files].map((file) => {
            myProps.onChange({ file: file });
          });
        }}
      />
      ,{errorMessage}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { curFiles: state.reducer.myImages, token: state.reducer.token };
};
const actionsCreator = {
  uploadImage: actions.uploadImage,
};

export default connect(mapStateToProps, actionsCreator)(ImageUploader);
