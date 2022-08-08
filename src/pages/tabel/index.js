import "./style.css";
import Cover from "./Cover";
import ProfielPictureInfos from "./ProfielPictureInfos";
import RegisterForm from "../../components/login/RegisterForm";

export default function Table() {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_container">
          <Cover />
          <ProfielPictureInfos />
        </div>{" "}
        <br />
        <div className="login">
          <div className="profile_body">
            <div className="login">
              <h2 style={{ margin: 10, textDecorationLine: "underline" }}>
                Application sent
              </h2>
              <div style={{ margin: 20 }}>
                <table>
                  <tr>
                    <th>Job title</th>
                    <th>Employer</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td>
                      <label>Juniour Developer</label>
                      <br />
                      <label style={{ fontSize: 10 }}>
                        Kaluthara, Panadura
                      </label>
                    </td>
                    <td>Rocket sci.tech</td>
                    <td>Pending</td>
                    <td>03/05/2022</td>
                    <td>
                      <label style={{ backgroundColor: "red", color: "white" }}>
                        Remove
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Juniour Developer</label>
                      <br />
                      <label style={{ fontSize: 10 }}>
                        Kaluthara, Panadura
                      </label>
                    </td>
                    <td>Rocket sci.tech</td>
                    <td>Pending</td>
                    <td>03/05/2022</td>
                    <td>
                      <label style={{ backgroundColor: "red", color: "white" }}>
                        Remove
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Juniour Developer</label>
                      <br />
                      <label style={{ fontSize: 10 }}>
                        Kaluthara, Panadura
                      </label>
                    </td>
                    <td>Rocket sci.tech</td>
                    <td>Pending</td>
                    <td>03/05/2022</td>
                    <td>
                      <label style={{ backgroundColor: "red", color: "white" }}>
                        Remove
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Juniour Developer</label>
                      <br />
                      <label style={{ fontSize: 10 }}>
                        Kaluthara, Panadura
                      </label>
                    </td>
                    <td>Rocket sci.tech</td>
                    <td>Pending</td>
                    <td>03/05/2022</td>
                    <td>
                      <label style={{ backgroundColor: "red", color: "white" }}>
                        Remove
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Juniour Developer</label>
                      <br />
                      <label style={{ fontSize: 10 }}>
                        Kaluthara, Panadura
                      </label>
                    </td>
                    <td>Rocket sci.tech</td>
                    <td>Pending</td>
                    <td>03/05/2022</td>
                    <td>
                      <label style={{ backgroundColor: "red", color: "white" }}>
                        Remove
                      </label>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}
