import { apiEndPoints } from "../resourses/endPoints";
import Axios from "axios";

const myFuns = {
  getImageURL: getImageURL,
  getMyListOfImages: getMyListOfImages,
  deleteThisImage: deleteThisImage,
};

async function getImageURL(token, fileName, updater) {
  const res = await Axios.get(
    `${apiEndPoints.GET_IMAGE_URL_REQUEST}?token=${token}&fileName=${fileName}`
  ).then(
    (response) => {
      updater(response.data);
      return response.data;
    },
    (error) => {
      console.error(error);
    }
  );
  return res;
}

async function getMyListOfImages(token, callback) {
  const res = await Axios.get(
    `${apiEndPoints.GET_IMAGE_NAMES_FOR_USER}?token=${token}`
  ).then(
    (response) => {
      callback(JSON.parse(response.data.files));
    },
    (error) => {
      console.error(error);
      return [];
    }
  );
  return res;
}

async function deleteThisImage(token, fileName, callback) {
  const res = await Axios.post(`${apiEndPoints.DELETE_IMAGE_REQUEST}`, {
    token: token,
    fileName: fileName,
  }).then(
    (response) => {
      callback(response.data);
    },
    (error) => {
      console.error(error);
      return [];
    }
  );
  return res;
}

export { myFuns };
