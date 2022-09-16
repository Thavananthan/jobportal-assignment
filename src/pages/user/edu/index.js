import { Form, Formik } from "formik";
import React from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

import "./style.css";
import { useState } from "react";
import RegisterInput from "../../../components/inputs/registerInput";
import DateOfBirthSelect from "./DateOfBirthSelect";
import TextArea from "../../../components/inputs/textarea";
import { toast } from "react-toastify";

import * as Yup from "yup";

import { useNavigate, useLocation } from "react-router-dom";

export default function EducationEdit({ setVisible, Id }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const userInfos = {
    school: state.school,
    degree: state.degree,
    fstudy: state.fstudy,
    sYear: state.sYear,
    sMonth: state.sMonth,
    eYear: state.eYear,
    eMonth: state.eMonth,
    grade: "",
    activity: state.activity,
  };
  const [user, setUser] = useState(userInfos);
  const {
    school,
    degree,
    fstudy,
    sYear,
    sMonth,
    eYear,
    eMonth,
    grade,
    activity,
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
    try {
      setLoading(true);
      const { data } = await axios.put(
        `http://localhost:8000/api/users/updateDetailsEducation/${state._id}`,
        {
          school,
          degree,
          fstudy,
          sYear,
          sMonth,
          eYear,
          eMonth,
          grade,
          activity,
        }
      );
      setError("");
      setSuccess(data.message);

      setTimeout(async () => {
        // const { data } = await axios.put(
        //   `http://localhost:8000/api/users/updateuser/${Id.id}`,
        //   {
        //     upProfile: Id.upProfile + 1,
        //   }
        // );
        toast("user education update success");
        setLoading(false);
        navigate("/user", { state: data.user._id });
      }, 4000);
    } catch (error) {
      setSuccess("");
      toast(error);
      setError(error);
    }
  };
  return (
    <div>
      {console.log(state)}
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            school,
            degree,
            fstudy,
            sYear,
            sMonth,
            eYear,
            eMonth,
            grade,
            activity,
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
                  name="fstudy"
                  onChange={handleRegisterChange}
                  view={false}
                  wd={true}
                />
              </div>
              <div className="reg_col" style={{ marginLeft: "20%" }}>
                <div className="reg_line_header"> *Start Date</div>
                <div className="reg_line_1">
                  <DateOfBirthSelect
                    bYear={sYear}
                    years={years}
                    name="sYear"
                    handleRegisterChange={handleRegisterChange}
                    yea={true}
                    //   dateError={dateError}
                  />
                  <DateOfBirthSelect
                    bYear={sMonth}
                    months={months}
                    name="sMonth"
                    handleRegisterChange={handleRegisterChange}
                    mon={true}
                    //   dateError={dateError}
                  />
                </div>
              </div>
              <div className="reg_col" style={{ marginLeft: "20%" }}>
                <div className="reg_line_header"> *End Date (Optional)</div>
                <div className="reg_line_1">
                  <DateOfBirthSelect
                    bYear={eYear}
                    months={months}
                    years={years}
                    name="eYear"
                    handleRegisterChange={handleRegisterChange}
                    yea={true}
                    //   dateError={dateError}
                  />
                  <DateOfBirthSelect
                    bYear={eMonth}
                    months={months}
                    years={years}
                    name="eMonth"
                    handleRegisterChange={handleRegisterChange}
                    mon={true}
                    //   dateError={dateError}
                  />
                </div>
              </div>
              <div className="reg_line">
                <TextArea
                  type="textarea"
                  placeholder="activity and societies"
                  name="activity"
                  onChange={handleRegisterChange}
                  view={false}
                  wd={true}
                />
              </div>

              <div className="reg_btn_wrapper">
                <button className="light_blue_btn open_signup">Update</button>
              </div>

              <DotLoader color="#1876f2" loading={loading} size={30} />
              {error && <div className="error_text">{error}</div>}
              {success && <div className="success_text">{success}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
