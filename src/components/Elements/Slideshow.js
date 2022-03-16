import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import "./slideshow.css";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";

const Slideshow = ({ darkMode, imageLink,  searchTerm}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesRecieved, setImagesRecieved] = useState(false);
  const [imageDirection, setImageDirection] = useState("start");
  const [imageHeight, setImageHeight] = useState(0);
  const [currentImageStatus, setCurrentImageStatus] = useState("active");
  const [imageContainerWidth, setImageContainerWidth] = useState(0);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    async function importImages() {
      const response = await axios.get(
        imageLink,
        {
          headers: {
            Authorization: `'Client-ID ${config.key}'`,
          },
        }
      );
      setImages(response.data);
      setImagesRecieved(true);
    }
    importImages();
  }, []);

  const decreaseActiveIndex = () => {
    if (activeImage == 0) {
      return images.length - 1;
    } else {
      return activeImage - 1;
    }
  };

  const increaseActiveIndex = () => {
    return (activeImage + 1) % images.length;
  };

  const keyEventHandler = (event) => {
    event = event || window.event;
    if (event.key === "ArrowLeft") {
      goLeft();
    } else if (event.key === "ArrowRight") {
      goRight();
    }
  };

  const goRight = () => {
    setAnimation(true);
    setImageDirection("Right");
    setCurrentImageStatus("disabled");
    window.setTimeout(() => setActiveImage(decreaseActiveIndex), 120);
    window.setTimeout(() => setCurrentImageStatus("active"), 120);
    window.setTimeout(() => setAnimation(false), 360);
  };

  const goLeft = () => {
    setAnimation(true);
    setImageDirection("Left");
    setCurrentImageStatus("disabled");
    window.setTimeout(() => setActiveImage(increaseActiveIndex), 120);
    window.setTimeout(() => setCurrentImageStatus("active"), 120);
    window.setTimeout(() => setAnimation(false), 360);
  };

  const returnProperAnimationName = () => {
    if (imageDirection === "start") {
      return "pop 0.3s forwards";
    } else {
      if (currentImageStatus === "active") {
        return `slideInFrom${imageDirection} ease-in-out 0.24s forwards`;
      } else {
        if (imageDirection === "Left") {
          return "leaveToRight ease-in-out 0.24s forwards";
        } else if (imageDirection === "Right") {
          return "leaveToLeft ease-in-out 0.24s forwards";
        }
      }
    }
    return "none";
  };

  const SlideshowImage = ({ index }) => {
    if (index == -1) {
      return null;
    }
    if (imagesRecieved) {
      return (
        <img
          src={images[index].urls.regular}
          id={index}
          style={{
            maxWidth: imageContainerWidth,
            maxHeight: "550px",
            marginTop: ((imageContainerWidth * 0.6) - imageHeight) / 2,
            animation: `${animation ? returnProperAnimationName() : "none"}`,
          }}
          onLoad={() => {
            setImageContainerWidth(
              document.getElementById("image-container").clientWidth
            );
            if (index == activeImage) {
              setImageHeight(
                document.getElementById(index).clientHeight + 30
              );
            }
          }}
        />
      );
    } else {
      return null;
    }
  };

  document.onkeydown = (event) => keyEventHandler(event);
  window.onresize = () =>
    setImageContainerWidth(
      document.getElementById("image-container").clientWidth
    );

  return (
    <div className="slideshow-container" style={{ height: imageContainerWidth * 0.6}}>
      <div className="ui grid">
        <div
          className="ui three wide column"
          style={{ display: "flex", justifyContent: "end", paddingTop: 0 }}
        >
          <button
            onClick={() => goLeft()}
            className={`slideshow-button${darkMode ? "-darkmode" : ""}`}
            style={{animation: `${animation && imageDirection === 'Left' ? 'buttonClick 0.3s ease forwards' : 'none'}`, marginTop: (imageContainerWidth * 0.6 - 200) / 2}}
          >
            {"<"}
          </button>
        </div>
        <div
          className="ui ten wide column"
          id="image-container"
          style={{ display: "flex", justifyContent: "center", zIndex: 1 }}
        >
          <SlideshowImage index={activeImage} />
        </div>
        <div
          className="ui three wide column"
          style={{ display: "flex", justifyContent: "start", paddingTop: 0 }}
        >
          <button
            onClick={() => goRight()}
            className={`slideshow-button${darkMode ? "-darkmode" : ""}`}
            style={{animation: `${animation && imageDirection === 'Right' ? 'buttonClick 0.3s ease forwards' : 'none'}`, marginTop: (imageContainerWidth * 0.6 - 200) / 2}}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
