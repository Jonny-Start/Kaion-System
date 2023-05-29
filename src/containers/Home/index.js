import React from "react";
import "./Home.css";
import { BasicLayout } from "../../components/BasicLayout";
import { Button } from "../../components/forms";

function Home() {
  return (
    <BasicLayout idContent="Home" backgroundImage="true">
      <div id="sectionDateNow">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <p>Miercoles, 26 de Abril</p>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div id="containerWeeks">
        <button>Dom</button>
        <button>Lun</button>
        <button>Mar</button>
        <button className="active">Mié</button>
        <button>Jue</button>
        <button>Vie</button>
        <button>Sáb</button>
      </div>
      <section id="contentTime">
        <div className="cardTime">
          <div className="sectionLeft">
            <h3 className="proyectName">Kaion Proyect</h3>
            <p className="taskName">Soporte y mantenimiento</p>
            <p className="descriptionOrNote">
              Nota: Se recomienda revisar mockups para arreglar el tema
            </p>
          </div>
          <div className="sectionRight">
            <div className="timerAndEstimate">
              <p>Estimado 3h</p>
              <span className="viewTime">00:00</span>
            </div>
            <Button
              typeStyleButton="primary"
              textButton="Iniciar"
              typeButton="button"
            />
            <Button typeStyleButton="secondary1" typeButton="button">
              <i className="fa-solid fa-pen"></i>
            </Button>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}

export { Home };
