import { FormContainer } from './FormStyles.js'

const Form = () => {
  return (
    <FormContainer>
      <h2>Carga a tu Soberbi@</h2>

      <ul>
        <li>
          <label htmlFor="arrogantName">
            <input id="arrogantName" name="name" type="text" />
          </label>
        </li>
        <li>
          <label htmlFor="arrogantSurname">
            <input id="arrogantSurname" name="surname" type="text" />
          </label>
        </li>
        <li>
          <label htmlFor="arrogantID">
            <input id="arrogantID" name="dni" type="text" />
          </label>
        </li>
        <li>
          <label htmlFor="arrogantPay">
            <input id="arrogantPay" name="transferencia" type="text" />
          </label>
        </li>
      </ul>
      <button>Submit</button>
    </FormContainer>
  );
};

export default Form;
