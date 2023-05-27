import React from "react";
import "./DashBoard.css";
import { BasicLayout } from "../../components/BasicLayout";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import LinesChart from "./../../components/LineChart";
import BarsChart from "../../components/BarChart";
import PiesChart from "../../components/PiesChart";

ChartJS.register(ArcElement, Tooltip, Legend);

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
          <PiesChart />
        </div>
        <div className="secondChartPie cardChart">
          <PiesChart />
        </div>
        <div className="verticalBar cardChart">
          <BarsChart horizontalBar={true} />
          <BarsChart horizontalBar={true} />
        </div>
        <div className="BarChart cardChart">
          <BarsChart />
        </div>
        <div className="lineChart cardChart">
          <LinesChart />
        </div>
      </section>
    </BasicLayout>
  );
}

export { DashBoard };
