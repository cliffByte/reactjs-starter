import { useState } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import OnChangeValidation from "../../../functions/OnChangeValidation";
import CustomInput from "../../atoms/Input";
import { useNavigate } from "react-router-dom";
import { resetPasswordSchema } from "../../../config/schema/authSchema";
import { IoArrowBackOutline } from "react-icons/io5";

type data = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const { handleActiveValidation, activeValidation } = OnChangeValidation();
  // state for loading
  const [loading, setLoading] = useState(false);
  // function to submit form
  const handleSubmit = async (data: data) => {
    // make login button loading
    setLoading(true);
    // navigate to verify otp page
    navigate("/");
    // stop login button loading
    setLoading(false);
  };

  return (
    <section className="login_page_section">
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validateOnChange={activeValidation}
        validateOnBlur={activeValidation}
        onSubmit={handleSubmit}
        validationSchema={resetPasswordSchema}
      >
        {({ errors, values, handleChange, handleSubmit }) => {
          return (
            <div>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <div className="input_group mb-4">
                  <CustomInput
                    variant="password"
                    label="New Password"
                    placeholder="xxxxxx"
                    error={errors.password === undefined ? false : true}
                    onChange={handleChange}
                    name="password"
                    value={values.password}
                  />
                  <small className="input_suggestion_error">
                    {errors.password}
                  </small>
                </div>
                <div className="input_group mb-4">
                  <CustomInput
                    variant="password"
                    label="Confirm Password"
                    placeholder="xxxxxx"
                    error={errors.confirmPassword === undefined ? false : true}
                    onChange={handleChange}
                    name="confirmPassword"
                    value={values.confirmPassword}
                  />
                  <small className="input_suggestion_error">
                    {errors.confirmPassword}
                  </small>
                </div>

                <Button
                  type="submit"
                  onClick={handleActiveValidation}
                  loading={loading}
                >
                  Reset Password
                </Button>
              </Form>
              <div className="py-2"></div>
              <div className="back_to_login">
                <IoArrowBackOutline /> Back to <Link to="/">Login</Link>
              </div>
            </div>
          );
        }}
      </Formik>
    </section>
  );
};

export default ResetPassword;
