import { combineReducers } from "redux";
import { userActions } from "./actions";

const initState = {
  userName: "",
  token: "",
  myImages: {},
  curDisplayed: "",
};

function addImage(state, action) {
  // TODO
}

function deleteImage(state, action) {
  // TODO
}

function login(state, action) {
  state.userName = action.name;
  state.token = action.token;
  return state;
}

function registration(state, action) {
  // TODO
  state.userName = action.name;
  state.token = action.token;
  return state;
}

function reducer(state = initState, action) {
  switch (action.type) {
    case userActions.uploadImage:
      console.log("UPLOAD_IMAGE");
      return addImage(state, action);
    case userActions.deleteImage:
      console.log("DELETE_IMAGE");
      return deleteImage(state, action);
    case userActions.login:
      console.log("USER_LOGIN");
      return login(state, action);
    case userActions.registration:
      console.log("USER_REGISTRATION");
      return registration(state, action);
    case userActions.loginFail:
      console.log("LOGIN_FAILED");
      return;
    case userActions.registrationFil:
      console.log("REGISTRATION_FAIL");
      return;
    default:
      return initState;
  }
}

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
