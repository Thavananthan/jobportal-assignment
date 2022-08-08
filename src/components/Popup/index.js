import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CreatePostPopup({ setVisible, edu }) {
  const navigate = useNavigate();

  return (
    <div className="blur">
      <div className="postBox">
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
      </div>
    </div>
  );
}
