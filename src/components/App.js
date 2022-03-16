import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Route from "../Routing/Route";
import AutoForward from "../Routing/AutoForward";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Projects from "./Pages/Projects";
import Tools from "./Pages/Tools";
import GetInTouch from "./Pages/GetInTouch";
import Footer from "./Elements/Footer";
import Slideshow from "./Elements/Slideshow";
import LoremIpsum from "./Testing/LoremIpsum";
import ProjectPage from "./Pages/Projects/ProjectPage";

class App extends React.Component {
  NavbarFields = [
    "@Home",
    "Gallery",
    "Projects",
    "Tools",
    "Get-in-Touch",
    "@Theme",
  ];

  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
    };
  }

  demoProject = (index) => {
    return ({
      title: "Demo Project Page",
      reference: `demo-project-no-${index}`,
      description: LoremIpsum,
      previewDescription: "this is just a lot of lorem ipsum, but i am different than my predecessors preview text... ".repeat(Math.ceil(Math.random() * 3 * index)),
      date: "25.10.2009",
      images: "https://api.unsplash.com/collections/JnQS6oD3Gqw/photos?per_page=10",
      youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s",
      previewImage: "https://i.ytimg.com/vi/6Mc-Thl1kTQ/maxresdefault.jpg"
    })
  }

  projects = [this.demoProject(1), this.demoProject(2), this.demoProject(3), this.demoProject(4), this.demoProject(5), this.demoProject(6), this.demoProject(7), this.demoProject(8), this.demoProject(9), this.demoProject(10), this.demoProject(11), this.demoProject(12), this.demoProject(13), this.demoProject(14), ];

  toggleTheme = () => {
    this.setState({ darkMode: !this.state.darkMode });
    return this.state.darkMode;
  };

  render() {
    return (
      <div
        className={`ui ${this.state.darkMode ? "inverted" : ""} basic segment`}
        style={{transition: "all 0.25s ease"}}
      >
        <Navbar
          NavbarFields={this.NavbarFields}
          style={this.styles}
          darkMode={this.state.darkMode}
          toggleTheme={this.toggleTheme}
        />
        <div className="ui tiny menu"></div> {/** Spacer for Header*/}
        <div>
          <Route path="/">
            <AutoForward href="/Home" />
          </Route>
          <Route path="/Home">
            <Home darkMode={this.state.darkMode} />
          </Route>
          <Route path="/Gallery">
            <Gallery
              darkMode={this.state.darkMode}
              importImages={this.importImages}
              images={this.state.images}
            />
          </Route>
          <Route path="/Projects">
            <Projects darkMode={this.state.darkMode} projects={this.projects} />
          </Route>
          <Route path="/Tools">
            <Tools darkMode={this.state.darkMode} />
          </Route>
          <Route path="/Get-in-Touch">
            <GetInTouch darkMode={this.state.darkMode} />
          </Route>

          {this.projects.map((project) => {
            return (
              <Route
                path={`/Projects/${project.reference}`}
                key={project.reference}
              >
                <ProjectPage project={project} darkMode={this.state.darkMode}/>
              </Route>
            );
          })}

          <Footer darkMode={this.state.darkMode} />
        </div>
      </div>
    );
  }
}

export default App;
