import { RETRIEVE_ALBUMS } from "../actions/type";

const initialState = [];

function albumReducer(albums = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_ALBUMS:
      return payload;

    default:
      return albums;
  }
}

export default albumReducer;
