import React, { useEffect, useState, useRef } from "react";
import "./ImagePopup.css";

const ImagePopup = ({ src, imageID, closePopup }) => {
  const [imageURL, setImageURL] = useState(src);

  useEffect(() => {
    setImageURL(src);
    document.body.addEventListener("click", closePopupByClick);
  }, [src]);

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      closePopup();
    }
  };

  const closePopupByClick = (event) => {
    if (!(event.path[2] === document.getElementById("imageList"))) {
      closePopup();
    }
  };

  const measures = {
    maxWidth: window.innerWidth,
    maxHeight: window.innerHeight,
    padding: "4%",
  };

  if (!(imageURL === "")) {
    return (
      <div style={{ position: "fixed" }} className="popup">
        <div
          className={`ui dimmer modals page transition visible ${
            !(src === "") ? "active" : ""
          }`}
        >
          <div className="image content">
            <img
              className="image"
              src={imageURL}
              style={measures}
              id={imageID}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default ImagePopup;
