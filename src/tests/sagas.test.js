import { takeLatest } from "redux-saga/effects";
import { getUserSaga } from "../redux/sagas/rootSaga";
import { handleGetUser } from "../redux/sagas/handlers/user";
import { GET_USER } from "../redux/reducers/userReducer";
import { GET_IS_AUTHENTICATED } from "../redux/reducers/authReducer";
import { getIsAuthenticatedSaga } from "../redux/sagas/rootSaga";
import { handlePostAuth } from "../redux/sagas/handlers/auth";

describe("getUserFromMocky", () => {
  const genObject = getUserSaga();

  it("should wait for every GET_USER action and call handleGetUser", () => {
    expect(genObject.next().value).toEqual(takeLatest(GET_USER, handleGetUser));
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("POST_dataToMocky", () => {
  const genObject = getIsAuthenticatedSaga();
  it("should wait for every GET_IS_AUTHENTICATED action and call getUserInfo", () => {
    expect(genObject.next().value).toEqual(takeLatest(GET_IS_AUTHENTICATED, handlePostAuth));
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

/**
 * these tests are still brittle and are only for demonstration purpose.
 * furthermore when we will have a more advanced API where 200, 400, 401 status codes
 * will be available, we can do much stronger and inclusive testing.
 */
