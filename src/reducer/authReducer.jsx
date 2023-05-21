const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGEDIN_TRUE":
      return { ...state, isLoggedIn: action.payload };
    case "SET_LOGGEDIN_FALSE":
      return { ...state, isLoggedIn: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;
