import React from "react";
import "./DashBoard.css";
import { BasicLayout } from "../../components/BasicLayout";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import LinesChart from "./../../components/LineChart";
import BarsChart from "../../components/BarChart";
import PiesChart from "../../components/PiesChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataFirtsPie = {
  titleChart: "Distribución del tiempo productivo diariamente",
  dataChart: [22, 18, 35, 25],
  labelChart: "Proporción del tiempo productivo dedicado",
  // este gráfico se mide por las tareas asignadas cumplidas en el tiempo estimado o menos
  labelsChart: ["Reunión diaria", "Aprendizaje", "Asignar tareas", "Crear proyectos"],
};
const dataSecondPie = {
  titleChart: "Distribución del tiempo productivo entre trabajo remoto y presencial",
  dataChart: [123, 222],
  labelChart: "Proporción del tiempo productivo en los diferentes ambientes de trabajo",
  // este gráfico se mide por las tareas asignadas cumplidas en el tiempo estimado o menos en las dos modalidades de trabajo
  labelsChart: ["Tiempo en trabajo presencial", "Tiempo en trabajo remoto"],
};

const dataFirstBar = {
  titleChart: "Comparativa de tiempos al cumplir una tarea medido en horas",
  dataChart: [10, 56, 20, 36, 80, 40, 30, 25, 30, 18, 60],
  labelChart: "Tiempo asignado en la tarea",
  labelsChart: [
    "Diseñar vistas KS",
    "Resolver la guía 1",
    "Crear presentación",
  ],
  dataChartSecond: [20, 43, 10, 60, 40, 80, 60, 20, 45, 60, 28, 30],
  labelChartSecond: "Tiempo obtenido en la tarea ",
};

const dataSecondBar = {
  titleChart: "Comparativa de tiempos medido en horas facturables y no facturables",
  dataChart: [234, 564, 232, 432, 534, 423, 234, 465, 465, 687, 978, 564],
  labelChart: "Medido por tareas asignadas cumplidas en el tiempo estimado o menos ",
  labelsChart: [
    "Horas facturables",
    "Horas no facturables",
  ],
};

const dataFusionBar = {
  titleChart: "Comparativa de tiempo productivo por mes",
  // esta grafica mide la comparacion de tiempos productivo entre meses medido en 
  // las tareas asignadas cumplidas en el tiempo estimado o menos
  dataChart: [10, 56, 20, 36, 80, 40, 30, -20, 25, 30, 18, 60],
  labelChart: "Tiempo productivo medido en las tareas cumplidas en el tiempo estimado",
  labelsChart: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiebre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],

  // dataChartSecond: [20, 43, 10, 60, 40, 80, 60, 20, 45, 60, 28, 30],
  // labelChartSecond: "Semestre",
};

const dataFirstLine = {
  titleChart: "Evolución de tiempo productivo en meses",
  dataChart: [10, 56, 20, 36, 80, 40, 30, 25, 30, 18, 60],
  // este grafico mide la evolucion de la productividad en meses medido en las tareas asignadas cumplidas en el tiempo estimado o menos
  labelChart: "Horas productivas al cumplir tareas en las horas asignadas",
  labelsChart: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiebre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
};

function DashBoard() {
  return (
    <BasicLayout idContent="DashBoard" backgroundImage="true">
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">50</div>
            <div className="cardName">Empleados</div>
          </div>
          <div className="iconBox">
            <i className="fa-solid fa-users"></i>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">10</div>
            <div className="cardName">Empleados Activos</div>
          </div>
          <div className="iconBox">
            <i className="fa-solid fa-user-check"></i>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">10</div>
            <div className="cardName">Total proyectos</div>
          </div>
          <div className="iconBox">
            <i className="fa-solid fa-shield"></i>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">30</div>
            <div className="cardName">Total tareas</div>
          </div>
          <div className="iconBox">
            <i className="fa-solid fa-list-check"></i>
          </div>
        </div>
      </div>
      <section className="contentCharts">
        <div className="chartPie cardChart">
          <PiesChart dataAllChart={dataFirtsPie} />
        </div>
        <div className="secondChartPie cardChart">
          <PiesChart dataAllChart={dataSecondPie} />
        </div>
        <div className="verticalBar cardChart">
          <BarsChart dataAllChart={dataFirstBar} horizontalBar={true} />
          <BarsChart dataAllChart={dataSecondBar} horizontalBar={true} />
        </div>
        <div className="BarChart cardChart">
          <BarsChart dataAllChart={dataFusionBar} />
        </div>
        <div className="lineChart cardChart">
          <LinesChart dataAllChart={dataFirstLine} />
        </div>
      </section>
    </BasicLayout>
  );
}

export { DashBoard };
