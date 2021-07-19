import { RETRIEVE_PHOTOS } from "./type";
import { notification } from "antd";

import PhotoDataService from "../services/photo.service";

export const retrievePhotos = (albumId) => async (dispatch) => {
  try {
    const res = await PhotoDataService.getAll(albumId);

    dispatch({
      type: RETRIEVE_PHOTOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    notification.error({
      message: "ERROR",
      description: err.message,
    });
  }
};
