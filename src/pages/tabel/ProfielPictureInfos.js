import React from "react";

export default function ProfielPictureInfos() {
  return (
    <div className="profile_img_wrap">
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80)`,
            }}
          ></div>
        </div>
        <div className="profile_w_col">
          <div className="row_line">
            <div className="profile_name">Jon Snow</div>
            <div className="profile_name">
              <p className="reg_line_header">
                {" "}
                <i className="maps_icon"></i> New York
              </p>
            </div>
          </div>
          <br />
          <div className="profile_friend_imgs">
            <p className="reg_line_header">
              Award-winning web developer and instructor with 10+ years’ of
              well-rounded experience in LAMP development, object-oriented and
              user-centered design, seeks a position with a top technology firm.
              Award-winning web developer and instructor with 10+ years’ of
              well-rounded experience in LAMP development.
            </p>
          </div>
          <br />
          <div className="row_line">
            <button className="post_submit">Contact Info</button>
            <button className="post_submit">View Application</button>
          </div>
        </div>
      </div>
    </div>
  );
}
