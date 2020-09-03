const { apiEndPoints } = require("../resourses/endPoints");
const { default: Axios } = require("axios");

const userActions = {
  deleteImage: "DELETE_IMAGE",
  uploadImage: "UPLOAD_IMAGE",
  login: "USER_LOGIN",
  registration: "USER_REGISTRATION",
  loginFail: "LOGIN_FAIL",
  registrationFil: "REGISTRATION_FAIL",
};

const actions = {
  uploadImage: addImage,
  deleteImage: deleteImage,
  login: login,
  registration: registration,
};

function success(userName, token) {
  return { type: userActions.login, name: userName, token: token };
}

function failure(type, message) {
  return { type: type, message: message };
}

function addImage() {}

function login(userName, passWord) {
  return (dispatch) => {
    Axios.post(`${apiEndPoints.LOGIN_REQUEST}`, {
      userName: userName,
      password: passWord,
    }).then(
      (response) => {
        console.log(response);
        const token = response.token;
        localStorage.setItem("token", token);
        dispatch(success(userName, token));
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
        console.log(response);
        const token = response.token;
        localStorage.setItem("token", token);
        dispatch(success(userName, token));
      },
      (error) => {
        console.error(error);
        dispatch(failure(userActions.registrationFil, error.response));
      }
    );
  };
}

function deleteImage() {}

export { userActions, actions };
