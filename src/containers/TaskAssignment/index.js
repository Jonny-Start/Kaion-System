import React from "react";
import "./TaskAssignment.css";
import { BasicLayout } from "../../components/BasicLayout";
import { Button, Input } from "../../components/forms";

function TaskAssignment() {
  return (
    <BasicLayout idContent="TaskAssignment" backgroundImage={true}>
      <div className="contentAssignment">
        <h1>Asignación de tarea</h1>
        <section className="contentListInputs">
          <form>
            <div className="contentinputs">
              <select required>
                <option value="">Usuario</option>
                <option value="id">Jonny Alejandro Cano Acosta</option>
                <option value="id">KAren Juliana Gomez Mattos</option>
              </select>
              <Input
                type="text"
                textLabel="Fecha"
                icon="input"
                classInput="inputText"
              />
            </div>
            <div className="contentinputs">
              <select required>
                <option value="">Proyecto</option>
                <option value="id">VyVy</option>
                <option value="id">Merck</option>
                <option value="id">Hp-medical</option>
              </select>
              <select required>
                <option value="">Tarea</option>
                <option value="id">Desarrollo</option>
                <option value="id">Auto Aprendizaje</option>
                <option value="id">Soporte y mantenimineto</option>
                <option value="id">Esfuerzo discrecional</option>
              </select>
            </div>

            <div className="contentinputs lastContentInput">
              <div className="contentInput contentTime">
                <input type="text" placeholder="00:00" className="time"></input>
              </div>
              <Input
                type="text"
                textLabel="Nota"
                icon="input"
                classInput="inputText"
              />
            </div>

            <div className="contentBtn">
              <Button
                typeStyleButton="secondary2"
                textButton="Asignar"
                typeButton="submit"
              />
            </div>
          </form>
        </section>
      </div>
      {/* ********************************* */}
      {/* ***********Content Time************ */}
      {/* ********************************* */}
      <div id="sectionDateNow">
        <button>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <p>Miercoles, 26 de Abril</p>
        <button>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <section id="contentTime">
        <div className="cardTime">
          <div className="sectionLeft">
            <h3 className="userName">Jonny Alejandro Cano Acosta</h3>
            <p className="taskName">(Merck): Desarrollo y mantenimineto</p>
            <p className="descriptionOrNote">
              Nota: Se recomienda revisar mockups para arreglar el tema
            </p>
          </div>
          <div className="sectionRight">
            <div className="timerAndEstimate">
              <span className="viewTime">00:00</span>
            </div>
            <Button typeStyleButton="secondary1" typeButton="button">
              <i className="fa-solid fa-pen"></i>
            </Button>
          </div>
        </div>
      </section>
    </BasicLayout>
  );
}

export { TaskAssignment };
