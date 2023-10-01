import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { SignInButton } from "./SignStyles";

const Sign = ({ type }) => {
  const buttonFunction = () => {
    if (type === "in") {
      signInWithPopup(auth, new GoogleAuthProvider());
    } else {
      auth.signOut();
    }
  };
  return (
    <SignInButton onClick={buttonFunction}>
      {type === "in" ? "Sign in" : "Sign out"}
    </SignInButton>
  );
};

export default Sign;
