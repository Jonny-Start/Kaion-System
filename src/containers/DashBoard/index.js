import React from "react";
import "./DashBoard.css";
import { BasicLayout } from "../../components/BasicLayout";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import LinesChart from "./../../components/LineChart";
import BarsChart from "../../components/BarChart";
import PiesChart from "../../components/PiesChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataFirtsPie = {
  titleChart: "Lenguajes de programacion",
  dataChart: [35, 20, 20, 15, 10],
  labelChart: "Este es como el title de la primera grafica",
  labelsChart: ["js", "Go", "Java", "TS", "REACT"],
};
const dataSecondPie = {
  titleChart: "Otra cosa que no se que",
  dataChart: [123, 222, 320, 135, 50],
  labelChart: "Este es como el title de la Segunda grafica",
  labelsChart: ["Tiempo", "Proyecto", "Usuarios", "Empleados", "Proveedores"],
};

const dataFirstBar = {
  titleChart: "Meses del año durante el año",
  dataChart: [10, 56, 20, 36, 80, 40, 30, -20, 25, 30, 18, 60],
  labelChart: "Los meses del año",
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

const dataSecondBar = {
  titleChart: "Nuevo Arreglo de datos",
  dataChart: [234, 564, 232, 432, 534, 423, 234, 465, 465, 687, 978, 564],
  labelChart: "Datos que puse por que si",
  labelsChart: [
    "El primero",
    "El segundo ",
    "tercero",
    "Cuarto",
    "QUinto",
    "Sexto",
    "Septimo",
    "Octavo",
    "NOveno",
    "Decimo",
    "Onceavo",
    "Doceavo",
  ],
};

const dataFusionBar = {
  titleChart: "Meses del año Nombre",
  dataChart: [10, 56, 20, 36, 80, 40, 30, -20, 25, 30, 18, 60],
  labelChart: "Los meses del año nombre",
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

  dataChartSecond: [20, 43, 10, 60, 40, 80, 60, 20, 45, 60, 28, 30],
  labelChartSecond: "Los meses del año numero",
};

const dataFirstLine = {
  titleChart: "Meses del año durante el año",
  dataChart: [10, 56, 20, 36, 80, 40, 30, -20, 25, 30, 18, 60],
  labelChart: "Los meses del año",
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
