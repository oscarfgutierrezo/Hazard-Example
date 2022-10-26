import { useState } from "react";
import { mainData } from "../../data";
import { ArrowDownIcon } from "../../icons/ArrowDownIcon";
import { BillsModalOrder } from "../../components";
import { useSort } from "../../hooks/useSort";

export const BillsSection = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [filterSelected, setFilterSelected] = useState('folio-asc');

  const { sortedTable } = useSort(mainData.tableData.rows, filterSelected);
  console.log(sortedTable);

  const handleToggleModal = () => {
    setIsOpenedModal(!isOpenedModal);
  }

  return (
    <section className="bill-section col-span-5 self-end lg:col-span-3 lg:order-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 pb-3 sm:col-span-1">
          <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Facturas por pagar</h2>
        </div>
        <div className="col-span-2 flex justify-around gap-10 sm:col-span-1 sm:justify-self-end">
          <button type="button" className="text-sm font-bold text-pink uppercase" onClick={ handleToggleModal }>Ordenar</button>
          <button type="button" className="text-sm font-bold text-pink uppercase">Ver Todo</button>
        </div>
        <div className="col-span-2 overflow-x-auto">
          <table className="w-full py-3 text-sm text-black-500">
            <thead className="text-black-700">
              <tr>
                <th className="py-3 px-4 bg-lightpurple whitespace-nowrap text-left"><input type="radio" name="" id=""/></th>
                {
                  mainData.tableData.columns.map( (option, index) => (
                    <th key={index} className="relative min-w-[110px] py-3 px-4 bg-lightpurple whitespace-nowrap text-left" >{option}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                sortedTable.map( (row, index) => (
                  <tr key={index}>
                    <td><input type="radio" name="" id={row.folio} /></td>
                    <td>{row.folio}</td>
                    <td>{row.proveedor}</td>
                    <td>{row.tipo}</td>
                    <td>{row.monto}</td>
                    <td>{row.fechaPago}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <BillsModalOrder isOpened={ isOpenedModal } setIsOpened={ setIsOpenedModal } filterSelected={ filterSelected } setFilterSelected={ setFilterSelected }/>
    </section>
  )
}