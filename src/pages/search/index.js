import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import PopUp from "../../components/Popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  const color = "#65676b";
  const { id } = useParams();

  const { state } = useLocation();
  const [visible, setVisible] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState("");
  const [exp, setExp] = useState([]);
  const [edu, setEdu] = useState([]);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [searchuser, setSearchuser] = useState("");

  async function featchData() {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:8000/api/users/getProfile/${id}`
      );
      setError("");
      setSuccess(data.message);
      setTimeout(() => {
        setUsers(data);
        setExp(data.experience);
        setEdu(data.education);
        setLoading(false);
      }, 4000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  }

  useEffect(() => {
    featchData();
  }, []);

  const onDeleteEdu = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/users/deleteEdu/${id}`
      );
      toast("Education delete successfully!");
      featchData();
    } catch (error) {
      toast(error);
    }
  };

  const onDeleteExp = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/users/deleteExp/${id}`
      );
      toast("Experince delete successfully!");
      featchData();
    } catch (error) {
      toast(error);
    }
  };

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
            {/* <div className="profile_container">
              {!showSearchMenu && (
                <div
                  style={{ width: "40%", marginBottom: 10 }}
                  className="search search1"
                  onClick={() => {
                    setShowSearchMenu(true);
                  }}
                >
                  <Search color={color} />
                  <input
                    type="text"
                    placeholder="Search User"
                    className="hide_input"
                  />
                </div>
              )}
              {showSearchMenu && (
                <SearchMenu
                  color={color}
                  setShowSearchMenu={setShowSearchMenu}
                />
              )}
            </div> */}
            <div className="profile_container">
              <Cover Users={users} featchData={featchData} />
              <ProfielPictureInfos
                Users={users}
                setVisible={setVisible}
                featchData={featchData}
              />
            </div>
            <div>
              <div className="proceeBar_container">
                <div style={{ paddingLeft: 100 }}>
                  <div class="container">
                    {users.upProfile == 1 ? (
                      <ol class="progress-meter">
                        <li class="progress-point done"></li>
                        <li class="progress-point todo"></li>
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
                    ) : users.upProfile >= 4 ? (
                      <ol class="progress-meter">
                        <li class="progress-point done"></li>
                        <li class="progress-point done"></li>
                        <li class="progress-point done"></li>
                        <li class="progress-point done"></li>
                      </ol>
                    ) : null}
                  </div>
                </div>
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
                  <h2 style={{ margin: 10 }}>
                    Education{" "}
                    {/* <div
                      onClick={() => navigate("/edu", { state: users })}
                      className="plus_icon"
                    ></div> */}
                  </h2>
                  <div style={{ margin: 20 }}>
                    <div className="row_line_2">
                      <div className="profile_friend_imgs">
                        <div
                          style={{
                            width: 200,
                            height: 200,
                            backgroundColor: "pink",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={
                              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
                            }
                            alt=""
                            style={{
                              width: 200,
                              height: 200,
                              backgroundColor: "pink",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="row_line_2"
                        style={{
                          marginLeft: 30,
                          marginBottom: 10,
                          minHeight: 200,
                        }}
                      >
                        {edu &&
                          edu.map((x) => (
                            <div
                              style={{
                                borderWidth: 3,
                                padding: 5,
                                borderRadius: 8,
                                height: "100%",
                                boxShadow: "1px 2px 9px #9E9E9E",
                              }}
                            >
                              <div className="row_line_2">
                                <p className="reg_line_header">
                                  School: {x.school}
                                </p>
                                {/* <div
                                  onClick={() =>
                                    navigate("/eduEdit", { state: x })
                                  }
                                  className="edit_icon"
                                ></div>

                                <div
                                  onClick={() => onDeleteEdu(x._id)}
                                  className="trash_icon"
                                ></div> */}
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
                                Activity: {x.activity.slice(0, 40)}
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
                <div>
                  <h2 style={{ margin: 10 }}>
                    Experince{" "}
                    {/* <div
                      onClick={() => navigate("/job", { state: users })}
                      className="plus_icon"
                    ></div> */}
                  </h2>
                  <div style={{ margin: 20 }}>
                    <div className="row_line_2">
                      <div className="profile_friend_imgs">
                        <div
                          style={{
                            width: 200,
                            height: 200,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={
                              "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&h=800"
                            }
                            alt=""
                            style={{
                              width: 200,
                              height: 200,
                              backgroundColor: "pink",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="row_line_2"
                        style={{
                          marginLeft: 30,
                          marginBottom: 10,
                          minHeight: 200,
                        }}
                      >
                        {exp &&
                          exp.map((x) => (
                            <div
                              style={{
                                borderWidth: 3,
                                padding: 10,
                                borderRadius: 8,
                                height: "100%",
                                boxShadow: "1px 2px 9px #9E9E9E",
                              }}
                            >
                              <p className="reg_line_header">
                                Company Name: {x.companyName}
                                {/* <div
                                  onClick={() =>
                                    navigate("/expEdit", { state: x })
                                  }
                                  className="edit_icon"
                                ></div>
                                <div
                                  onClick={() => onDeleteExp(x._id)}
                                  className="trash_icon"
                                ></div> */}
                              </p>
                              <p className="reg_line_header">
                                Role: {x.role.slice(0, 40)}
                              </p>
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
