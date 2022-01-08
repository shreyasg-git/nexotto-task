export const GET_IS_AUTHENTICATED = "GET_IS_AUTHENTICATED";
export const SET_IS_AUTHENTICATED = "SET_IS_AUTHENTICATED";

export const getIsAuthenticated = (email, password) => ({
  type: GET_IS_AUTHENTICATED,
  payload: { email, password },
});
export const setIsAuthenticated = (user) => ({ type: SET_IS_AUTHENTICATED });

const initState = {
  isAuthenticated: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      const { isAuthenticated } = action;
      console.log(isAuthenticated);
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};

export default authReducer;
