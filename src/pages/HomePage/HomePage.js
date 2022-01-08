import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "./../../assets/nexotto-logo.png";
const HomePage = () => {
  const user = useSelector((state) => state.user.user);
  const isAuthed = useSelector((state) => state.isAuthenticated.isAuthenticated);
  return (
    <div className="flex flex-col h-screen bg-bgGrey">
      <div className="flex h-24 align-middle shadow-md bg-grey2 w-100 ">
        <div className="content-center justify-center w-40 mt-3 ml-6 align-middle">
          <img src={Logo} alt="Nexotto Logo" />
        </div>
      </div>
      <div className="flex justify-center h-full mt-48 align-middle w-100 bg-bgGrey ">
        {isAuthed ? <Redirect to="/nexotto-site" /> : user.email ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default HomePage;
