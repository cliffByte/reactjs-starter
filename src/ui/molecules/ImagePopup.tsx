import PopUp from "../atoms/PopUp";

const ImagePopup = ({ popupState, imageSrc }) => {
  //popup states
  const [isPopupOpen, setIsPopupOpen] = popupState;

  return (
    <PopUp close={() => setIsPopupOpen(false)} isOpen={isPopupOpen}>
      <>
        <div
          className="d-flex justify-content-center pull-right text-danger"
          style={{
            position: "sticky",
            top: "-5px",
            right: "-5px",
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            border: "1px solid",
            background: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          x
        </div>
        <div className="popUp_Image">
          <img crossOrigin="anonymous" src={imageSrc} alt="popup img" />
        </div>
      </>
    </PopUp>
  );
};

export default ImagePopup;
