import React from "react";

export default function ProfielPictureInfos({ Users }) {
  return (
    <div className="profile_img_wrap">
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${Users.picture})`,
            }}
          ></div>
        </div>
        <div className="profile_w_col">
          <div className="row_line">
            <div className="profile_name">
              {Users.first_name} {Users.last_name}
            </div>
            <div className="profile_name">
              <p className="reg_line_header">
                {" "}
                <i className="maps_icon"></i> {Users.location}
              </p>
            </div>
          </div>
          <br />
          <div className="profile_friend_imgs">
            <p className="reg_line_header">{Users.bio}</p>
          </div>
          <br />
          <div className="row_line">
            <button className="post_submit">Contact Info</button>
            <button className="post_submit">View Application</button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
