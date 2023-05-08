import React from "react";
import "./LandingPage.css";
import imgIcono from "./../../icono.png";

function LandingPage() {
  return (
    <div id="LandingPage">
      <section id="contentDevices">
        <div id="contentSlogan">
          <h2 id="titleSlogan"> Aquí irá nuestro Slogan </h2>
          <p id="text"> con una descripción corta de nuestro proyrcto</p>
        </div>
        <div id="contentImage">
          <img src={imgIcono} alt="icono Kaion-System" id="imgDevice" />
        </div>
      </section>
      <section id="contentFeature">
        <div id="contentDescription">
          <h3 id="titleFeature"> Características de KS</h3>
          <h2 id="subtitleFeature">
            Aquí encontrarás todo lo que necesitas para que tu equipo de trabajo
            sea más productivo
          </h2>
          <h4 id="descriptionFeature">
            App que te ayudará a registrar horas productivas y obtener gráficos
            sobre ello
          </h4>
        </div>
        <div id="contentCards">
          <div id="contentCardFeature">
            <i class="fa-solid fa-stopwatch"></i>
            <h4 id="titleCard"> Conteo de horas</h4>
            <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
          </div>
          <div id="contentCardFeature">
          <i class="fa-solid fa-chart-pie"></i>
            <h4 id="titleCard"> Conteo de horas</h4>
            <p id="descriptionCard">{" Tengo muchas hooas "}</p>
          </div>
          <div id="contentCardFeature">
          <i class="fa-solid fa-sitemap"></i>
            <h4 id="titleCard"> Conteo de horas</h4>
            <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export { LandingPage };
