import { useEffect, useRef, useState } from "react";
import React from "react";

import "./style.css";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../inputs/textarea/index";

export default function CreatePostPopup({
  setVisible,
  edu,
  profile,
  prof,
  Id,
}) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  return (
    <div className="blur">
      <div className="postBox">
        <div style={{ padding: 10, width: "100%", backgroundColor: "pink" }}>
          <RegisterInput
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setOtp(e)}
            view={false}
          />
          <button
            className="post_submit"
            onClick={() => {
              setVisible(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
