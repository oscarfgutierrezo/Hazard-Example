import { useState } from 'react';
import { BillsOrderModal, BillsShowModal } from '../../components';
import { mainData } from '../../data';
import { useSortTable, useCheckedBills } from '../../hooks';

export const BillsSection = () => {
  const [isOpenedShowModal, setIsOpenedShowModal] = useState(false);
  const [isOpenedOrderModal, setIsOpenedOrderModal] = useState(false);
  
  // Control del filtro usado para ordenar los elementos de la tabla
  const [filterSelected, setFilterSelected] = useState('folio-asc');

  // Obtener tabla ordenada en función del filtro seleccionado
  const { sortedTable } = useSortTable(mainData.tableData.rows, filterSelected);

  // Custom hook para controlar los checkbox asociados a las facturas
  const { billsChecked, handleOnChecked, handleCheckAll } = useCheckedBills(sortedTable);

  // Abrir y cerrar el modal que muestra las facturas seleccionadas
  const handleShowModalBtnClick = () => {
    setIsOpenedShowModal(!isOpenedShowModal)
  };

  // Abrir y cerrar el modal que muestra las opciones para ordenar la tabla
  const handleOrderModalBtnClick = () => {
    setIsOpenedOrderModal(!isOpenedOrderModal)
  };
  
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <h2 className="pb-3 text-center text-xl font-bold text-black-900 sm:text-left">Facturas por pagar</h2>
        </div>
        <div className="col-span-2 self-center sm:col-span-1 sm:justify-self-end">
          <div className='flex justify-around gap-10'>
            <button type="button" className="text-sm font-bold text-pink/75 uppercase duration-300 hover:text-pink" name="showModal" onClick={ handleShowModalBtnClick }>Ver Todo</button>
            <button type="button" className="text-sm font-bold text-pink/75 uppercase duration-300 hover:text-pink" name="orderModal" onClick={ handleOrderModalBtnClick }>Ordenar</button>
          </div>
        </div>
        <div className="col-span-2 overflow-x-auto scrollbar">
          <table className="w-full py-3 text-sm text-black-500">
            <thead className="text-black-700">
              <tr>
                <th className="py-3 px-4 text-left whitespace-nowrap bg-lightpurple ">
                  <input type="checkbox" checked={ billsChecked.length === sortedTable.length } onChange={ handleCheckAll }/>
                </th>
                {
                  mainData.tableData.columns.map( (option, index) => (
                    <th key={index} className="relative min-w-[110px] py-3 px-4 text-left whitespace-nowrap bg-lightpurple" >{option}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                sortedTable.map( bill => {
                  const { folio, proveedor, tipo, monto, fechaPago } = bill
                  return (
                    <tr key={ folio }>
                      <td className='bills-td'><input type="checkbox" id={ folio } value={ folio } checked={ billsChecked.includes(folio) } onChange={ handleOnChecked } /></td>
                      <td className='bills-td'>{ folio }</td>
                      <td className='bills-td'>{proveedor}</td>
                      <td className='bills-td'>{tipo}</td>
                      <td className='bills-td'>{monto}</td>
                      <td className='bills-td'>{fechaPago}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <BillsOrderModal isOpened={ isOpenedOrderModal } setIsOpened={ setIsOpenedOrderModal } filterSelected={ filterSelected} setFilterSelected={ setFilterSelected }/>
      <BillsShowModal isOpened={ isOpenedShowModal } setIsOpened={ setIsOpenedShowModal } billsChecked={ billsChecked } bills={ sortedTable } />
    </>
  )
}