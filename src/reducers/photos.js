import { RETRIEVE_PHOTOS } from "../actions/type";

const initialState = [];

function photoReducer(photos = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_PHOTOS:
      return payload;

    default:
      return photos;
  }
}

export default photoReducer;
