import React, { useEffect, useState } from "react";
import Link from "../../Routing/Link";

const Navbar = ({ darkMode, toggleTheme, NavbarFields }) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };
    updatePath();
    window.addEventListener("popstate", updatePath);
  }, []);

  const numToWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const niceHREF = (rawHREF) => {
    if (rawHREF.startsWith("@")) {
      if (rawHREF === "@Theme") {
        return currentPath.substring(1);
      }
      return rawHREF.substring(1);
    } else {
      return rawHREF;
    }
  };

  const niceContent = (rawContent) => {
    if (rawContent.startsWith("@")) {
      if (rawContent === "@Home") {
        return (
          <div>
            <i className="home icon" />
            {" SP-Media"}
          </div>
        );
      } else if (rawContent === "@Theme") {
        return (
          <button
            onClick={toggleTheme}
            className={`ui ${!darkMode ? "black" : "white"} icon button`}
          >
            <i className={`${darkMode ? "moon" : "sun"} icon`} />
          </button>
        );
      }
    } else {
      return rawContent === "Get-in-Touch" ? "Get in Touch" : rawContent;
    }
  };
  return (
    <div>
      <div
        className={`ui top fixed ${darkMode ? "inverted" : ""} ${
          numToWords[NavbarFields.length]
        } item massive borderless menu`}
        style={{ transition: "all s ease" }}
      >
        {NavbarFields.map((field, i) => {
          return (
            <Link
              key={i}
              className={`teal ${darkMode ? "inverted" : ""} ${
                currentPath.startsWith(`/${niceHREF(field)}`) &&
                !(field === "@Theme")
                  ? "active"
                  : ""
              } item`}
              href={niceHREF(field)}
            >
              {niceContent(field)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
