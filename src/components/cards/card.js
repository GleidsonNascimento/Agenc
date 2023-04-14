import React from "react";
import "./cards.css"

export default function Cards(props) {
  return (
    <div id="card" className={props.themaBlack ? "secao-dark" : "secao-yellow"}>
      <p className="primeiroParagrafo">{props.data}</p>
      <h4>{props.titulo}</h4>
      <p className="segundoParagrafo">{props.empresa}</p>
      <p>{props.paragrafo}</p>
    </div>
  );
}
