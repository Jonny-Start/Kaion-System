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
            backgroundColor: "rgba(0, 220, 195, 0.5)",
          },
          {
            label: dataAllChart.labelChartSecond,
            data: dataAllChart.dataChartSecond,
            backgroundColor: "rgba(0, 220, 195, 0.5)",
          },
        ],
      }
    : {
        labels: dataAllChart.labelsChart,
        datasets: [
          {
            label: dataAllChart.labelChart,
            data: dataAllChart.dataChart,
            backgroundColor: "rgba(0, 220, 195, 0.5)",
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
        color: "rgba(0, 220, 195)",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      y: {
        // min: -25,
        // max: 100,
        ticks: {
          color: "rgba(0, 220, 195)",
        },
      },
      x: {
        ticks: {
          color: "rgba(0, 220, 195)",
        },
      },
    },
  };
  return <Bar data={miData} options={misOptions} />;
}

// https://react-chartjs-2.js.org/examples/horizontal-bar-chart
