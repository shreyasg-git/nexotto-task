import React from "react";
import "./App.css";
import Logo from "./../../assets/nexotto-logo.png";
import { Field, ErrorMessage } from "formik";
const App = () => {
  return (
    <div className="flex flex-col h-screen bg-light">
      <div className="flex h-24 align-middle bg-white shadow-md bg-opacity-60 w-100 ">
        <div className="content-center justify-center w-40 mt-3 ml-6 align-middle">
          <img src={Logo} alt="Nexotto Logo" />
        </div>
      </div>
      <div className="flex justify-center h-full mt-48 align-middle w-100 bg-light">
        <div className="signupform-main bg-dark bg-gradient-to-tl from-green-400 to-blue-500">
          <div className="mt-4 font-sans text-3xl font-semibold text-center text-white text-clip">
            Sign In to Nexotto
          </div>
          <div className="mx-4 mt-6">
            <label htmlFor="emailid" className="std-label">
              Email :
            </label>
            <input className="std-input" />
            <div className="validation-msg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
