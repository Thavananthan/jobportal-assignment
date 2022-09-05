import React from "react";
import "./style.css";
import Applications from "../../components/application/Application";
export default function Application() {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <div className="login">
            <h1>TIME HIRE THE BEST</h1> <br />
            <Applications />
          </div>
        </div>
      </div>
    </div>
  );
}
