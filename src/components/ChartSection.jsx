import { LineChart } from "./LineChart";
import { ArrowDownIcon } from "../icons";
import { useState } from "react";
import { ChartMenuFilter } from "./ChartMenuFilter";

export const ChartSection = () => {
  const [isOpenedChartFilter, setIsOpenedChartFilter] = useState(false);

  const handleToggleChartFilter = () => {
    setIsOpenedChartFilter(!isOpenedChartFilter);
  };
  
  return (
    <section className="col-span-5 pt-10 lg:col-span-3 lg:order-1">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 pb-3 sm:order-1">
          <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Rendimiento</h2>
        </div>
        <div className="col-span-3 relative w-full max-w-[240px] justify-self-center sm:col-span-1 sm:order-3">
          <button className="w-full px-3 py-0.5 flex justify-between items-center text-sm font-medium text-black-500 border-2 border-black-300 rounded-md" onClick={ handleToggleChartFilter }>Filtrar por
              <ArrowDownIcon/>
          </button>
          <ChartMenuFilter isOpened={ isOpenedChartFilter }/>
        </div>
        <div className="col-span-3 justify-self-center self-center sm:col-span-2 sm:justify-self-start sm:order-2">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 ">
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 border bg-pink rounded-md"></div>
              <p className="text-sm text-black-500">Item 1</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 border bg-orange rounded-md"></div>
              <p className="text-sm text-black-500">Item 2</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 w-full h-60 sm:order-4 lg:h-80 xl:h-60" >
          <LineChart/>
        </div>
      </div>
    </section>
  )
}
