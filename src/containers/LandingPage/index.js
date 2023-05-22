import React from "react";
import "./LandingPage.css";
import imgIcono from "./../../icono.png";
import { Button } from "../../components/forms";
import devices from "./../../devices.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleRegister = () => navigate("/CreateAccount");
  const handleLogin = () => navigate("/login");

  return (
    <div id="LandingPage">
      <div id="gradient">
        <header>
          <div id="contentHeader">
            <span id="contentIcon">
              <img
                src={imgIcono}
                alt="icono Kaion-System"
                id="iconoKaionSystem"
              />
              <h2 id="titleHeader"> Kaion System</h2>
            </span>
            <span id="contentButton">
              <Button
                typeStyleButton="primary"
                textButton="Regístrate"
                typeButton="button"
                idValue="buttonSingUp"
                onAction={() => handleRegister()}
              />
              <Button
                typeStyleButton="secondary3"
                textButton="Ingresa"
                typeButton="button"
                onAction={() => handleLogin()}
              />
            </span>
          </div>
        </header>
        <section id="contentDevices">
          <div id="contentSlogan">
            <h2 id="titleSlogan">
              {" "}
              ¡Empieza a registrar tus horas productivas!{" "}
            </h2>
            <p id="text">
              {" "}
              Kaion System cuenta con las mejores habilidades para adaptarse a
              tu equipo de trabajo.
            </p>
            <span id="contentButtonSlogan">
              <Button
                typeStyleButton="primary"
                textButton="¡Prueba gratis!"
                typeButton="button"
              />
            </span>
          </div>
          <div id="contentImage">
            <img src={devices} alt="dispositivos" id="iconoDevices" />
          </div>
        </section>
        <section id="contentFeature">
          <div id="contentDescription">
            <h3 id="titleFeature"> Características de KS</h3>
            <h2 id="subtitleFeature">
              El tiempo es dinero y aquí te ayudamos a controlarlo.
            </h2>
          </div>
          <div id="contentCardsFeatures">
            <div className="contentFeatures">
              <div className="feature">
                <i className="fa-solid fa-stopwatch"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Conteo de horas</h4>
                  <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
                </span>
              </div>
              <div className="feature">
                <i className="fa-solid fa-stopwatch"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Conteo de horas</h4>
                  <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
                </span>
              </div>
            </div>
            <div className="contentFeatures">
              <div className="feature">
                <i className="fa-solid fa-stopwatch"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Conteo de horas</h4>
                  <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
                </span>
              </div>
              <div className="feature">
                <i className="fa-solid fa-stopwatch"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Conteo de horas</h4>
                  <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
                </span>
              </div>
            </div>
            <div className="contentFeatures">
              <div className="feature">
                <i className="fa-solid fa-stopwatch"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Conteo de horas</h4>
                  <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
                </span>
              </div>
              <div className="feature">
                <i className="fa-solid fa-stopwatch"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Conteo de horas</h4>
                  <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="contentPlans">
          <h2 id="titlePlans">¡Adquiere ya!</h2>
          <h3> Elige el que mejor se adapte a tus condiciones.</h3>
          <div id="contentCardsPlans">
            <div className="contentCardPrice">
              <div className="contentTitleCard">
                <span className="typePlan">
                  <h3 className="h3Plan"> ¡Gratis!</h3>
                </span>
                <span className="typePrice">
                  <h4>$</h4>
                  <h2 className="h2price"> 20</h2>
                  <h4>.000</h4>
                </span>
              </div>
              <div className="contentDescriptionCard">
                <h2 className="h2Description"> Qué incluye?</h2>
                <span className="descriptionPlan">
                  <p>
                    {" "}
                    <i className="fa-sharp fa-solid fa-list-check"></i> un
                    proyecto
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-users"></i> 2 empleados
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-simple"></i> No muestra
                    gráficas
                  </p>
                </span>
              </div>
              <div className="contentButton">
                <Button
                  typeStyleButton="secondary1"
                  textButton="¡Empieza ya tu prueba gratuita!"
                  typeButton="button"
                />
              </div>
            </div>
            <div className="contentCardPrice">
              <div className="contentTitleCard">
                <span className="typePlan">
                  <h3 className="h3Plan"> ¡Gratis!</h3>
                </span>
                <span className="typePrice">
                  <h4>$</h4>
                  <h2 className="h2price"> 20</h2>
                  <h4>.000</h4>
                </span>
              </div>
              <div className="contentDescriptionCard">
                <h2 className="h2Description"> Qué incluye?</h2>
                <span className="descriptionPlan">
                  <p>
                    {" "}
                    <i className="fa-sharp fa-solid fa-list-check"></i> un
                    proyecto
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-users"></i> 2 empleados
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-simple"></i> No muestra
                    gráficas
                  </p>
                </span>
              </div>
              <div className="contentButton">
                <Button
                  typeStyleButton="secondary1"
                  textButton="¡Empieza ya tu prueba gratuita!"
                  typeButton="button"
                />
              </div>
            </div>
            <div className="contentCardPrice">
              <div className="contentTitleCard">
                <span className="typePlan">
                  <h3 className="h3Plan"> ¡Gratis!</h3>
                </span>
                <span className="typePrice">
                  <h4>$</h4>
                  <h2 className="h2price"> 20</h2>
                  <h4>.000</h4>
                </span>
              </div>
              <div className="contentDescriptionCard">
                <h2 className="h2Description"> Qué incluye?</h2>
                <span className="descriptionPlan">
                  <p>
                    {" "}
                    <i className="fa-sharp fa-solid fa-list-check"></i> un
                    proyecto
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-users"></i> 2 empleados
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-simple"></i> No muestra
                    gráficas
                  </p>
                </span>
              </div>
              <div className="contentButton">
                <Button
                  typeStyleButton="secondary1"
                  textButton="¡Empieza ya tu prueba gratuita!"
                  typeButton="button"
                />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div id="contentFooter">
            <span id="descriptionFooter">
              <h4 id="h4DescriptionFooter">
                {" "}
                Contando las horas de trabajo para alcanzar el éxito.{" "}
              </h4>
            </span>
            <span id="titleFooter">
              <h2 id="h2TitleFooter"> Kaion System</h2>
              <p id="pDataFooter"> © 2023</p>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export { LandingPage };
