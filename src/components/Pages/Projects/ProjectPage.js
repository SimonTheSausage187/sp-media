import React, { useState } from "react";
import Slideshow from "../../Elements/Slideshow";

/*
      title: "Demo Project Page",
      reference: `demo-project-no-${index}`,
      description: LoremIpsum,
      previewDescription: "this is just a lot of lorem ipsum, but i am different than my predecessors preview text... ".repeat(Math.ceil(Math.random() * 3 * index)),
      date: "25.10.2009",
      images: ["https://api.unsplash.com/collections/JnQS6oD3Gqw/photos?per_page=10", ""],
      youtubeCode: "dQw4w9WgXcQ&t=1s",
      previewImage: "https://i.ytimg.com/vi/6Mc-Thl1kTQ/maxresdefault.jpg"
*/

const ProjectPage = ({ project, darkMode }) => {
    console.log(project.youtubeCode)
  const YoutubeEmbed = () => {
    if (project.youtubeCode === null || project.youtubeCode === "") {
      return null;
    } else {
      return (
        <div style={{display: "flex", justifyContent: "center"}}>
          <iframe
            width="1280px"
            height="720px"
            src={`https://www.youtube.com/embed/${project.youtubeCode}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      );
    }
  };

  return (
    <div>
      <h1
        className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
        style={{ fontSize: "50px", marginTop: "30px", marginBottom: "50px" }}
      >
        {project.title}
      </h1>
      <Slideshow
        imageLink={project.images}
        searchTerm={project.images[1]}
        darkMode={darkMode}
      />
      <div>
        <h1 className="ui divider" style={{ marginTop: "50px", marginBottom: "50px" }}></h1>
        <div style={{fontSize: "16px"}}>
            {project.description}
        </div>
        <h1 className="ui divider" style={{ marginTop: "30px", marginBottom: "30px" }}></h1>
        <YoutubeEmbed />
      </div>
    </div>
  );
};

export default ProjectPage;
