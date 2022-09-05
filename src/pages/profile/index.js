import React, { useState } from "react";
import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";

export default function Profile() {
  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");

  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <Cover setCover={setCover} />
          <ProfielPictureInfos setProfile={setProfile} />
        </div>
        <div className="login">
          <RegisterForm setVisible={true} cover={cover} profile={profile} />
        </div>
      </div>
    </div>
  );
}
