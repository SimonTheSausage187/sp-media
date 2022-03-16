import React from "react";
import Slideshow from "../../Elements/Slideshow";

/*
      title: "Demo Project Page",
      reference: `demo-project-no-${index}`,
      description: LoremIpsum,
      previewDescription: "this is just a lot of lorem ipsum, but i am different than my predecessors preview text... ".repeat(Math.ceil(Math.random() * 3 * index)),
      date: "25.10.2009",
      images: ["https://api.unsplash.com/collections/JnQS6oD3Gqw/photos?per_page=10", ""],
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s",
      previewImage: "https://i.ytimg.com/vi/6Mc-Thl1kTQ/maxresdefault.jpg"
*/


const ProjectPage = ({project, darkMode}) => {
    return (
        <div>
            <Slideshow imageLink={project.images} searchTerm={project.images[1]} darkMode={darkMode}/>
        </div>
    )
}

export default ProjectPage