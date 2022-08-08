import { Form, Formik } from "formik";
import "./style.css";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

export default function Application() {
  const navigate = useNavigate();
  const userInfos = {
    account_name: "",
    company_name: "",
    position: "",
    open_date: "",
    close_date: "",
  };

  const [user, setUser] = useState(userInfos);
  const { account_name, company_name, position, open_date, close_date } = user;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const registerSubmit = async () => {
    navigate("/job");
    // try {
    //   const { data } = await axios.post(
    //     `${process.env.REACT_APP_BACKEND_URL}/users/register`,
    //     {
    //       first_name,
    //       last_name,
    //       email,
    //       password,
    //       bYear,
    //       bMonth,
    //       bDay,
    //       gender,
    //     }
    //   );
    //   setError("");
    //   setSuccess(data.message);
    //   const { message, ...rest } = data;
    //   setTimeout(() => {
    //     dispatch({ type: "LOGIN", payload: rest });
    //     Cookies.set("user", JSON.stringify(rest));
    //     navigate("/");
    //   }, 2000);
    // } catch (error) {
    //   setLoading(false);
    //   setSuccess("");
    //   setError(error.response.data.message);
    // }
  };

  return (
    <div>
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            account_name,
            company_name,
            position,
            open_date,
            close_date,
          }}
          // validationSchema={registerValidation}
          onSubmit={() => {
            registerSubmit();
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="register_body">
                <div className="reg_line">
                  <div style={{ width: 400, marginTop: 20 }}>
                    <h4>Employer Account Name</h4>
                  </div>

                  <RegisterInput
                    type="text"
                    name="account_name"
                    onChange={handleRegisterChange}
                    view={false}
                  />
                </div>
                <div className="reg_line">
                  <div
                    style={{
                      width: 400,
                      marginTop: 20,
                    }}
                  >
                    <h4>Company Name</h4>
                  </div>

                  <RegisterInput
                    type="text"
                    name="company_name"
                    onChange={handleRegisterChange}
                    view={false}
                  />
                </div>
                <div className="reg_line">
                  <div
                    style={{
                      width: 400,
                      marginTop: 20,
                    }}
                  >
                    <h4>Position Calling for</h4>
                  </div>

                  <RegisterInput
                    type="text"
                    name="position"
                    onChange={handleRegisterChange}
                    view={false}
                  />
                </div>
                <div className="reg_line">
                  <div
                    style={{
                      width: 400,
                      marginTop: 20,
                    }}
                  >
                    <h4>Application open Date</h4>
                  </div>

                  <RegisterInput
                    type="text"
                    name="open_date"
                    onChange={handleRegisterChange}
                    view={false}
                  />
                </div>
                <div className="reg_line">
                  <div
                    style={{
                      width: 400,
                      marginTop: 20,
                    }}
                  >
                    <h4>Application closing Date</h4>
                  </div>

                  <RegisterInput
                    type="text"
                    name="close_date"
                    onChange={handleRegisterChange}
                    view={false}
                  />
                </div>
              </div>

              <div className="reg_btn_wrapper">
                <button className="light_blue_btn open_signup">
                  ADD APPLICATION
                </button>
              </div>

              <div className="reg_btn_wrapper">
                <button className="light_blue_btn open_signup">PUBLISH</button>
              </div>

              {error && <div className="error_text">{error}</div>}
              {success && <div className="success_text">{success}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
