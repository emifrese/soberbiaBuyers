import { useState } from "react";
import Form from "../../components/Form/Form";
import BackButton from "../../components/UI/BackButton/BackButton";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

const BuyersForm = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((state) => !state);
  };

  return (
    <>
      {modal && (
        <Modal width={"50%"} top={"50%"} left={"50%"} height={"100%"}>
          <Spinner />
        </Modal>
      )}
      <BackButton />
      <Form Toggle={toggleModal} />
    </>
  );
};

export default BuyersForm;
