import { Form, Formik } from "formik";
import React from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import "./style.css";
import { useState } from "react";
import RegisterInput from "../../../components/inputs/registerInput";
import TextArea from "../../../components/inputs/textarea";
import { toast } from "react-toastify";

import * as Yup from "yup";

import { useNavigate, useLocation } from "react-router-dom";

export default function ExperienceEdit({ setVisible, Id }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const userInfos = {
    companyName: state.companyName,
    role: state.role,
  };
  const [user, setUser] = useState(userInfos);
  const { companyName, role } = user;
  const yearTemp = new Date().getFullYear();
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const registerSubmit = async () => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        `http://localhost:8000/api/users/updateDetailsExperience/${state._id}`,
        {
          companyName,
          role,
        }
      );

      setError("");
      setSuccess(data.message);
      //   const { demo } = await axios.put(
      //     `http://localhost:8000/api/users/updateuser/${Id._id}`,
      //     {
      //       upProfile: Id.upProfile + 1,
      //     }
      //   );
      setTimeout(() => {
        toast("Experience update success");
        setLoading(false);
        navigate("/user", { state: data.user._id });
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      {console.log(Id)}
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
