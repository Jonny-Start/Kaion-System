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
const beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];

const miData = {
  labels: meses,
  datasets: [
    //cadauna de las lineas del grafico
    {
      label: "Beneficios",
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
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
        color: "pink",
      },
    },
  },
  plugins: {
    legend: {
    //   display: false,
    },
  },
};

export default function LinesChart() {
  return <Line data={miData} options={misOptions} />;
}

// https://react-chartjs-2.js.org/examples/horizontal-bar-chart