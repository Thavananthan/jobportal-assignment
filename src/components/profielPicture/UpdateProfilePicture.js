import React from "react";
import { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { uploadImages } from "../../functions/uploadImages";
import getCroppedImg from "../../helpers/getCroppedImg";
import PulseLoader from "react-spinners/PulseLoader";
export default function UpdateProfilePicture({
  setImage,
  image,
  setError,
  setShow,
  pRef,
  setViewImage,
  setProfile,
}) {
  // const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const slider = useRef(null);
  // const { user } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const zoomIn = () => {
    slider.current.stepUp();
    setZoom(slider.current.value);
  };
  const zoomOut = () => {
    slider.current.stepDown();
    setZoom(slider.current.value);
  };
  const getCroppedImage = useCallback(
    async (show) => {
      try {
        const img = await getCroppedImg(image, croppedAreaPixels);
        if (show) {
          setZoom(1);
          setCrop({ x: 0, y: 0 });
          setImage(img);
        } else {
          return img;
        }
      } catch (error) {
        console.log(error);
      }
    },
    [croppedAreaPixels]
  );
  const updateProfielPicture = async () => {
    try {
      setLoading(true);
      let img = await getCroppedImage();
      let blob = await fetch(img).then((b) => b.blob());
      const path = `${1 + Math.random()}/profile_pictures`;

      let formData = new FormData();
      formData.append("file", blob);
      formData.append("path", path);

      const res = await uploadImages(formData, path);
      if (res.length > 0) {
        setViewImage(res[0].url);
        setProfile(res[0].url);
        setLoading(false);
        setShow(false);
        setImage("");
        console.log(res);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return (
    <div className="postBox update_img">
      <div className="box_header">
        <div className="small_circle" onClick={() => setImage("")}>
          <i className="exit_icon"></i>
        </div>
        <span>Update profile picture</span>
      </div>

      <div className="update_center">
        <div className="crooper">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            cropShape="round"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            showGrid={false}
          />
        </div>
        <div className="slider">
          <div className="slider_circle hover1" onClick={() => zoomOut()}>
            <i className="minus_icon"></i>
          </div>
          <input
            type="range"
            min={1}
            max={3}
            step={0.2}
            ref={slider}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
          />
          <div className="slider_circle hover1" onClick={() => zoomIn()}>
            <i className="plus_icon"></i>
          </div>
        </div>
      </div>
      <div className="flex_up">
        <div className="gray_btn" onClick={() => getCroppedImage("show")}>
          <i className="crop_icon"></i>Crop photo
        </div>
        <div className="gray_btn">
          <i className="temp_icon"></i>Make Temporary
        </div>
      </div>

      <div className="update_submit_wrap">
        <div className="blue_link" onClick={() => setImage("")}>
          Cancel
        </div>
        <button
          className="blue_btn"
          disabled={loading}
          onClick={() => updateProfielPicture()}
        >
          {loading ? <PulseLoader color="#fff" size={5} /> : "Save"}
        </button>
      </div>
    </div>
  );
}
