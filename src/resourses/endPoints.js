const END_POINT = "http://127.0.0.1:8080";

const AUTH_ROUTE = "auth";

const IMAGE_ROUTE = "repo/image";

const USER_PROFILE_ROUTE = "profile";

const apiEndPoints = {
  END_POINT: END_POINT,
  LOGIN_REQUEST: `${END_POINT}/${AUTH_ROUTE}/login`,
  REGISTRATION_REQUEST: `${END_POINT}/${AUTH_ROUTE}/registration`,
  UPLOAD_IMAGE_REQUEST: `${END_POINT}/${IMAGE_ROUTE}/uploadImage`,
  DELETE_IMAGE_REQUEST: `${END_POINT}/${IMAGE_ROUTE}/deleteImage`,
  GET_IMAGE_URL_REQUEST: `${END_POINT}/${IMAGE_ROUTE}/getImage`,
  GET_IMAGE_NAMES_FOR_USER: `${END_POINT}/${USER_PROFILE_ROUTE}/myImages`,
};

export { apiEndPoints };
