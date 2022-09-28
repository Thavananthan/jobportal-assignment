import { useEffect, useRef, useState } from "react";
import React from "react";

import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CreatePostPopup({
  setVisible,
  edu,
  profile,
  prof,
  Id,
}) {
  const navigate = useNavigate();

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
