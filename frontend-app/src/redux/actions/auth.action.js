export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const successLogin = (data) => {
  // console.log(data, 'data dari action');
  return {
    type : LOGIN_SUCCESS,
    payload : data
  };
};

export const failedLogin = (data) => {
  // console.info(data, 'data dari action failedLogin');
  return {
    type : LOGIN_FAILED,
    payload : data
  }
}

export const loadingLogin = (data) => {
  // console.info(data, 'data dari action isLoading');
  return {
    type : LOGIN_LOADING,
    payload : data
  };
};