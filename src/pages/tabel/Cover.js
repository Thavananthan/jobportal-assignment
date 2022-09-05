import React from "react";

export default function Cover({ cover, visitor, photos }) {
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
      <img
        src={
          "https://images.unsplash.com/photo-1515940175183-6798529cb860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2529&q=80"
        }
        className="cover"
        alt="cover"
      />
    </div>
  );
}
