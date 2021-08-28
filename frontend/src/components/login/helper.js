const BASE_URL = "http://localhost:8000/";

const inputFieldChecker = (email, password, confirm) => {
  let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email || !password) {
    return "Email and Password are required!";
  }

  if (password.length < 6) {
    return "password min length:6";
  }

  if (password != confirm) {
    return "password & retype missmatch!";
  }

  if (!email.match(mailFormat)) {
    return "Invalid Email!";
  }

  return "";
};

export const signupUser = async (
  StoreInstance,
  GlobLoader,
  email,
  password,
  confirmPassword,
  pushErrMessage,
  clearInputs
) => {
  let inputValidationError = inputFieldChecker(
    email,
    password,
    confirmPassword
  );

  if (inputValidationError) {
    return pushErrMessage(inputValidationError);
  }

  StoreInstance.commit(GlobLoader, true);

  pushErrMessage("");

  let responseData;

  try {
    let response = await fetch(`${BASE_URL}api/user/new`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Please try again");
    }
  } catch (err) {
    pushErrMessage(err.message);

    StoreInstance.commit(GlobLoader, false);
     
    
    return;
  }

  pushErrMessage("Created Successfully");

  StoreInstance.commit(GlobLoader, false);

  clearInputs();
};

export const loginUser = async (
  StoreInstance,
  GlobLoader,
  email,
  password,
  pushErrMessage,
  clearInputs,
  router
) => {
  // validate password
  let inputValidationError = inputFieldChecker(email, password, password);

  if (inputValidationError) {
    return pushErrMessage(inputValidationError);
  }

  let responseData;

  StoreInstance.commit(GlobLoader, true);

  pushErrMessage("");

  try {
    let response = await fetch(`${BASE_URL}api/user/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Please try again");
    }
  } catch (err) {
    pushErrMessage(err.message);

    StoreInstance.commit(GlobLoader, false);

    return;
  }

  StoreInstance.commit(GlobLoader, false);

  StoreInstance.commit("UPDATE_LOGIN", true);

  StoreInstance.commit("UPDATE_TOKEN", responseData.token )

  router.push( "/samples" );

  let { token } = responseData;

  localStorage.setItem( "PATC_KEY", token );

  clearInputs();
};
