import React from "react";
import axios from "axios";

import { useRef, useState } from "react";
import ProfilePicture from "../../components/profielPicture/index";
import PulseLoader from "react-spinners/PulseLoader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function ProfielPictureInfos({ Users, setVisible, featchData }) {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [viewImage, setViewImage] = useState("");
  const [isImage, setIsImage] = useState("");
  const pRef = useRef(null);
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);

  const updateCoverPicture = async () => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        `http://localhost:8000/api/users/updateProfilePicture/${Users._id}`,
        {
          url: viewImage,
        }
      );

      const { demo } = await axios.put(
        `http://localhost:8000/api/users/updateuser/${Users._id}`,
        {
          upProfile: Users.upProfile + 1,
        }
      );

      await featchData();

      setTimeout(() => {
        setLoading(false);
        toast("update success");
        setViewImage("");
        setIsImage(data);
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast(error.message);
    }
  };

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
      {viewImage && (
        <div className="save_changes_cover">
          <div className="save_changes_left">
            <i className="public_icon"></i>
            Your Profile photo is public
          </div>
          <div className="save_changes_right">
            <button
              className="blue_btn opacity_btn"
              onClick={() => setViewImage("")}
            >
              Cancel
            </button>
            <button className="blue_btn " onClick={() => updateCoverPicture()}>
              {loading ? <PulseLoader color="#fff" size={5} /> : "Save changes"}
            </button>
          </div>
        </div>
      )}
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            ref={pRef}
            style={{
              backgroundSize: "cover",
              backgroundImage: viewImage
                ? `url(${viewImage})`
                : isImage
                ? `url(${isImage})`
                : `url(${Users.picture})`,
            }}
          >
            <div
              className="profile_circle hover1"
              onClick={() => setShow(true)}
            >
              <i className="camera_filled_icon"></i>
            </div>
          </div>
        </div>
        <div className="profile_w_col">
          <div className="row_line">
            <div className="profile_name">
              {Users.first_name} {Users.last_name}{" "}
              <div
                onClick={() => navigate("/userEdit", { state: Users })}
                className="delete_icon"
              ></div>
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
            <button
              onClick={() => {
                setVisible(true);
              }}
              className="post_submit"
            >
              Contact Info
            </button>
            <button className="post_submit">View Application</button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
