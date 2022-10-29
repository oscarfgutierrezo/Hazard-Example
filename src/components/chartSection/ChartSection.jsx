import { useMemo, useState } from "react";
import { buildChartData } from "../../helpers";
import { mainData } from "../../data";
import { ChartItemsList, ChartDropdown, LineChart } from '../chartSection';

export const ChartSection = () => {
  const items = useMemo(() => buildChartData(mainData.chartData), [mainData]);
  const [ itemsChecked, setItemsChecked ] = useState([...items])
  
  return (
    <section className="col-span-5 pt-10 lg:col-span-3 lg:order-1">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 pb-3 sm:order-1">
          <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Rendimiento</h2>
        </div>
        <div className="col-span-3 w-full max-w-[240px] justify-self-center sm:col-span-1 sm:order-3">
          <ChartDropdown items={ items } setItemsChecked={ (items) => setItemsChecked(items)} itemsChecked={ itemsChecked } />
        </div>
        <div className="col-span-3 justify-self-center self-center sm:col-span-2 sm:justify-self-start sm:order-2">
          <ChartItemsList items={ itemsChecked }/>
        </div>
        <div className="col-span-3 w-full h-60 sm:order-4 lg:h-80 xl:h-60" >
          <LineChart items={ itemsChecked } />
        </div>
      </div>
    </section>
  )
}
