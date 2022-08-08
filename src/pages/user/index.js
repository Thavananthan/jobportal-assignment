import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";

export default function User() {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <Cover />
          <ProfielPictureInfos />
        </div>
        <div className="login">
          <div class="container">
            <ol class="progress-meter">
              <li class="progress-point done"></li>
              <li class="progress-point done"></li>
              <li class="progress-point done"></li>
              <li class="progress-point todo"></li>
            </ol>
          </div>
          <div className="profile_body">
            <div className="login">
              <h2 style={{ margin: 10 }}>About</h2>
              <div style={{ margin: 20 }}>
                <p className="reg_line_header">
                  Award-winning web developer and instructor with 10+ years’ of
                  well-rounded experience in LAMP development, object-oriented
                  and user-centered design, seeks a position with a top
                  technology firm. Award-winning web developer and instructor
                  with 10+ years’ of well-rounded experience in LAMP
                  development. Award-winning web developer and instructor with
                  10+ years’ of well-rounded experience in LAMP development,
                  object-oriented and user-centered design, seeks a position
                  with a top technology firm. Award-winning web developer and
                  instructor with 10+ years’ of well-rounded experience in LAMP
                  development. Award-winning web developer and instructor with
                  10+ years’ of well-rounded experience in LAMP development,
                  object-oriented and user-centered design, seeks a position
                  with a top technology firm. Award-winning web developer and
                  instructor with 10+ years’ of well-rounded experience in LAMP
                  development.
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="profile_body">
            <div className="login">
              <h2 style={{ margin: 10 }}>Education</h2>
              <div style={{ margin: 20 }}>
                <div className="row_line_2">
                  <div className="profile_friend_imgs">
                    <img
                      src={
                        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                      }
                      alt=""
                    />
                  </div>
                  <p className="reg_line_header">
                    Award-winning web developer and instructor with 10+ years’
                    of well-rounded experience in LAMP development,
                    object-oriented and user-centered design, seeks a position
                    with a top technology firm. Award-winning web developer and
                    instructor with 10+ years’ of well-rounded experience in
                    LAMP development. Award-winning web developer and instructor
                    with 10+ years’ of well-rounded experience in LAMP
                    development
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="profile_body">
            <div className="login">
              <h2 style={{ margin: 10 }}>Experince</h2>
              <div style={{ margin: 20 }}>
                <div className="row_line_2">
                  <div className="profile_friend_imgs">
                    <img
                      src={
                        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                      }
                      alt=""
                    />
                  </div>
                  <p className="reg_line_header">
                    Award-winning web developer and instructor with 10+ years’
                    of well-rounded experience in LAMP development,
                    object-oriented and user-centered design, seeks a position
                    with a top technology firm. Award-winning web developer and
                    instructor with 10+ years’ of well-rounded experience in
                    LAMP development. Award-winning web developer and instructor
                    with 10+ years’ of well-rounded experience in LAMP
                    development
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}
