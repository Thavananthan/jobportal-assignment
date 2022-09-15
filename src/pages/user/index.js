import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import PopUp from "../../components/Popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import { useLocation } from "react-router-dom";

export default function User() {
  const { state } = useLocation();
  const [visible, setVisible] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState("");
  const [exp, setExp] = useState([]);
  const [edu, setEdu] = useState([]);
  const demo = [
    { id: "12", name: "demooo" },
    { id: "12", name: "demooo" },
  ];

  useEffect(async () => {
    console.log(state);
    try {
      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:8000/api/users/getProfile/${state}`
      );
      setError("");
      setSuccess(data.message);
      setTimeout(() => {
        setUsers(data);
        setExp(data.experience);
        setEdu(data.education);
      }, 4000);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    to;
  }, []);

  return (
    <div className="profile">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {visible && <PopUp setVisible={setVisible} profile={users} prof={true} />}

      <div className="profile_top">
        {loading ? (
          <center>
            <DotLoader color="#1876f2" loading={loading} size={100} />
          </center>
        ) : (
          <>
            <div className="profile_container">
              {console.log(users)}
              <Cover Users={users} />
              <ProfielPictureInfos Users={users} setVisible={setVisible} />
            </div>
            <div className="login">
              <div class="container">
                {users.upProfile == 1 ? (
                  <ol class="progress-meter">
                    <li class="progress-point done"></li>
                    <li class="progress-point todo"></li>
                    <li class="progress-point todo"></li>
                    <li class="progress-point todo"></li>
                  </ol>
                ) : users.upProfile == 2 ? (
                  <ol class="progress-meter">
                    <li class="progress-point done"></li>
                    <li class="progress-point done"></li>
                    <li class="progress-point todo"></li>
                    <li class="progress-point todo"></li>
                  </ol>
                ) : users.upProfile == 3 ? (
                  <ol class="progress-meter">
                    <li class="progress-point done"></li>
                    <li class="progress-point done"></li>
                    <li class="progress-point done"></li>
                    <li class="progress-point todo"></li>
                  </ol>
                ) : users.upProfile == 4 ? (
                  <ol class="progress-meter">
                    <li class="progress-point done"></li>
                    <li class="progress-point done"></li>
                    <li class="progress-point done"></li>
                    <li class="progress-point done"></li>
                  </ol>
                ) : null}
              </div>
              <div className="profile_body">
                <div className="login">
                  <h2 style={{ margin: 10 }}>About</h2>
                  <div style={{ margin: 20 }}>
                    <p className="reg_line_header">{users.bio}</p>
                  </div>
                </div>
              </div>{" "}
              <br />
              <div className="profile_body">
                <div className="login">
                  <h2 style={{ margin: 10 }}>Education</h2>
                  <div style={{ margin: 20 }}>
                    <div className="row_line_2">
                      <div className="profile_friend_imgs">
                        <img
                          src={
                            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                          }
                          alt=""
                        />
                      </div>
                      <div className="row_line_2" style={{ marginLeft: 30 }}>
                        {edu &&
                          edu.map((x) => (
                            <div>
                              <div className="row_line_2">
                                <p className="reg_line_header">
                                  School: {x.school}
                                </p>
                                <div className="delete_icon"></div>
                              </div>
                              <p className="reg_line_header">
                                Degree: {x.degree}
                              </p>{" "}
                              <p className="reg_line_header">
                                fstudy: {x.fstudy}
                              </p>{" "}
                              <p className="reg_line_header">
                                Start Date: {x.sYear} / {x.sMonth}
                              </p>{" "}
                              <p className="reg_line_header">
                                End Date: {x.eYear} / {x.eMonth}
                              </p>{" "}
                              <p className="reg_line_header">
                                Activity: {x.activity}
                              </p>{" "}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <br />
              <div className="profile_body">
                <div className="login">
                  <h2 style={{ margin: 10 }}>Experince</h2>
                  <div style={{ margin: 20 }}>
                    <div className="row_line_2">
                      <div className="profile_friend_imgs">
                        <img
                          src={
                            "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                          }
                          alt=""
                        />
                      </div>
                      <div className="row_line_2" style={{ marginLeft: 30 }}>
                        {exp &&
                          exp.map((x) => (
                            <div>
                              <p className="reg_line_header">
                                Company Name: {x.companyName}
                              </p>
                              <p className="reg_line_header">Role: {x.role}</p>{" "}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
