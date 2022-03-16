import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { shapeDataForChart } from "./Chart.utils";
import { LoadingIndicator } from "../";
import { Review } from "../../services/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Rating trends over time"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

export interface ChartProps {
  data?: Review[];
  isLoading: boolean;
}

export const Chart: React.FC<ChartProps> = ({ data, isLoading }) => {
  if (isLoading) return <LoadingIndicator />;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Rating avg",
        data: shapeDataForChart(data),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };

  return <Line options={options} data={chartData} />;
};
