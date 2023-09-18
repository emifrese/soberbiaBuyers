import { FormContainer } from "./FormStyles.js";

import { firestore } from "../../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredID, setEnteredID] = useState("");
  const [enteredPay, setEnteredPay] = useState("");
  const [validation, setValidation] = useState([]);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const surnameChangeHandler = (e) => {
    setEnteredSurname(e.target.value);
  };

  const IDChangeHandler = (e) => {
    setEnteredID(e.target.value.trim());
  };

  const payChangeHandler = (e) => {
    setEnteredPay(e.target.value.trim());
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

    if (enteredID === "") {
      setValidation((state) => {
        if (!state.includes("ID")) {
          return [...state, "ID"];
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

    if (error) {
      return;
    }

    const arrogantRef = collection(firestore, `arrogants`);

    const arrogantData = {
      name: enteredName,
      surname: enteredSurname,
      ID: enteredID,
      pay: enteredPay,
    };

    await addDoc(arrogantRef, arrogantData);

    setEnteredName("");
    setEnteredSurname("");
    setEnteredID("");
    setEnteredPay("");
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <h2>Carga a tu Soberbi@</h2>

      <ul>
        <li>
          <label htmlFor="arrogantName">
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
          </label>
        </li>
        <li>
          <label htmlFor="arrogantSurname">
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
          </label>
        </li>
        <li>
          <label htmlFor="arrogantID">
            <input
              id="arrogantID"
              name="dni"
              type="text"
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
          </label>
        </li>
        <li>
          <label htmlFor="arrogantPay">
            <input
              id="arrogantPay"
              name="transferencia"
              type="text"
              style={
                validation.includes("pay")
                  ? { boxShadow: "0px 0px 5px 3px rgba(255,0,0,0.75)" }
                  : { boxShadow: "none" }
              }
              value={enteredPay}
              onChange={payChangeHandler}
              onBlur={() => {
                if (enteredPay !== "") {
                  setValidation((state) => state.filter((el) => el !== "ID"));
                }
              }}
            />
          </label>
        </li>
      </ul>
      <button>Submit</button>
    </FormContainer>
  );
};

export default Form;
