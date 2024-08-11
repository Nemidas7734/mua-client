import { UserCredential } from "firebase/auth/web-extension";
import { auth } from "../firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  verifyPasswordResetCode
} from "firebase/auth";

type Email = string;
type Password = string;

export const registerUser = async (email : Email, password : Password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};




export const logoutUser = () => {
  return auth.signOut();
};

export const doPasswordReset = (email:Email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doResetPasword = ( code: string) => {
  return verifyPasswordResetCode (auth, code)
}


