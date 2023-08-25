import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const AuthContexts = createContext();

const intialState = {
  currentUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  // console.log(state);

  const Login = (userData) => {
    // localStorage.setItem("current-user", JSON.stringify(userData.user));
    localStorage.setItem("tataCliqUserToken", JSON.stringify(userData.token));

    dispatch({
      type: "LOGIN",
      payload: userData.user,
    });
  };

  const Logout = () => {
    localStorage.removeItem("tataCliqUserToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = JSON.parse(localStorage.getItem("tataCliqUserToken"));
      if (token?.length) {
        const response = await axios.post(
          "http://localhost:8003/get-current-user",
          { token }
        );

        if (response.data.success) {
          dispatch({
            type: "LOGIN",
            payload: response.data.user,
          });
        } else {
          toast.error(response.data.message);
        }
      }
    };

    getCurrentUser();
  }, []);

  return (
    <AuthContexts.Provider value={{ state, Login, Logout }}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;

// --------------------------------------------->CONTEXT-LS----------------------------------------->

// import { createContext, useEffect, useReducer } from "react";
// import { toast } from "react-hot-toast";

// export const AuthContexts = createContext();

// const initialState = {
//   currentUser: null,
//   allProducts: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return { ...state, currentUser: action.payload };
//     case "LOGOUT":
//       return { ...state, currentUser: null };
//     case "PRODUCT":
//       return { ...state, allProducts: action.payload };
//     default:
//       return state;
//   }
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   // console.log(state);

//   const Login = (userData) => {
//     localStorage.setItem("current-user", JSON.stringify(userData));

//     dispatch({
//       type: "LOGIN",
//       payload: userData,
//     });
//   };

//   const Logout = () => {
//     localStorage.removeItem("current-user");

//     dispatch({
//       type: "LOGOUT",
//     });

//     toast.success("Logout Successfull!");
//   };

//   const contextProducts = (allProducts) => {
//     // const allProducts = JSON.parse(localStorage.getItem("products")) || [];
//     // allProducts.push(product);
//     localStorage.setItem("products", JSON.stringify(allProducts));

//     dispatch({
//       type: "PRODUCT",
//       payload: allProducts,
//     });
//   };

//   useEffect(() => {
//     const currentUserDetails = JSON.parse(localStorage.getItem("current-user"));
//     const allProducts = JSON.parse(localStorage.getItem("products")) || [];

//     dispatch({
//       type: "LOGIN",
//       payload: currentUserDetails,
//     });

//     dispatch({
//       type: "PRODUCT",
//       payload: allProducts,
//     });
//   }, []);

//   return (
//     <AuthContexts.Provider value={{ state, Login, Logout, contextProducts }}>
//       {children}
//     </AuthContexts.Provider>
//   );
// };

// export default AuthProvider;
