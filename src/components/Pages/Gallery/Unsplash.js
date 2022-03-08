import React, { useEffect, useState } from "react"
import axios from "axios"

const Unsplash = () => {
    const [images, setImages] = useState([]);

    async function importImages (){
        const response = await axios.get("https://api.unsplash.com/collections/JnQS6oD3Gqw/photos", {
            headers: {
                Authorization: `'Client-ID ${apikey}'`
            }
        });
        setImages(response.data)
    }

    return importImages();
}

export default Unsplash