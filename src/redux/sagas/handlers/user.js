import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducers/userReducer";
import { getUserInfo } from "../requests/user";

export function* handleGetUser(action) {
  try {
    console.log(action.emailByUser);
    const response = yield call(getUserInfo);
    const { data } = response;
    yield put(setUser(data.user));
  } catch (error) {
    console.log(error);
  }
}
