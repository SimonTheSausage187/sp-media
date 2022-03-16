import react, { useState } from "react";

const Footer = ({ darkMode }) => {
  const [leftOffset, setLeftOffset] = useState(0);

  const centerAlign = {
    display: "grid",
    justifyContent: "center",
  };

  return (
    <div id="footerTotal" style={{transition: "all 0.25s ease"}}>
      <h4 className={`ui ${darkMode ? "inverted" : ""} horizontal divider`}>
        &copy; 2022 SP-Media
      </h4>
      <div className={`ui container`}>
        <div
          className={`ui ${darkMode ? "inverted" : ""} list`}
          style={centerAlign}
        >
          <div className="item">
            <i className="mail icon" />
            <div className="content">
              <a href="mailto:simon@sp-media-imaginary-company.com">
                {" "}
                info@sp-media-imaginary-company.com
              </a>
            </div>
          </div>
          <div className="item">
            <i className="instagram icon" />
            <div className="content">
              <div>
                <a href="https://instagram.com/xposimon" target="_blank">
                  @xposimon
                </a>{" "}
                &#x2022;{" "}
                <a href="https://instagram.com/techreviews_de">
                  @techreviews_de
                </a>
              </div>
            </div>
          </div>

          <div className="item">
            <i className="youtube square icon" />
            <div className="content">
              <a
                href="https://www.youtube.com/channel/UCmzeMwOGbB_JSCs6uF3mqvA"
                target="_blank"
              >
                TechReviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
