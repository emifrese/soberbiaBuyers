import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setUserInfo, setBuyersAmount } from "./store/user/userSlice";
import { getBuyers } from "./store/buyers/buyersSlice";

import { LayoutWrapper } from "./components/UI/Layout/Layout";
import Sign from "./components/UI/Sign/Sign.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Routes from "./Routes/Routes";

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, setUser);

    console.log(auth.currentUser.uid)

    if (user !== null) {
      const { displayName, email, photoURL } = user;
      dispatch(setUserInfo({ displayName, email, photoURL }));
      onSnapshot(collection(firestore, `arrogants`), (snapshot) => {
        let buyersArray = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const personalArrogants = buyersArray.filter(
          (buyer) => buyer.user === auth.currentUser.email
          );
        if(auth.currentUser.uid === "y2FrPOmlepdy3NK0D88OQnGXUY83"){
          dispatch(getBuyers(buyersArray));
          dispatch(setBuyersAmount(buyersArray.length));
        } else {
          dispatch(getBuyers(personalArrogants));
          dispatch(setBuyersAmount(personalArrogants.length));
        }
      });
    }
  }, [user, dispatch]);

  return (
    <>
      <LayoutWrapper>
        {user ? (
          <>
            <Routes />
          </>
        ) : (
          <Sign type="in" />
        )}
      </LayoutWrapper>
    </>
  );
}

export default App;
