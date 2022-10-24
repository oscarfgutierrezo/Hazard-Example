import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { data } from "../data/data";

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

export const LineChart = ({ items }) => {

  const [userData, setUserData] = useState({
    labels: data.chartData.labels,
    datasets: items.map( item => (
      {
        label: item.name,
        data: item.data,
        borderColor: item.color,
        backgroundColor: item.backgroundColor,
        borderWidth: 2,
        tension: 0.4,
        radius: '0',
        pointStyle: 'none',
        fill: true,
      }
    ))
  })

  useEffect(() => {
    setUserData(
      {
        labels: data.chartData.labels,
        datasets: items.map( item => (
          {
            label: item.name,
            data: item.data,
            borderColor: item.color,
            backgroundColor: item.backgroundColor,
            borderWidth: 2,
            tension: 0.4,
            radius: '0',
            pointStyle: 'none',
            fill: true,
          }
        ))
      }
    )
  }, [items])
  

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
