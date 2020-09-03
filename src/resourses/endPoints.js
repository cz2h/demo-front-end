const END_POINT = "localhost:8080";

const AUTH_ROUTE = "auth";

const IMAGE_ROUTE = "repo/images";

const apiEndPoints = {
  END_POINT: END_POINT,
  LOGIN_REQUEST: `${END_POINT}/${AUTH_ROUTE}/login`,
  REGISTRATION_REQUEST: `${END_POINT}/${AUTH_ROUTE}/registration`,
  UPLOAD_IMAGE_REQUEST: `${END_POINT}/${IMAGE_ROUTE}/uploadImage`,
  DELETE_IMAGE_REQUEST: `${END_POINT}/${IMAGE_ROUTE}/deleteImage`,
  GET_IMAGE_URL_REQUEST: `${END_POINT}/${IMAGE_ROUTE}/getImage`,
};

export { apiEndPoints };
