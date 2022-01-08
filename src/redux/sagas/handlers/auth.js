import { call, put } from "redux-saga/effects";
import { setIsAuthenticated } from "../../reducers/authReducer";
import { postIsAuthenticated } from "../requests/isAuthed";

export function* handlePostAuth(action) {
  try {
    const response = yield call(() => {
      return postIsAuthenticated(action.payload);
    });
    const { data } = response;
    yield put(setIsAuthenticated(true));
  } catch (error) {
    console.log(error);
  }
}
