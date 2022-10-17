import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { app } from '../service/firebase';
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});


export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");
      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };
    loadStorageData();
  });

  function signInGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }

  return (
    <AuthGoogleContext.Provider
      value={{
        signed: !!user,
        user,
        signInGoogle,
        signOut,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};

// export default function AuthContextProvider({ props }) {
// const [user, setUser] = useState(null);
//   return 
//   <AuthContext.Provider value={{user, setUser}}>
//     {props.children}
//   </AuthContext.Provider>
// }
