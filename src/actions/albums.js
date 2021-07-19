import { RETRIEVE_ALBUMS } from "./type";
import { notification } from "antd";

import AlbumDataService from "../services/album.service";

export const retrieveAlbums = (userId) => async (dispatch) => {
  try {
    const res = await AlbumDataService.getAll(userId);

    dispatch({
      type: RETRIEVE_ALBUMS,
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
