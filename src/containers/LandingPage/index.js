import React from "react";
import "./LandingPage.css";
import imgIcono from "./../../icono.png";
import { Button } from "../../components/forms";

function LandingPage() {
    return (
        <div id="LandingPage">
            <header>
                <div id="contentHeader">
                    <span id="contentIcon">
                        <img src={imgIcono} alt="icono Kaion-System" id="iconoKaionSystem" />
                        <h2 id="titleHeader"> Kaion System</h2>
                    </span>
                    <span id="contentButton">
                        <Button
                            typeStyleButton="primary"
                            textButton="Regístrate"
                            typeButton="button"
                            idValue="buttonSingUp"
                        />
                        <Button
                            typeStyleButton="secondary3"
                            textButton="Ingresa"
                            typeButton="button"
                        />
                    </span>
                </div>
            </header>
            <section id="contentDevices">
                <div id="contentSlogan">
                    <h2 id="titleSlogan"> ¡Empieza a registrar tus horas productivas! </h2>
                    <p id="text"> Kaion System cuenta con las mejores habilidades para adaptarse a tu equipo de trabajo.</p>
                    <Button
                        typeStyleButton="primary"
                        textButton="¡Prueba gratis!"
                        typeButton="button"
                    />
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
                        sea más productivo. <br />
                        Kaion System contiene funciones innovadoras para adaptarse más fácil al entorno de trabajo.
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
                <h2>¡Adquiere ya!</h2>
                <div id="contentCardsPlans">
                    <div id="contentCardPrice">
                        <h3> ¡Gratis!</h3>
                        <h3> $0</h3>
                        
                    </div>
                    <div id="contentCardPrice">
                        <i className="fa-solid fa-chart-pie"></i>
                        <h4 id="titleCard"> Conteo de horas</h4>
                        <p id="descriptionCard">{" Tengo muchas hooas "}</p>
                    </div>
                    <div id="contentCardPrice">
                        <i className="fa-solid fa-sitemap"></i>
                        <h4 id="titleCard"> Conteo de horas</h4>
                        <p id="descriptionCard">{"Tengo muchas hooooras "}</p>
                    </div>
                </div>
            </section>
            <footer> Aquí va el footer</footer>
        </div>
    );
}

export { LandingPage };
