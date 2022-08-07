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
      <div className="udpate_cover_wrapper">
        <div className="open_cover_update" onClick={() => {}}>
          <i className="camera_filled_icon"></i>
          Add Cover Photo
        </div>
      </div>
    </div>
  );
}
