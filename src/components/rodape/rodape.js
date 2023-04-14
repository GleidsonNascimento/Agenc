import React from "react";
import "./rodape.css"

export default function Rodape(props) {
  return (
    <div id="container-rodape" className={props.themaBlack ? 'rodape-dark-mode' : 'rodape-yellow-mode'}>
      <div className="container-text">
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no
          ambiente online utilizando estratégias, ferramentas e tecnologias
          personalizadas
        </p>
        
      </div>
      <div className="container-redes">
        <img src="imagens/linkedin.png" alt="" />
        <img src="imagens/twitter.png" alt="" />
        <img src="imagens/facebook.png" alt="" />
      </div>
      <p>Copyright 2022 Criado por Gleidson Guimarães do nascimento com layout da devmidia</p>
    </div>
  );
}
