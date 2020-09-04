import { combineReducers } from "redux";
import { userActions } from "./actions";
import { myFuns } from "../Util/AxiosUtil";
import { act } from "react-dom/test-utils";

const token = localStorage.getItem("token");

const initState = {
  userName: "test1@t.com",
  token: token,
  myImages: [],
  curDisplayed: "",
  shouldUpadte: false,
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
  return Object.assign({}, state);
}

function registration(state, action) {
  // TODO
  state.userName = action.name;
  state.token = action.token;
  return Object.assign({}, state);
}

function setMyImages(state, action) {
  state.myImages = action.myImages;
  return Object.assign({}, state);
}

function addImageToMyImages(state, action) {
  state.myImages.push(action.imageNameAndInfo);
  return { ...state, myImages: [...state.myImages] };
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
      return initState;
    case userActions.registrationFil:
      console.log("REGISTRATION_FAIL");
      return initState;
    case userActions.getLastestUserProfile:
      return setMyImages(state, action);
    case userActions.addImageToProfile:
      return addImageToMyImages(state, action);
    default:
      return initState;
  }
}

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
