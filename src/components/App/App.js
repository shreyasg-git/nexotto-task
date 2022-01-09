import React, { useEffect } from "react";
import "./App.css";
import SignUpForm from "../SignUpForm/SignUpForm";
import { Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignInForm from "../SignInForm/SignInForm";
import { BrowserRouter, Switch } from "react-router-dom";
// import { Field, ErrorMessage } from "formik";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/nexotto-site" component={NexottoSite} />
      </Switch>
    </BrowserRouter>
  );
};

const NexottoSite = () => {
  useEffect(() => {
    window.location.href = "https://nexotto.com/";
  });
  return <div> Redirecting to Nexotto Site...</div>;
};
export default App;
