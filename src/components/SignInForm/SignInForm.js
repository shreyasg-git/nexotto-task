import { getIsAuthenticated } from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const SignInForm = () => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitClick = () => {
    dispatch(getIsAuthenticated(user.email, password));
  };
  return (
    <div className="border-2 border-gray-700 signupform-main h-fit bg-grey2">
      <div className="mt-4 font-sans text-3xl font-semibold text-center text-transparent text-clip bg-clip-text bg-gradient-to-tl from-green-400 to-blue-500">
        Sign In to Nexotto
      </div>
      <div className="mt-2 text-center">
        <span className="text-center text-transparent text-clip bg-clip-text bg-gradient-to-tl from-green-400 to-blue-500">
          Welcome to Nexotto,{" "}
          <span>
            {user.firstName} {user.lastName}
          </span>
          !
        </span>
      </div>

      <div className="flex flex-col items-center mx-4 mt-6 align-middle">
        <div className="w-full ">
          <label
            htmlFor="emailid"
            className="mb-2 text-transparent std-label w-100 text-clip bg-clip-text bg-gradient-to-tl from-green-400 to-blue-500"
          >
            Enter Password :
          </label>

          <input
            className="border-gray-700 std-input focus:border-2 bg-grey3"
            type="password"
            onChange={onPasswordChange}
            value={password}
          />
        </div>
        <div className="flex flex-col justify-center m-3 align-middle w-fit">
          <button type="submit" className="std-btn" onClick={handleSubmitClick}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

// user	Object { userId: "4bb96a1e-617a-46ce-9494-01d7ace0b235", email: "code@nexotto.com", firstName: "Nil", … }
// userId	"4bb96a1e-617a-46ce-9494-01d7ace0b235"
// email	"code@nexotto.com"
// firstName	"Nil"
// lastName	"Jag"
// companyName	"Nexotto"

<div></div>;
export default SignInForm;
