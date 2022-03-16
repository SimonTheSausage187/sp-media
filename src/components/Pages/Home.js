import React from "react";
import Slideshow from "../Elements/Slideshow";
import Link from "../../Routing/Link";
import Projects from "./Projects";

const Home = ({ darkMode }) => {
  return (
    <div>
      <h1
        className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
        style={{ fontSize: "50px", marginTop: "30px", marginBottom: "50px" }}
      >
        SP-MEDIA
      </h1>
      <Slideshow
        imageLink={
          "https://api.unsplash.com/collections/JnQS6oD3Gqw/photos?per_page=10"
        }
        darkMode={darkMode}
      />
      <div>
        <h1
          className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
          style={{ fontSize: "30px", marginTop: "30px", marginBottom: "30px" }}
        >
          Hey!
        </h1>
        <div
          style={{ fontSize: "18px", textAlign: "center" }}
          className="ui text"
        >
          Hallo und herzlich Willkommen bei SP-Media! Schau dich doch etwas um,
          und wenn du Interesse an unseren Diensten hast, dann kontaktiere uns
          doch <Link href="Get-in-Touch">hier</Link>
        </div>
        <h1
          className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
          style={{ fontSize: "30px", marginTop: "30px", marginBottom: "30px" }}
        >
          Unsere aktuellsten Projekte
        </h1>
      </div>
    </div>
  );
};

export default Home;
