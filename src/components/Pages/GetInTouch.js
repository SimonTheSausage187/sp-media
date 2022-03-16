import React from "react";

const GetInTouch = ({darkMode}) => {
  const EmployeeCard = ({ name, since, profession, email}) => {
    return (
        <div className={`ui teal card`} style={{border: "10px solid teal"}}>
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU" />
          </div>
          <div className="content">
            <a className="header">{name}</a>
            <div className="meta">
              <span className="date">Bei SP-Media seit {since}</span>
            </div>
            <div className="description">
              {name} ist {profession} bei SP-Media
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="mail icon"></i>
              <a href={`mailto:${email}@sp-media-imaginary-company.com`}>{email}@sp-media-imaginary-company.com</a>
            </a>
          </div>
        </div>
    );
  };

  return (
      <div>
          <h1
          className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
          style={{ fontSize: "50px", marginTop: "30px", marginBottom: "30px" }}
        >
          Vielen Dank für dein Interesse!
        </h1>
        <h1
          className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
          style={{ fontSize: "30px", marginTop: "30px", marginBottom: "30px" }}
        >
          Kontaktiere doch einen unserer Mitarbeiter
        </h1>
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <EmployeeCard name="Simon" since="immer schon :)" profession="CEO und Director of Photography" email="simon"/>
            <EmployeeCard name="Rick" since="Oktober 2021" profession="PR-Manager" email="nevergonnagiveyouup"/>
            <EmployeeCard name="Alberto" since="August 2021" profession="Editor" email="alberto"/>
        </div>
        <h1
          className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
          style={{ fontSize: "30px", marginTop: "30px", marginBottom: "30px" }}
        >
          Oder schreib uns direkt:
        </h1>
        <div style={{display: "flex", justifyContent: "center"}}>
            <a href="mailto:info@sp-media-imaginary-company.com" style={{fontSize: "20px"}}>
                <i className="ui large mail icon"/>
                {" "}info@sp-media-imaginary-company.com
            </a>
        </div>
        <h1
          className={`ui ${darkMode ? "inverted " : ""}horizontal divider`}
          style={{ fontSize: "30px", marginTop: "30px", marginBottom: "30px" }}
        >
          Unser Imagefilm (Symbolvideo)
        </h1>
        <div style={{display: "flex", justifyContent: "center"}}>
          <iframe
            width="1280px"
            height="720px"
            src={`https://www.youtube.com/embed/7t4Ji87iuqY`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
  )
};

export default GetInTouch;
