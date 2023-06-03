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
              Optimiza tu productividad con Kaion System la aplicación líder en
              monitoreo y análisis del tiempo productivo para maximizar tus
              resultados
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
              Descubre cómo tus horas se traducen en resultados tangibles con
              Kaion System, la solución inteligente para el monitoreo del tiempo
              productivo
            </h2>
          </div>
          <div id="contentCardsFeatures">
            <div className="contentFeatures">
              <div className="feature">
                <i class="fa-solid fa-clock"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard">
                    {" "}
                    Monitoreo integral del tiempo productivo
                  </h4>
                  <p id="descriptionCard">
                    Obtén una visión completa del tiempo dedicado a diferentes
                    actividades, proyectos y tareas, en diferentes entornos de
                    trabajo.
                  </p>
                </span>
              </div>
              <div className="feature">
                <i className="fa-solid fa-chart-line"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard">Análisis en tiempo real</h4>
                  <p id="descriptionCard">
                    Accede a análisis y estadísticas en tiempo real para evaluar
                    y optimizar la productividad individual de tus equipos de
                    trabajo.
                  </p>
                </span>
              </div>
            </div>
            <div className="contentFeatures">
              <div className="feature">
                <i className="fa-solid fa-chart-pie"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard">Visualización intuitiva</h4>
                  <p id="descriptionCard">
                    Utiliza gráficos claros y concisos para representar
                    visualmente la distribución del tiempo productivo,
                    permitiendo una fácil comprensión y toma de decisiones
                    informadas.
                  </p>
                </span>
              </div>
              <div className="feature">
                <i className="fa-solid fa-mobile"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Acceso multiplataforma</h4>
                  <p id="descriptionCard">
                    Disfruta de la flexibilidad de acceder a la aplicación desde
                    dispositivos
                  </p>
                </span>
              </div>
            </div>
            <div className="contentFeatures">
              <div className="feature">
                <i className="fa-solid fa-code-branch"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Integraciones flexibles</h4>
                  <p id="descriptionCard">
                    Conecta con otras herramientas y aplicaciones populares para
                    importar datos y lograr una experiencia de seguimiento del
                    tiempo más completa y automatizada.
                  </p>
                </span>
              </div>
              <div className="feature">
                <i className="fa-solid fa-lock"></i>
                <span className="descriptionFeature">
                  <h4 id="titleCard"> Seguridad y privacidad</h4>
                  <p id="descriptionCard">
                    Garantiza la seguridad de los datos y la privacidad de los
                    usuarios mediante protocolos de seguridad robustos y
                    prácticas de privacidad sólidas.
                  </p>
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
                  <h2 className="h2price"> 0</h2>
                  <h4> /30 días</h4>
                </span>
              </div>
              <div className="contentDescriptionCard">
                <h2 className="h2Description"> Qué incluye?</h2>
                <span className="descriptionPlan">
                  <p>
                    <i className="fa-sharp fa-solid fa-list-check"></i> Registar
                    1 proyecto
                  </p>
                  <p>
                    <i className="fa-sharp fa-solid fa-thumbtack"></i> Agregar 5
                    tareas
                  </p>
                  <p>
                    {" "}
                    <i className="fa-sharp fa-solid fa-user-tie"></i> Registrar
                    un usuario administrador
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-users"></i> Registrar 2 empleados
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-simple"></i> Muestra
                    gráficas en tiempo real
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
                  <h3 className="h3Plan"> ¡Plus!</h3>
                </span>
                <span className="typePrice">
                  <h4>$</h4>
                  <h2 className="h2price"> 20</h2>
                  <h4>.000 /mes</h4>
                </span>
              </div>
              <div className="contentDescriptionCard">
                <h2 className="h2Description"> Qué incluye?</h2>
                <span className="descriptionPlan">
                  <p>
                    <i className="fa-sharp fa-solid fa-list-check"></i> Registar
                    3 proyectos
                  </p>
                  <p>
                    <i className="fa-sharp fa-solid fa-thumbtack"></i> Agregar
                    30 tareas
                  </p>
                  <p>
                    {" "}
                    <i className="fa-sharp fa-solid fa-user-tie"></i> Registrar
                    dos usuarios administradores
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-users"></i> Registrar 5 empleados
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-simple"></i> Muestra
                    gráficas en dos semanas de uso
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
                  <h3 className="h3Plan"> ¡Pro!</h3>
                </span>
                <span className="typePrice">
                  <h4>$</h4>
                  <h2 className="h2price"> 80</h2>
                  <h4>.000 /mes</h4>
                </span>
              </div>
              <div className="contentDescriptionCard">
                <h2 className="h2Description"> Qué incluye?</h2>
                <span className="descriptionPlan">
                  <p>
                    <i className="fa-sharp fa-solid fa-list-check"></i> Registar
                    proyectos ilimitados
                  </p>
                  <p>
                    <i className="fa-sharp fa-solid fa-thumbtack"></i> Agregar
                    tareas ilimitadas
                  </p>
                  <p>
                    {" "}
                    <i className="fa-sharp fa-solid fa-user-tie"></i> Registrar
                    5 usuarios administradores
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-users"></i> Registrar 30 empleados
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-simple"></i> Muestra
                    gráficas en tiempo real
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
                Kaion System: tu aliado para la productividad efectiva. Controla
                tu tiempo, optimiza tu trabajo y alcanza tus objetivos con
                facilidad.{" "}
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
