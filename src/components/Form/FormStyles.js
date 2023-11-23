import { styled } from "styled-components";

export const FormContainer = styled.form`
  width: 80%;
  /* background: red; */
  /* height: 90%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;

  li {
    list-style: none;
  }
`;

export const LabelItem = styled.label`
  display: flex;
  flex-direction: column;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    -moz-appearance: textfield; /* Firefox */
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 0.75rem;
  width: 50%;
  background-color: #bffc3f;
  border-radius: 0.5rem;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  color: #000
`
