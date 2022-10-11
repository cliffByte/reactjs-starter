import { useState } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import OnChangeValidation from "../../../functions/OnChangeValidation";
import CustomInput from "../../atoms/Input";
import { useNavigate } from "react-router-dom";
import { verifyEmailSchema } from "../../../config/schema/authSchema";
import { IoArrowBackOutline } from "react-icons/io5";

type data = {
  email: string;
};

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { handleActiveValidation, activeValidation } = OnChangeValidation();
  // state for loading
  const [loading, setLoading] = useState(false);
  // function to submit form
  const handleSubmit = async (data: data) => {
    // make login button loading
    setLoading(true);
    // navigate to verify otp page
    navigate("/verify-otp");
    // stop login button loading
    setLoading(false);
  };

  return (
    <section className="login_page_section">
      <Formik
        initialValues={{ email: "" }}
        validateOnChange={activeValidation}
        validateOnBlur={activeValidation}
        onSubmit={handleSubmit}
        validationSchema={verifyEmailSchema}
      >
        {({ errors, values, handleChange, handleSubmit }) => {
          return (
            <div>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <div className="input_group mb-4">
                  <CustomInput
                    label="Verify your email"
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

                <Button
                  type="submit"
                  onClick={handleActiveValidation}
                  loading={loading}
                >
                  Verify
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

export default ForgetPassword;
