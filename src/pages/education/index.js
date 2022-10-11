import React from "react";
import "./style.css";
import { useState } from "react";
import Educations from "../../components/education/Education";
import PopUp from "../../components/Popup";
import { useLocation } from "react-router-dom";

export default function Education() {
  const [visible, setVisible] = useState(true);
  const { state } = useLocation();

  return (
    <div className="profile">
      {visible && <PopUp setVisible={setVisible} edu={true} Id={state} />}
      <div className="profile_top">
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <div className="login">
            <h1>Education</h1>
            <Educations Id={state} />
          </div>
        </div>
      </div>
    </div>
  );
}
