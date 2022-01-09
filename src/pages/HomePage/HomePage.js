import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "./../../assets/nexotto-logo.png";
const HomePage = () => {
  const user = useSelector((state) => state.user.user);
  const isAuthed = useSelector((state) => state.isAuthenticated.isAuthenticated);
  return (
    <div className="flex flex-col h-screen bg-black bg-mainscreen ">
      <div className="flex h-16 align-middle bg-white bg-opacity-50 w-100 ">
        <div className="content-center justify-center w-40 mt-3 ml-6 align-middle">
          <img src={Logo} alt="Nexotto Logo" />
        </div>
      </div>
      <div className="flex justify-center h-full pt-48 align-middle transition-opacity bg-black bg-opacity-70 w-100">
        {isAuthed ? <Redirect to="/nexotto-site" /> : user.email ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default HomePage;
