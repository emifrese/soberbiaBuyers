import { FormContainer, LabelContainer, LabelItem, SubmitButton } from "./FormStyles.js";

import { auth, firestore } from "../../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
// import { calculatePrice } from "../../helpers/functions/priceCalculator.js";
import { useSelector } from "react-redux";
import { findRepeatedID } from "../../helpers/functions/findeRepeatedID.JS";

const Form = ({ Toggle }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredID, setEnteredID] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredPay, setEnteredPay] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [validation, setValidation] = useState([]);

  const { buyers } = useSelector((state) => state.buyers);

  // const suggestedPrice = calculatePrice(); This is getting error today 4/10 at 22:41

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const surnameChangeHandler = (e) => {
    setEnteredSurname(e.target.value);
  };

  const IDChangeHandler = (e) => {
    setEnteredID(e.target.value.trim());
  };

  const genderChangeHandler = (e) => {
    setEnteredGender(e.target.value);
  };

  const payChangeHandler = (e) => {
    setEnteredPay(e.target.value.trim());
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let error = false;

    if (enteredName.trim() === "") {
      setValidation((state) => {
        if (!state.includes("Name")) {
          return [...state, "Name"];
        }
        return state;
      });
      error = true;
    }

    if (enteredSurname.trim() === "") {
      setValidation((state) => {
        if (!state.includes("surname")) {
          return [...state, "surname"];
        }
        return state;
      });
      error = true;
    }

    if (enteredID < 1000000 || enteredID > 999999999) {
      setValidation((state) => {
        if (!state.includes("ID")) {
          return [...state, "ID"];
        }
        return state;
      });
      error = true;
    }

    if (findRepeatedID(buyers, enteredID)) {
      setValidation((state) => {
        if (!state.includes("ID")) {
          return [...state, "ID"];
        }
        return state;
      });
      error = true;
    }

    if (enteredGender === "") {
      setValidation((state) => {
        if (!state.includes("gender")) {
          return [...state, "gender"];
        }
        return state;
      });
      error = true;
    }

    if (enteredPay === "") {
      setValidation((state) => {
        if (!state.includes("pay")) {
          return [...state, "pay"];
        }
        return state;
      });
      error = true;
    }

    if (enteredPrice === "") {
      setValidation((state) => {
        if (!state.includes("price")) {
          return [...state, "price"];
        }
        return state;
      });
      error = true;
    } 

    if (error) {
      return;
    }

    const arrogantRef = collection(firestore, "arrogantsBigg");

    const arrogantData = {
      name: enteredName.trim(),
      surname: enteredSurname.trim(),
      ID: enteredID,
      gender: enteredGender,
      pay: enteredPay,
      user: auth.currentUser.email,
      price: 5000,
    };

    Toggle();

    await addDoc(arrogantRef, arrogantData);

    setTimeout(() => Toggle(), 1000);

    setEnteredName("");
    setEnteredSurname("");
    setEnteredID("");
    setEnteredGender("");
    setEnteredPay("");
    setEnteredPrice("");
    setValidation([]);
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <h2>Carga a tu Soberbi@</h2>

      <LabelContainer>
        <li>
          <LabelItem htmlFor="arrogantName">
            Nombre
            <input
              id="arrogantName"
              name="name"
              type="text"
              style={
                validation.includes("Name")
                  ? { boxShadow: "0px 0px 5px 3px rgba(255,0,0,0.75)" }
                  : { boxShadow: "none" }
              }
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={() => {
                if (enteredName.trim() !== "") {
                  setValidation((state) => state.filter((el) => el !== "Name"));
                }
              }}
            />
          </LabelItem>
        </li>
        <li>
          <LabelItem htmlFor="arrogantSurname">
            Apellido
            <input
              id="arrogantSurname"
              name="surname"
              type="text"
              style={
                validation.includes("surname")
                  ? { boxShadow: "0px 0px 5px 3px rgba(255,0,0,0.75)" }
                  : { boxShadow: "none" }
              }
              value={enteredSurname}
              onChange={surnameChangeHandler}
              onBlur={() => {
                if (enteredSurname.trim() !== "") {
                  setValidation((state) =>
                    state.filter((el) => el !== "surname")
                  );
                }
              }}
            />
          </LabelItem>
        </li>
        <li>
          <LabelItem htmlFor="arrogantID">
            DNI
            <input
              id="arrogantID"
              name="dni"
              type="number"
              style={
                validation.includes("ID")
                  ? { boxShadow: "0px 0px 5px 3px rgba(255,0,0,0.75)" }
                  : { boxShadow: "none" }
              }
              value={enteredID}
              onChange={IDChangeHandler}
              onBlur={() => {
                if (enteredID !== "") {
                  setValidation((state) => state.filter((el) => el !== "ID"));
                }
              }}
            />
          </LabelItem>
        </li>
        <li>
          <LabelItem>
            Genero
            <select
              id="arrogantGender"
              name="gender"
              style={
                validation.includes("gender")
                  ? { boxShadow: "0px 0px 5px 3px rgba(255,0,0,0.75)" }
                  : { boxShadow: "none" }
              }
              value={enteredGender}
              onChange={genderChangeHandler}
              onBlur={() => {
                if (enteredGender !== "") {
                  setValidation((state) =>
                    state.filter((el) => el !== "gender")
                  );
                }
              }}
            >
              <option value="">Elegi un genero</option>
              <option value={"male"}>Hombre</option>
              <option value={"female"}>Mujer</option>
            </select>
          </LabelItem>
        </li>
        <li>
          <LabelItem htmlFor="arrogantPay">
            Nro de Transacción
            <input
              id="arrogantPay"
              name="transferencia"
              type="number"
              style={
                validation.includes("pay")
                  ? { boxShadow: "0px 0px 5px 3px rgba(255,0,0,0.75)" }
                  : { boxShadow: "none" }
              }
              value={enteredPay}
              onChange={payChangeHandler}
              onBlur={() => {
                if (enteredPay !== "") {
                  setValidation((state) => state.filter((el) => el !== "pay"));
                }
              }}
            />
          </LabelItem>
        </li>
        {/* <li>
          <LabelItem>
            Precio
            <select
              id="arrogantPrice"
              name="precio"
              style={
                validation.includes("price")
                  ? { boxShadow: "0px 0px 5px 3px rgba(255,0,0,0.75)" }
                  : { boxShadow: "none" }
              }
              value={enteredPrice}
              onChange={priceChangeHandler}
              onBlur={() => {
                if (enteredPrice !== "") {
                  setValidation((state) =>
                    state.filter((el) => el !== "price")
                  );
                }
              }}
            >
              <option value="">Elegi un precio</option>
              <option value={"3500"}>3500</option>
              <option value={"4000"}>4000</option>
              <option value={"4500"}>4500</option>
              <option
                value={"5000"}
                // style={
                //   suggestedPrice === 5000
                //     ? { backgroundColor: "green" }
                //     : { backgroundColor: "white" }
                // }
                // value="5000"
              >
                5000
              </option>
            </select>
          </LabelItem>
        </li> */}
      </LabelContainer>
      <SubmitButton>Submit</SubmitButton>
    </FormContainer>
  );
};

export default Form;
