import React from "react";
import Link from "../../../Routing/Link";

/*
{
            title: 'HP Envy x360 Review',
            reference: 'hp-envy-x360-review-aber-zweimaö',
            description: 'agatha hat geazaubert',
            date: 'irgendwann anfang juli',
            imageLink: '',
            youtubeLink: 'httyoutube.com',
            previewImage: 'https://i.ytimg.com/vi/_zPJTXd2i3g/maxresdefault.jpg
        },
        */

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
  }

  project = this.props.project;

  setSpans = () => {
    const height = document.getElementById(
      `${this.project.reference}`
    ).clientHeight;
    const spans = Math.ceil(height / 5) + 3;

    this.setState({ spans: spans });
  };

  youtubeRef = () => {
    if (this.project.youtubeLink === "" || this.project.youtubeLink === null) {
      return null;
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <a href={this.project.youtubeLink} target="_blank">
            <button className="ui youtube button">
              <i className="ui youtube icon" />
              Auf YouTube ansehen
            </button>
          </a>
        </div>
      );
    }
  };

  render() {
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}`, transition: "all 0.25s ease"}}
        id="project-card-container"
      >
        <div
          className={`project-card${this.props.darkMode ? "-darkmode" : ""}`}
          id={this.project.reference}
        >
          <Link href={`Projects/${this.project.reference}`}>
            <div>
              <img
                className="ui image"
                onLoad={this.setSpans}
                src={this.project.previewImage}
              />
              <h1 className="ui inverted horizontal divider">
                <div className="title">
                  <b>{this.project.title}</b>
                </div>
              </h1>
            </div>
            <div
              className={`description${this.props.darkMode ? "-darkmode" : ""}`}
            >
              {this.project.previewDescription}
            </div>
          </Link>
          <div className="youtube-button-container">
            <this.youtubeRef />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
