import React from "react";
import "./banner.css"

export default function Banner(props) {
  return (
    <div id="container-banner">
      <div id="imagem-container" className={props.themaBlack ? "container-dark-mode" : "container-yellow-mode"}> </div>
      <div className="banner-text">
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </div>
  );
}
