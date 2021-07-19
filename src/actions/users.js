import { RETRIEVE_USERS } from "./type";
import { notification } from "antd";

import UserDataService from "../services/user.service";

export const retrieveUsers = () => async (dispatch) => {
  try {
    const res = await UserDataService.getAll();

    dispatch({
      type: RETRIEVE_USERS,
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
