import { Form, Formik } from "formik";
import "./style.css";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import DateOfBirthSelect from "./DateOfBirthSelect";
import TextArea from "../inputs/textarea";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

export default function Education({ setVisible }) {
  const navigate = useNavigate();
  const userInfos = {
    school: "",
    degree: "",
    field_of_study: "",
    start_y: new Date().getFullYear(),
    start_m: new Date().getMonth() + 1,
    end_y: new Date().getFullYear(),
    end_m: new Date().getFullYear(),
    grade: "",
    activities: "",
  };
  const [user, setUser] = useState(userInfos);
  const {
    school,
    degree,
    field_of_study,
    start_y,
    start_m,
    end_y,
    end_m,
    grade,
    activities,
  } = user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const years = Array.from(new Array(108), (val, index) => yearTemp - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
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
            school,
            degree,
            field_of_study,
            start_y,
            start_m,
            end_y,
            end_m,
            grade,
            activities,
          }}
          // validationSchema={registerValidation}
          onSubmit={() => {
            registerSubmit();
          }}
        >
          {(formik) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  label="School"
                  placeholder="Ex: Curtin Uni"
                  name="school"
                  onChange={handleRegisterChange}
                  view={false}
                  wd={true}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  label="Degree"
                  placeholder="Ex: Bachelor"
                  name="degree"
                  onChange={handleRegisterChange}
                  view={false}
                  wd={true}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  label="Field of Study"
                  placeholder="Ex: Computing"
                  name="field_of_study"
                  onChange={handleRegisterChange}
                  view={false}
                  wd={true}
                />
              </div>
              <div className="reg_col" style={{ marginLeft: "16%" }}>
                <div className="reg_line_header"> *Start Date</div>
                <div className="reg_line_1">
                  <DateOfBirthSelect
                    bYear={start_y}
                    months={months}
                    years={years}
                    handleRegisterChange={handleRegisterChange}
                    yea={true}
                    //   dateError={dateError}
                  />
                  <DateOfBirthSelect
                    bYear={start_y}
                    months={months}
                    years={years}
                    handleRegisterChange={handleRegisterChange}
                    mon={true}
                    //   dateError={dateError}
                  />
                </div>
              </div>
              <div className="reg_col" style={{ marginLeft: "16%" }}>
                <div className="reg_line_header"> *End Date (Optional)</div>
                <div className="reg_line_1">
                  <DateOfBirthSelect
                    bYear={start_y}
                    months={months}
                    years={years}
                    handleRegisterChange={handleRegisterChange}
                    yea={true}
                    //   dateError={dateError}
                  />
                  <DateOfBirthSelect
                    bYear={start_y}
                    months={months}
                    years={years}
                    handleRegisterChange={handleRegisterChange}
                    mon={true}
                    //   dateError={dateError}
                  />
                </div>
              </div>
              <div className="reg_line">
                <TextArea
                  type="textarea"
                  placeholder="Activities and societies"
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
