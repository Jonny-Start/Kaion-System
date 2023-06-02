import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LinesChart({ dataAllChart }) {
  const miData = {
    labels: dataAllChart.labelsChart,
    datasets: [
      //cadauna de las lineas del grafico
      {
        label: dataAllChart.labelChart,
        data: dataAllChart.dataChart,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "transparent",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const misOptions = {
    scales: {
      y: {
        //   min: 0,
      },
      x: {
        ticks: {
          color: "black",
        },
      },
    },
    plugins: {
      legend: {
        //   display: false,
      },
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

  return <Line data={miData} options={misOptions} />;
}

// https://react-chartjs-2.js.org/examples/horizontal-bar-chart
