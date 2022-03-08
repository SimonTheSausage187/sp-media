
import "./Gallery/ImageList.css"
import React, { useEffect, useState } from "react";
import ImageCard from "./Gallery/ImageCard";
import Unsplash from "./Gallery/Unsplash";


const Gallery = ({updateActive}) => {

    const [images, setImages] = useState([])
    
    useEffect(() => {
        Unsplash.importImages()
        const images = Unsplash.images;
        console.log(images)
    }, [])

    return(
        <div>
            <div className="image-list">
                {images.map(image => {
                    return <ImageCard src={image.urls} imageID={image.id} key={image.id}/>;
                })}
            </div>
            <div>
              
            </div>
           
        </div>
    )
}

export default Gallery;