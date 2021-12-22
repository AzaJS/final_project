import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import fire from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { aut } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};
const INIT_STATE = {
  googleUser: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, googleUser: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const actionCodeSettings = {
    url: "final-project-azret.web.app",

    handleCodeInApp: true,
    iOS: {
      bundleId: "final-project-azret.firebaseapp.com",
    },
    android: {
      packageName: "final-project-azret.firebaseapp.com",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "azret-project-app.web.com",
  };

  const googleProvider = new GoogleAuthProvider();
  const authWithGoogle = async () => {
    try {
      await signInWithPopup(aut, googleProvider);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    email,
    user,
    handleLogout,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
    googleUser: state.googleUser,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
