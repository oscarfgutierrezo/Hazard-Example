import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { data } from "../data/data";

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

export const LineChart = () => {
  const [userData, setUserData] = useState({
    labels: data.chartData.labels,
    datasets: 
    [{
      label: 'Item1',
      data: data.chartData.item1,
      borderColor: '#d955f8',
      backgroundColor: '#d955f820',
      borderWidth: 2,
      tension: 0.4,
      radius: '0',
      pointStyle: 'none',
      fill: true,
    },
    {
      label: 'Item1',
      data: data.chartData.item2,
      borderColor: '#ebaf6f',
      backgroundColor: '#ebaf6f20',
      borderWidth: 2,
      tension: 0.4,
      radius: '0',
      pointStyle: 'none',
      fill: true,
    }],
  })

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
        grid: {
          borderDash: [5, 5],
          borderColor: 'transparent',
        }
      },
      xAxis: {
        offset: true,
        grid: {
          display: false,
          borderDash: [10, 10],
        }
      }
    },
    plugins: {
      legend: {
          display: false,
      }
    }
  }
  
  return (
    <Line data={ userData } options={ options } />
  )
}
