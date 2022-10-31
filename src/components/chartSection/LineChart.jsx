import { useEffect, useState } from 'react';
import { mainData } from '../../data';
import { useTranslation } from 'react-i18next';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );

export const LineChart = ({ itemsChecked }) => {
  // Referencia al idioma seleccionado
  const [t] = useTranslation('global');

  // Array con los meses traducibles
  var months = t('lineChart.months', { returnObjects: true});

  // Estado para controlar los datos a mostrar en la gráfica
  const [userData, setUserData] = useState({

    // Crear los labels de la tabla asociando cada mes en la data principal con el correspondiente en el array de meses traducibles
    labels: mainData.chartData.labels.map( (month, index) => months[index] ),

    // Iterar sobre los items seleccionados para dibujar la información en la gráfica
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

  // Redibujar la gráfica si el array de items seleccionados o el idioma cambian
  useEffect(() => {
    setUserData(
      {
        labels: mainData.chartData.labels.map( (month, index) => months[index] ),
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
  }, [itemsChecked, t])
  
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
