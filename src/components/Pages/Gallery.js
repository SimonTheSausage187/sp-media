import "./Gallery/ImageList.css";
import React, { useEffect, useState } from "react";
import ImageCard from "./Gallery/ImageCard";
import ImagePopup from "./Gallery/ImagePopup";
import axios from "axios";
import config from "../../config";

const Gallery = ({ updateActive }) => {
  const [images, setImages] = useState([]);
  const [popupImage, setPopupImage] = useState({ url: "", id: "" });

  async function importImages() {
    const response = await axios.get(
      "https://api.unsplash.com/collections/JnQS6oD3Gqw/photos?per_page=1000",
      {
        headers: {
          Authorization: `'Client-ID ${config.key}'`,
        },
      }
    );
    setImages(response.data);
  }

  useEffect(() => {
    importImages();
  }, []);

  return (
    <div>
      <ImagePopup
        src={popupImage.url}
        imageID={`${popupImage.id}-popup`}
        closePopup={() => setPopupImage({ url: "", id: "" })}
      />

      <div className="image-list" id="imageList" style={{ zIndex: 1 }}>
        {images.map((image) => {
          return (
            <ImageCard
              src={image.urls}
              imageID={image.id}
              key={image.id}
              openPopup={(e) =>
                setPopupImage({ url: image.urls.raw, id: image.id })
              }
            />
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Gallery;
