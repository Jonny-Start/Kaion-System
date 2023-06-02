import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PiesChart({ dataAllChart }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: dataAllChart.titleChart,
        font: {
          size: 20,
        },
        color: "black",
        padding: {
          top: 19,
          bottom: 20,
        },
      },
    },
  };

  const data = {
    labels: dataAllChart.labelsChart,
    datasets: [
      {
        label: dataAllChart.labelChart,
        data: dataAllChart.dataChart,
        backgroundColor: [
          "#D70F7B",
          "#FFAE03",
          "#48B8D0",
          "#4BB34A",
          "rgba(153,102,255,1)",
        ],
        borderColor: [
          "#D70F7B",
          "rgba(255,206,86,1)",
          "rgba(54,162,235,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  return <Pie data={data} options={options} />;
}

// https://react-chartjs-2.js.org/examples/horizontal-bar-chart
