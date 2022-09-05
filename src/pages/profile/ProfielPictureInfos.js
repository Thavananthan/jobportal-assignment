import React from "react";

import { useRef, useState } from "react";
import ProfilePicture from "../../components/profielPicture/index";

export default function ProfielPictureInfos({ setProfile }) {
  const [show, setShow] = useState(false);
  const [viewImage, setViewImage] = useState("");
  const pRef = useRef(null);

  return (
    <div className="profile_img_wrap">
      {show && (
        <ProfilePicture
          setShow={setShow}
          setViewImage={setViewImage}
          setProfile={setProfile}
          pRef={pRef}
        />
      )}
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            style={{
              backgroundSize: "cover",
              backgroundImage: viewImage ? `url(${viewImage})` : null,
            }}
          ></div>
          <div className="profile_circle hover1" onClick={() => setShow(true)}>
            <i className="camera_filled_icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
