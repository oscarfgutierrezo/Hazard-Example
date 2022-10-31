import { useEffect, useState } from 'react';
import { mainData } from '../../data';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

export const LineChart = ({ itemsChecked }) => {
  // Estado para controlar los datos a mostrar en la gráfica
  const [userData, setUserData] = useState({
    labels: mainData.chartData.labels,
    datasets: itemsChecked.map( item => {
      const { name, data, color, backgroundColor } = item;
      return (
        {
          label: name,
          data: data,
          borderColor: color,
          backgroundColor: backgroundColor,
          borderWidth: 2,
          tension: 0.4,
          radius: '0',
          pointStyle: 'none',
          fill: true,
        }
      )
    })
  })

  // Redibujar la gráfica si el array de items seleccionados cambia (itemsChecked)
  useEffect(() => {
    setUserData(
      {
        labels: mainData.chartData.labels,
        datasets: itemsChecked.map( item => {
          const { name, data, color, backgroundColor } = item;
          return (
            {
              label: name,
              data: data,
              borderColor: color,
              backgroundColor: backgroundColor,
              borderWidth: 2,
              tension: 0.4,
              radius: '0',
              pointStyle: 'none',
              fill: true,
            }
          )
        })
      }
    )
  }, [itemsChecked])
  
  // Características visuales de la gráfica
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
