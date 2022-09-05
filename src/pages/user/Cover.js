import React from "react";

export default function Cover({ Users }) {
  return (
    <div className="profile_cover">
      {/* <div className="save_changes_cover">
        <div className="save_changes_left">
          <i className="public_icon"></i>
          Your cover photo is public
        </div>
        <div className="save_changes_right">
          <button className="blue_btn opacity_btn" onClick={() => {}}>
            Cancel
          </button>
          <button className="blue_btn " onClick={() => {}}>
            "Save changes"
          </button>
        </div>
      </div> */}
      <input
        type="file"
        //ref={refInput}
        hidden
        accept="image/jpeg,image/png,image/webp,image/gif"
        //onChange={handleImage}
      />
      <img src={Users.cover} className="cover" alt="cover" />
    </div>
  );
}
