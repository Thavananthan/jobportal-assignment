import { useEffect, useRef, useState } from "react";
import React from "react";

import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CreatePostPopup({ setVisible, edu, profile, prof }) {
  const navigate = useNavigate();

  return (
    <div className="blur">
      <div className="postBox">
        {prof ? (
          <div style={{ padding: 10, width: "100%" }}>
            <p className="reg_line_header">Phone Number : {profile.mobile}</p>
            <p className="reg_line_header">Email: {profile.email}</p>{" "}
            <button
              className="post_submit"
              onClick={() => {
                setVisible(false);
              }}
            >
              Cancel
            </button>
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
                edu ? navigate("/job") : navigate("/user");
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
