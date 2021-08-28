const BASE_URL = "http://localhost:8000/";
let token = localStorage.getItem("PATC_KEY");

const UploadData = async (data) => {
  const {
    triggerError,
    checkType,
    fileString,
    fileObject,
    setLoader,
    setInitials,
    updateSample,
    updatePatients,
  } = data;

  triggerError("");

  let validationErrorMessage = validateData(checkType, fileString);

  if (validationErrorMessage) {
    triggerError(validationErrorMessage);
    return;
  }

  setLoader();
  try {
    let response = await fetch(`${BASE_URL}api/uploads/${checkType}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Baerer ${token}`,
      },
      body: fileObject,
    });

    let responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.message || "Please Try Again Or Reload Page"
      );
    }

    triggerError(responseData.message);
    setInitials();

    if (checkType === "sample") {
      updateSample({ data: responseData.records });
    } else {
      updatePatients({ data: responseData.records });
    }
  } catch (err) {
    triggerError(err.message || "Please Try Again Or Reload Page");
  }

  setLoader();
};

const validateData = (checkType, fileString) => {
  if (fileString === "Please Choose .CSV File") {
    return "Missing .CSV File!";
  }

  if (checkType === "Not Selected") {
    return "Missing, Upload Record Type!";
  }

  return "";
};

export default UploadData;
