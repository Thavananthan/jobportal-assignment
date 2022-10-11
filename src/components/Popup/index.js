import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";

import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CreatePostPopup({
  setVisible,
  edu,
  profile,
  prof,
  Id,
  ver,
}) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const onSubmit = async (email) => {
    try {
      console.log(otp, email);
      const { data } = await axios.post(
        `http://localhost:8000/api/users/verify`,
        {
          email,
          otp,
        }
      );

      setTimeout(() => {
        setVisible(false);
        navigate("/edu", { state: data });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
    setVisible(false);
  };

  return (
    <div className="blur">
      <div className="postBox">
        {prof ? (
          <div style={{ padding: 10, width: "100%" }}>
            <h6 style={{ fontWeight: "700" }}>
              Phone Number : {profile.mobile}
            </h6>
            <h6 style={{ fontWeight: "700" }}>Email: {profile.email}</h6>{" "}
            <button
              className="post_submit"
              onClick={() => {
                setVisible(false);
              }}
            >
              Cancel
            </button>
          </div>
        ) : ver ? (
          <div className="box_profile">
            <div style={{ padding: 10, width: "100%" }}>
              <div className="register_form">
                <input
                  type="password"
                  placeholder="enter OTP"
                  name="otp"
                  onChange={(event) => setOtp(event.target.value)}
                />
              </div>
              <button
                className="post_submit"
                onClick={() => {
                  onSubmit(Id.email);
                }}
              >
                submit
              </button>
            </div>
          </div>
        ) : (
          <div className="box_profile">
            <button
              className="post_submit"
              onClick={() => {
                setVisible(false);
              }}
            >
              ADD
            </button>
            <button
              className="post_submit"
              onClick={() => {
                edu
                  ? navigate("/job", { state: Id })
                  : navigate("/user", { state: Id._id });
              }}
            >
              Skip
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
