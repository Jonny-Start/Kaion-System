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

const meses = [
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
];

const beneficios = [10, 56, 20, 36, 80, 40, 30, -20, 25, 30, 18, 60];

const miData = {
  labels: meses,
  datasets: [
    {
      label: "Beneficios",
      data: beneficios,
      backgroundColor: "rgba(0, 220, 195, 0.5)",
    },
  ],
};

export default function BarsChart({ horizontalBar }) {
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
