import React, { useState } from "react";
import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";
import PopUp from "../../components/Popup";

export default function Profile() {
  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");
  const [visible, setVisible] = useState(false);
  const [userDate, setUserDate] = useState(null);

  return (
    <div className="profile">
      <div className="profile_top">
        {visible && <PopUp setVisible={setVisible} ver={true} Id={userDate} />}
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <Cover setCover={setCover} />
          <ProfielPictureInfos setProfile={setProfile} />
        </div>
        <div className="login">
          <RegisterForm
            setVisible={setVisible}
            cover={cover}
            profile={profile}
            setUserDate={setUserDate}
          />
        </div>
      </div>
    </div>
  );
}
