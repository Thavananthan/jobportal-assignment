export default function ProfielPictureInfos() {
  return (
    <div className="profile_img_wrap">
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            style={{
              backgroundSize: "cover",
              //backgroundImage: `url(${profile.picture})`,
            }}
          ></div>
          <div className="profile_circle hover1" onClick={() => {}}>
            <i className="camera_filled_icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
