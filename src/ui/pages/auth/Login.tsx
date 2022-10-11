import { useState } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import OnChangeValidation from "../../../functions/OnChangeValidation";
import CustomInput from "../../atoms/Input";
import { useNavigate } from "react-router-dom";
// auth context
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { loginSchema } from "../../../config/schema/authSchema";
var CryptoJS = require("crypto-js");
type data = {
  email: string;
  password: string;
};

const Login = () => {
  // auth hook
  const {
    login,
    rememberMe,
    setRememberMe,
    rememberMeData,
    setRememberMeData,
  } = useAuth();
  const navigate = useNavigate();
  const { handleActiveValidation, activeValidation } = OnChangeValidation();
  // state for loading
  const [loading, setLoading] = useState(false);
  // function to submit form
  const handleSubmit = async (data: data) => {
    // make login button loading
    setLoading(true);
    const res = await login(data.email, data.password);
    if (res.success) {
      toast.dismiss();
      toast.success(res.message);
      // navigate("/dashboard");
      if (res.role === "super admin") {
        navigate("/dashboard/super-admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      toast.dismiss();
      toast.error(res.message);
    }
    // if remember me check is checked than store email and password on localStorage
    if (rememberMe) {
      // Encrypt
      var encryptedPassword = CryptoJS.AES.encrypt(
        JSON.stringify(data.password),
        "#Cliff",
        { outputLength: 224 }
      ).toString();
      setRememberMeData({ email: data.email, password: encryptedPassword });
    } else {
      setRememberMeData({ email: "", password: "" });
    }
    // stop login button loading
    setLoading(false);
  };
  // Decrypt password which saved to local storage
  if (rememberMeData.password) {
    var bytes = CryptoJS.AES.decrypt(rememberMeData.password, "#Cliff");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  const inputEmail = rememberMeData ? rememberMeData.email : "";
  const inputPassword = rememberMeData ? decryptedData : "";
  return (
    <section className="login_page_section">
      <Formik
        initialValues={{ email: inputEmail, password: inputPassword }}
        validateOnChange={activeValidation}
        validateOnBlur={activeValidation}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ errors, values, handleChange, handleSubmit }) => {
          return (
            <div>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <div className="input_group mb-4">
                  <CustomInput
                    label="Email"
                    placeholder="Enter your email"
                    error={errors.email === undefined ? false : true}
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                  />
                  <small className="input_suggestion_error">
                    {errors.email}
                  </small>
                </div>
                <div className="input_group mb-3">
                  <CustomInput
                    label="Password"
                    variant="password"
                    placeholder="xxxxxxx"
                    error={errors.password === undefined ? false : true}
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <small className="input_suggestion_error">
                    {errors.password}
                  </small>
                </div>
                <div className="input_group mb-4 rememberMe_ForgetPassword_box ">
                  <div className="remember_me">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      value="true"
                      id="rememberme"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="rememberme" className="ps-2">
                      Remember Me
                    </label>
                  </div>
                  <div className="remember_me forgetPassword">
                    <Link to="/verify-email">Forget Password ?</Link>
                  </div>
                </div>
                <Button
                  type="submit"
                  onClick={handleActiveValidation}
                  loading={loading}
                >
                  Login
                </Button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </section>
  );
};

export default Login;
