import { all, fork, takeLatest } from "redux-saga/effects";
import { GET_USER } from "./../reducers/userReducer";
import { handleGetUser } from "./handlers/user";
import { handlePostAuth } from "./handlers/auth";
import { GET_IS_AUTHENTICATED } from "../reducers/authReducer";

export function* getUserSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}

export function* getIsAuthenticatedSaga() {
  yield takeLatest(GET_IS_AUTHENTICATED, handlePostAuth);
}

export function* watcherSaga() {
  yield all([fork(getUserSaga), fork(getIsAuthenticatedSaga)]);
}
