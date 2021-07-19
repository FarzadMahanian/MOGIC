import { RETRIEVE_USERS } from "../actions/type";

const initialState = [];

function userReducer(users = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_USERS:
      return payload;

    default:
      return users;
  }
}

export default userReducer;
