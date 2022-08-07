import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <h5>* indicates required</h5> <br />
          <Cover />
          <ProfielPictureInfos />
        </div>
        <div className="login">
          <RegisterForm setVisible={true} />
        </div>
      </div>
    </div>
  );
}
