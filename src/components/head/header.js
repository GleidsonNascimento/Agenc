import React from "react";
import "./header.css";
import iconeSun from "../../imagens/sun.png";
import iconeMoon from "../../imagens/moon.png";
import IconLogo from "../../imagens/logo.jpg";

export default function Header(props) {
  return (
    <div
      id="top"
      className={props.themaBlack ? "top-dark-mode" : "top-yellow-mode"}
    >
      <div className="logo">
        <img src={IconLogo} alt="logoa" />
        <div
          id="button"
          className={props.themaBlack ? "button-black" : "button-yellow"}
        >
          <button
            onClick={props.changeThema}
            className={props.themaBlack ? "btn-dark-mode" : "btn-yellow-mode"}
          >
            <img src={props.themaBlack ? iconeSun : iconeMoon} alt="button" />
          </button>
        </div>
      </div>
    </div>
  );
}
