import React, { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import fireApp from "../firebase";
import { AsyncStorage } from "react-native";

const intialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const AuthContext = createContext(intialState);

function AuthContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(AuthReducer, intialState);

  const signIn = async ({ email, password }) => {
    let userToken;
    await fireApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        userToken =
          user["$"]["B"]["b"]["b"][
            "firebase:authUser:AIzaSyB5kEyqdpUPv2iY8UeDgcELPNvi68jpixk:[DEFAULT]"
          ]["stsTokenManager"]["accessToken"];

        AsyncStorage.setItem("userToken", userToken).then(() => {
          dispatch({ type: "SIGN_IN", token: userToken });
        });
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const signOut = () => {
    AsyncStorage.removeItem("userToken").then(() => {
      dispatch({ type: "SIGN_OUT" });
    });
  };

  const signUp = async (data) => {
    dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
  };

  const restoreToken = async (userToken) => {
    dispatch({ type: "RESTORE_TOKEN", token: userToken });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        isSignout: state.isSignout,
        userToken: state.userToken,
        signIn: signIn,
        signOut: signOut,
        signUp: signUp,
        restoreToken: restoreToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
