import { BASE_URL } from "./baseURLS.js";

const getterApiFetcher = async (tail) => {

  let token = localStorage.getItem("PATC_KEY");

  let responseData;

  try {
    const response = await fetch(`${BASE_URL}/${tail}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Baerer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Something Went Wrong, Please Relad the Page ");
    }

    responseData = await response.json();
    return null, responseData;
  } catch (err) {
    return err.message, null;
  }
};

export const getInitialSamplesData = async (
  { commit },
  loaderMethodCTX,
  token,
  methodCTX
) => {

  commit( loaderMethodCTX, true );
  let responseData = await getterApiFetcher( 'samples' );
 commit( methodCTX, responseData );
 commit( loaderMethodCTX, false );
  
};
export const getInitialPatientsData = async (
  { commit },
  loaderMethodCTX,
  token,
  methodCTX
) => {

  commit( loaderMethodCTX, true );
  let err, responseData = await getterApiFetcher( 'patients' );
  console.log( err)
 commit( methodCTX, responseData );
 commit( loaderMethodCTX, false );
  
};
