const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed"
      };
    case "LOGIN_SUCCESS":
      console.login("success");
      return {
        ...state,
        authError: null
      };
    case "SIGOUT_SUCCESS":
      console.log("signout");
      return state;

    // case "SIGNUP_SUCCESS":
    //   console.log("signup success");
    //   return {
    //     ...state,
    //     authError: null
    //   };
    // case "SIGNUP_ERROR":
    //   console.log("signup error");
    //   return {
    //     ...state,
    //     authError: action.err.message
    //   };

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
