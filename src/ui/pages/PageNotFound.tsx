// react-icon
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="notFound_section">
        <div className="d-flex">
          <div className="notFound_title">4</div>
          <div className="notFound_title">0</div>
          <div className="notFound_title">4</div>
        </div>
        <div className="pageNotFound_text">
          <span className="primary_color"> oops !</span> page not found
        </div>
        <div className="pageNotFound_description">
          The Page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </div>
        <div className="pt-4"></div>
        <Button onClick={() => navigate(-1)}>
          <IoArrowBack /> &nbsp; Go Back
        </Button>
      </div>
    </>
  );
};

export default PageNotFound;
