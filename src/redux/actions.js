import { myFuns } from "../Util/AxiosUtil";

const { apiEndPoints } = require("../resourses/endPoints");
const { default: Axios } = require("axios");

const userActions = {
  deleteImage: "DELETE_IMAGE",
  uploadImage: "UPLOAD_IMAGE",
  login: "USER_LOGIN",
  registration: "USER_REGISTRATION",
  loginFail: "LOGIN_FAIL",
  registrationFil: "REGISTRATION_FAIL",
  getFileNames: "GET_FILE_NAMES",
  getFileNamesFail: "GET_FILE_NAMES_FAIL",
  getLastestUserProfile: "GET_LATEST_USER_PROFILE",
  addImageToProfile: "ADD_IMAGE_TO_PROFILE",
};

const actions = {
  uploadImage: uploadImage,
  deleteImage: deleteImage,
  login: login,
  registration: registration,
  getUserProfile: getProfile,
};

function success(type, userName, token) {
  return { type: type, name: userName, token: token };
}

function failure(type, message) {
  return { type: type, message: message };
}

function getProfile(res) {
  // want to get latest user profile
  return { type: userActions.getLastestUserProfile, myImages: res };
}

function login(userName, passWord) {
  return (dispatch) => {
    Axios.post(`${apiEndPoints.LOGIN_REQUEST}`, {
      userName: userName,
      password: passWord,
    }).then(
      (response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        dispatch(success(userActions.login, userName, token));
      },
      (error) => {
        console.error(error);
        dispatch(failure(userActions.loginFail, error.response));
      }
    );
  };
}

function registration(userName, passWord) {
  return (dispatch) => {
    Axios.post(`${apiEndPoints.REGISTRATION_REQUEST}`, {
      userName: userName,
      password: passWord,
    }).then(
      (response) => {
        const token = response.token;
        localStorage.setItem("token", token);
        dispatch(success(userActions.login, userName, token));
      },
      (error) => {
        console.error(error);
        dispatch(failure(userActions.registrationFil, error.response));
      }
    );
  };
}

function deleteImage() {}

function uploadImage(formData, fileName) {
  return (dispatch) => {
    Axios.post(`${apiEndPoints.UPLOAD_IMAGE_REQUEST}`, formData).then(
      (response) => {
        dispatch({
          type: userActions.addImageToProfile,
          imageNameAndInfo: {
            fileName: fileName,
            info: formData.get("isPrivate"),
          },
        });
      },
      (error) => {
        console.error(error);
        dispatch(failure(userActions.registrationFil, error.response));
      }
    );
  };
}

export { userActions, actions };
