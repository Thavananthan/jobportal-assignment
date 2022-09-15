import { Form, Formik } from "formik";
import React from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

import "./style.css";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import DateOfBirthSelect from "./DateOfBirthSelect";
import TextArea from "../inputs/textarea";
import { toast } from "react-toastify";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

export default function Education({ setVisible, Id }) {
  const navigate = useNavigate();
  const userInfos = {
    school: "",
    degree: "",
    fstudy: "",
    sYear: new Date().getFullYear(),
    sMonth: new Date().getMonth() + 1,
    eYear: new Date().getFullYear(),
    eMonth: new Date().getFullYear(),
    grade: "",
    activity: "",
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
      const { data } = await axios.post(
        `http://localhost:8000/api/users/createEduc`,
        {
          school: school,
          degree: degree,
          fstudy: fstudy,
          sYear: sYear,
          sMonth: sMonth,
          eYear: eYear,
          eMonth: eMonth,
          grade: grade,
          activity: activity,
          user: Id.id,
        }
      );
      setError("");
      setSuccess(data.message);

      setTimeout(async () => {
        const { data } = await axios.put(
          `http://localhost:8000/api/users/updateuser/${Id.id}`,
          {
            upProfile: Id.upProfile + 1,
          }
        );
        toast("user education sucees");
        setLoading(false);
        navigate("/job", { state: data });
      }, 4000);
    } catch (error) {
      setSuccess("");
      toast(error);
      setError(error);
    }
  };
  return (
    <div>
      {console.log(Id.id)}
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
              <div className="reg_col" style={{ marginLeft: "16%" }}>
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
              <div className="reg_col" style={{ marginLeft: "16%" }}>
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
                <button className="light_blue_btn open_signup">Save</button>
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
