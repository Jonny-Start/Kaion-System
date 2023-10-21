import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function BarsChart({ dataAllChart, horizontalBar }) {
  // const beneficios = [10, 56, 20, 36, 80, 40, 30, -20, 25, 30, 18, 60];
  // const beneficios2 = [10, 32, 534, 534, 54, 40, 54, -20, 25, 30, 18, 60];

  let dataSend = dataAllChart.dataChartSecond
    ? {
        labels: dataAllChart.labelsChart,
        datasets: [
          {
            label: dataAllChart.labelChart,
            data: dataAllChart.dataChart,
            backgroundColor: "rgba(250, 199, 55)",
          },
          {
            label: dataAllChart.labelChartSecond,
            data: dataAllChart.dataChartSecond,
            backgroundColor: "rgba(233, 100, 67)",
          },
        ],
      }
    : {
        labels: dataAllChart.labelsChart,
        datasets: [
          {
            label: dataAllChart.labelChart,
            data: dataAllChart.dataChart,
            backgroundColor: "#4BB34A",
          },
        ],
      };

  const miData = dataSend;

  let directionBar = "x";
  horizontalBar && (directionBar = "y");

  const misOptions = {
    indexAxis: directionBar,
    responsive: true,
    // animation: false,
    plugins: {
      legend: {
        // display: false,
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
    scales: {
      y: {
        // min: -25,
        // max: 100,
        ticks: {
          color: "black",
        },
      },
      x: {
        ticks: {
          color: "black",
        },
      },
    },
  };
  return <Bar data={miData} options={misOptions} />;
}

// https://react-chartjs-2.js.org/examples/horizontal-bar-chart
