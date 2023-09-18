import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";

const Sign = ({ type }) => {
  const buttonFunction = () => {
    if (type === "in") {
      signInWithPopup(auth, new GoogleAuthProvider());
    } else {
      auth.signOut();
    }
  };
  return (
    <div>
      <button onClick={buttonFunction}>Sign in</button>
    </div>
  );
};

export default Sign;
