import { useMemo, useState } from "react";
import { mainData } from "../../data";
import { buildChartData } from "../../helpers";
import { ChartItemsList, ChartDropdown, LineChart } from '../../components';

export const ChartSection = () => {
  // Construir data con las propiedades necesarias para dibujar la gráfica
  const items = useMemo(() => buildChartData(mainData.chartData), [mainData]);

  // Control de los items seleccionados y visibles en la gráfica
  const [ itemsChecked, setItemsChecked ] = useState([...items])
  
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 pb-3 sm:order-1">
        <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Rendimiento</h2>
      </div>
      <div className="col-span-3 justify-self-center w-full max-w-[240px] sm:col-span-1 sm:order-3">
        <ChartDropdown items={ items } itemsChecked={ itemsChecked } onItemsChecked={ (items) => setItemsChecked(items)} />
      </div>
      <div className="col-span-3 justify-self-center self-center sm:col-span-2 sm:justify-self-start sm:order-2">
        <ChartItemsList itemsChecked={ itemsChecked }/>
      </div>
      <div className="col-span-3 w-full h-60 sm:order-4 lg:h-80 xl:h-60" >
        <LineChart itemsChecked={ itemsChecked } />
      </div>
    </div>
  )
}
