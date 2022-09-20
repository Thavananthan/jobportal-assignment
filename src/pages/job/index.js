import React from "react";
import "./style.css";
import { useState } from "react";
import Experience from "../../components/experience/Experience";
import PopUp from "../../components/Popup";
import { useLocation } from "react-router-dom";

export default function Job() {
  const [visible, setVisible] = useState(true);
  const { state } = useLocation();

  return (
    <div className="profile">
      {console.log(state)}
      {visible && <PopUp setVisible={setVisible} Id={state} />}
      <div className="profile_top">
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <div className="login">
            <h1>Experience</h1>
            <Experience Id={state} />
          </div>
        </div>
      </div>
    </div>
  );
}
