import * as EmailValidator from "email-validator";

const Base_URL = "http://localhost:8000/";

const triggerApi = async (
  method,
  resetError,
  resetLoader,
  apiURLTail,
  bodyObject,
  setScreenType,
  resetToken,
  type
) => {
  let responseData;

  try {
    let response = await fetch(`${Base_URL}${apiURLTail}`, {
      method,
      body: JSON.stringify({ ...bodyObject }),
    });

    responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Something went wrong");
    }

    resetLoader();
    if( resetToken ) {
      resetToken( responseData.token )
    } 
    setScreenType( type )
    console.log(responseData);
  } catch (err) {
    resetError(err.message);
    resetLoader();
  }
};

const validateInputs = (email, password, retypePassword) => {
  if (!EmailValidator.validate(email)) {
    return "Invalid Email!";
  }

  if (password !== retypePassword) {
    return "Password & Retype Mismatch";
  }

  if (!password || password.length < 6) {
    return "Password min length:6";
  }

  return null;
};

export const sendOTPHelper = async (
  editResetError,
  setLoader,
  email,
  password,
  retypePassword,
  setScreenType,
  resetToken
) => {
  editResetError(null);
  setLoader();

  let errorMessage = validateInputs(email, password, retypePassword);

  if (errorMessage) {
    editResetError(errorMessage);
    setLoader();
    return;
  }

  await triggerApi(
    "POST",
    editResetError,
    setLoader,
    "api/send-otp",
    {email},
    setScreenType,
    resetToken,
    "OTP"
  );
};

export const verifyUserOTP = async (
  editResetError,
  setLoader,
  password,
  token,
  setScreenType,
  otp
) => {

  setLoader();

  await triggerApi(
    "POST",
    editResetError,
    setLoader,
    "api/verify-otp",
    { token, password, otp },
    setScreenType,
    null,
    "SUCCESS"
  );

}
