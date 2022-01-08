export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => ({ type: GET_USER });
export const setUser = (user) => ({ type: SET_USER, user });

const initState = {
  user: { email: "" },
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user: user };
    default:
      return state;
  }
};

export default userReducer;
