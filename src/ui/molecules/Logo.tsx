import image from "../../config/constant/Image";
const Logo = () => {
  return (
    <section className="logo_section">
      <div className="d-flex flex-column gap-2 align-items-center justify-content-center">
        <img src={image.logoPrimary} alt="logo" />
        <div className="title">
          United Nations Development Programme
          <br />
          Forestry MIS
        </div>
      </div>
    </section>
  );
};

export default Logo;
