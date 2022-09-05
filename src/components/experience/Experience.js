import { Form, Formik } from "formik";
import React from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import "./style.css";
import { useState } from "react";
import RegisterInput from "../inputs/registerInput";
import TextArea from "../inputs/textarea";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

export default function Experience({ setVisible, Id }) {
  const navigate = useNavigate();
  const userInfos = {
    companyName: "",
    role: "",
  };
  const [user, setUser] = useState(userInfos);
  const { companyName, role } = user;
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
    companyName: Yup.string().required("company name required"),
    role: Yup.string().required(" describe your role or experience required"),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const registerSubmit = async () => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        `http://localhost:8000/api/users/updateDetailsExperience/${Id}`,
        {
          jobs: {
            companyName,
            role,
          },
        }
      );
      setError("");
      setSuccess(data.message);
      setTimeout(() => {
        navigate("/user", { state: Id });
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            companyName,
            role,
          }}
          //validationSchema={registerValidation}
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
                  name="companyName"
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
                  name="role"
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
