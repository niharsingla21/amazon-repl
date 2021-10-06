import { Field, Form, Formik } from "formik";
import * as yup from "yup";

const handleSubmit = (data, setSubmitting, props) => {
  setSubmitting(true);
  console.log(data.email);
  setSubmitting(false);
  props.history.push("/signUp");
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Please enter a valid password")
    .min(8)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export const Login = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className="div-signin-main">
            <Form>
              <div className="div-signin-main-for-1">
                <div className="div-signin-back-2">
                  <div className="hand-cursor div-signin-back-2-for">
                    <i className="a-icon-ama"></i>
                    <div className="a-icon-in"></div>
                  </div>
                </div>
                <div className="div-signin-back-1">
                  <div className="div-signin">
                    <div className="div-signin-for-1">
                      <div className="div-signin-for-2">
                        <div className="div-signin-for-3">
                          <h1 className="div-signin-head">Sign-In</h1>
                          <label className="div-signin-head-label">
                            Email or mobile phone number
                          </label>
                          <Field
                            className="div-signin-txt-box"
                            type="email"
                            name="email"
                          />
                        </div>
                        <div className="div-signin-main-for-1">
                          <div>
                            <button className="hand-cursor div-signin-sub-btn">
                              Continue
                            </button>
                          </div>
                          <div className="div-signin-terms">
                            By continuing, you agree to Amazon's
                            <a className="a-terms-1" href="/">
                              Conditions of Use
                            </a>
                            and
                            <a className="a-terms-2" href="/">
                              Privacy Notice
                            </a>
                            .
                          </div>
                        </div>
                        <div className="div-main-3">
                          <div className="div-main-3-for-1">
                            <div>
                              <div className="a-icon a-icon-right-arrow"></div>
                            </div>
                            <a className="a-div-main-3" href="/">
                              <span class="a-expander-prompt">Need help?</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-signin-2-div">
                <hr></hr>
                <h6 className="div-signin-2-div-h6">New to Amazon?</h6>
              </div>
              <div className="div-main-4">
                <button className="div-signin-3-btn">
                  Create your Amazon account
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
