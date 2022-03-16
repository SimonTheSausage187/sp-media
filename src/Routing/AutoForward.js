import React from "react";

const AutoForward = ({ href }) => {
  window.history.pushState({}, "", href); // setzt bei Methodenaufruf direkt den aktuellen Pfad auf "./Home", sodass man bei Eingabe der Domain direkt auf die Homepage geleitet wird
  return <div></div>; // gibt einen leeren <div> zurück, damit React die Seite von sich aus neu rendert
};

export default AutoForward;
