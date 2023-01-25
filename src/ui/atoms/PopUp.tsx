import ReactModal from "react-modal";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-20%",
    transform: "translate(-50%, -50%)",
  },
};

const PopUp = ({ isOpen, close, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      ariaHideApp={false}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default PopUp;
