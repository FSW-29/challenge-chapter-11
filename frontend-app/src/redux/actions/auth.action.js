export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_LOADING = "REGISTER_LOADING";

export const successLogin = (data) => {
  // console.log(data, 'data dari action successLogin');
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

export const successRegister = (data) => {
  // console.log(data, 'data dari action successLogin');
  return {
    type : REGISTER_SUCCESS,
    payload : data
  };
};

export const failedRegister = (data) => {
  // console.info(data, 'data dari action failedLogin');
  return {
    type : REGISTER_FAILED,
    payload : data
  }
}

export const loadingRegister = (data) => {
  // console.info(data, 'data dari action isLoading');
  return {
    type : REGISTER_LOADING,
    payload : data
  };
};