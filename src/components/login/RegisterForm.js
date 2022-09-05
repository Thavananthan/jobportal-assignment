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
export default function RegisterForm({ setVisible, cover, profile }) {
  const navigate = useNavigate();
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location: "",
    bio: "",
  };
  const [user, setUser] = useState(userInfos);
  const { first_name, last_name, email, mobile, location, bio } = user;
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
    first_name: Yup.string()
      .required("What's your First name ?")
      .min(2, "Fisrt name must be between 2 and 16 characters.")
      .max(16, "Fisrt name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    last_name: Yup.string()
      .required("What's your Last name ?")
      .min(2, "Last name must be between 2 and 16 characters.")
      .max(16, "Last name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required("Enter a valid email address")
      .email("Enter a valid email address."),
    mobile: Yup.string().required("phone number required"),
    location: Yup.string().required("location required"),
    bio: Yup.string().required("bio required"),
  });
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const registerSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `http://localhost:8000/api/users/register`,
        {
          first_name,
          last_name,
          email,
          location,
          mobile,
          bio,
          picture: profile,
          cover,
        }
      );
      setError("");
      setSuccess(data.message);
      setTimeout(() => {
        navigate("/edu", { state: data.id });
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
            first_name,
            last_name,
            email,
            mobile,
            location,
            bio,
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
                  placeholder="First name"
                  name="first_name"
                  onChange={handleRegisterChange}
                  view={false}
                />
                <RegisterInput
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleRegisterChange}
                  view={false}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleRegisterChange}
                  view={false}
                />
                <RegisterInput
                  type="text"
                  placeholder="Contact Number"
                  name="mobile"
                  onChange={handleRegisterChange}
                  view={false}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  type="text"
                  placeholder="Locations"
                  name="location"
                  onChange={handleRegisterChange}
                  view={false}
                />
                <RegisterInput
                  type="text"
                  placeholder="Locations"
                  name="location"
                  onChange={handleRegisterChange}
                  view={true}
                />
              </div>
              <div className="reg_line">
                <TextArea
                  type="textarea"
                  placeholder="tell who you are"
                  name="bio"
                  onChange={handleRegisterChange}
                  view={false}
                />
              </div>

              <div className="reg_btn_wrapper">
                <button className="light_blue_btn open_signup">Create</button>
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
