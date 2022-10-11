import { Outlet } from "react-router-dom";
import Logo from "../molecules/Logo";

const AuthTemplate = () => {
  return (
    <section className="auth_template_section">
      <div className="container">
        <div className="row center w-100">
          <div className="col-lg-5 col-md-8 col-12">
            <Logo />
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthTemplate;
