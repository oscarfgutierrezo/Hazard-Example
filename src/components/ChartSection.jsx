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
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 order-1">
        <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Rendimiento</h2>
      </div>
      <div className="col-span-3 relative w-full max-w-[240px] justify-self-center order-2 sm:col-span-1 sm:order-3">
        <button className="w-full px-3 py-0.5 flex justify-between items-center text-sm font-medium text-black-500 border-2 border-black-300 rounded-md" onClick={ handleToggleChartFilter }>Filtrar por
            <ArrowDownIcon/>
        </button>
        <ChartMenuFilter isOpened={ isOpenedChartFilter }/>
      </div>
      <div className="col-span-3 justify-self-center self-center order-3 sm:col-span-2 sm:justify-self-start sm:order-2">
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
      <div className="col-span-3 w-full h-60 sm:h-80 order-4" >
        <LineChart/>
      </div>
    </div>
  )
}
