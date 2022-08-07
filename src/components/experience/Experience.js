import { Form, Formik } from "formik";
import "./style.css";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import TextArea from "../inputs/textarea";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

export default function Experience({ setVisible }) {
  const navigate = useNavigate();
  const userInfos = {
    company_name: "",
    role: "",
  };
  const [user, setUser] = useState(userInfos);
  const { company_name, role } = user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {};
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  const registerValidation = Yup.object({
    company_name: Yup.string().required("company name required"),
    role: Yup.string().required(" describe your role or experience required"),
  });

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
            company_name,
            role,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            registerSubmit();
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Company Name"
                  name="company_name"
                  label="Company Name"
                  onChange={handleRegisterChange}
                  view={false}
                  wd={true}
                />
              </div>
              <div className="reg_line">
                <TextArea
                  type="textarea"
                  placeholder="Descripe Your role"
                  name="bio"
                  onChange={handleRegisterChange}
                  view={false}
                  wd={true}
                />
              </div>

              <div className="reg_btn_wrapper">
                <button className="light_blue_btn open_signup">Save</button>
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
