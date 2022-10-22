import { useState } from "react";
import { data } from "../data/data";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

export const BillsSection = () => {
  const [isOpenedFoliosFilter, setIsOpenedFoliosFilter] = useState({ isOpened: false, item: ''});

  const handleToggleFoliosFilter = ({ target }) => {
    setIsOpenedFoliosFilter({
      isOpened: ( isOpenedFoliosFilter.item === target.value ) ? !isOpenedFoliosFilter.isOpened : true,
      item: target.value,
    });
  };
  
  return (
    <div className="col-span-5 grid grid-cols-3 gap-4">
      <div className="col-span-5">
        <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Facturas por pagar</h2>
      </div>
      <div className="col-span-5 justify-self-end">
        <button className="text-sm font-bold text-pink uppercase">Ver Todo</button>
      </div>
      <div className="col-span-5 overflow-x-auto">
        <table className="w-full py-3 text-sm text-black-500">
          <thead className="text-black-700">
            <tr>
              <th className="py-3 px-4 bg-lightpurple whitespace-nowrap text-left"><input type="radio" name="" id=""/></th>
              {
                data.tableData.columns.map( option => (
                  <th className="relative min-w-[110px] py-3 px-4 bg-lightpurple whitespace-nowrap text-left" >
                    <button type="button" className="w-full flex justify-between items-center gap-4" value={option} onClick={ handleToggleFoliosFilter }>{option}
                      <ArrowDownIcon/>
                    </button>
                    <ul className={`${ (isOpenedFoliosFilter.isOpened && isOpenedFoliosFilter.item === option)  ? 'max-h-40' : 'max-h-0'} absolute top-9 right-0 w-max text-sm font-normal bg-white rounded-md shadow-lg z-10 transition-all duration-500 overflow-hidden ease-in-out` }>
                      <li><button className="w-full py-1 px-3 text-black-500 border-b duration-300 cursor-pointer hover:bg-lightpurple hover:text-pink">Ascendente</button></li>
                      <li><button className="w-full py-1 px-3 text-black-500 border-b duration-300 cursor-pointer hover:bg-lightpurple hover:text-pink">Descendente</button></li>
                    </ul>
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              data.tableData.rows.map( row => (
                <tr>
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
  )
}