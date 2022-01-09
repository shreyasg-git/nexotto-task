import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/reducers/userReducer";
import * as yup from "yup";

const SignUpForm = () => {
  const [localEmail, setLocalEmail] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const dispatch = useDispatch();

  const handleNextClick = async () => {
    const emailValidation = yup.object().shape({ email: yup.string().email().required() });
    if (await emailValidation.isValid({ email: localEmail })) {
      dispatch(getUser(localEmail));
    } else {
      setValidationMsg("Please enter a valid email Address.");
    }
  };

  const emailOnChange = (e) => {
    setValidationMsg("");
    setLocalEmail(e.target.value);
  };

  return (
    <div className="border-2 border-gray-700 signupform-main h-fit bg-grey2">
      <div className="mt-4 font-sans text-3xl font-semibold text-center text-transparent text-clip bg-clip-text bg-gradient-to-tl from-green-400 to-blue-500">
        Sign Up to Nexotto
      </div>
      <div className="flex flex-col items-center mx-4 mt-6 align-middle">
        <div className="w-full ">
          <label
            htmlFor="emailid"
            className="mb-2 text-transparent std-label w-100 text-clip bg-clip-text bg-gradient-to-tl from-green-400 to-blue-500"
          >
            Email :
          </label>
          <input
            className="border-gray-700 std-input focus:border-2 bg-grey3"
            value={localEmail}
            onChange={emailOnChange}
          />
          {validationMsg ? <div className="text-red-700">{validationMsg}</div> : null}
        </div>
        <div className="flex flex-col justify-center m-3 align-middle w-fit">
          <button type="submit" className="std-btn" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
