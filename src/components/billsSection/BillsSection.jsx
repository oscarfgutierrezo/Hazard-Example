import { useState } from 'react';
import { mainData } from '../../data';
import { BillsOrderModal, BillsShowModal } from '../../components';
import { useSort, useCheckedBills } from '../../hooks';

export const BillsSection = () => {
  const [filterSelected, setFilterSelected] = useState('folio-asc');
  const [modalsStatus, setModalsStatus] = useState({
    orderModal: false,
    showModal: false,
  })
  
  const { sortedTable } = useSort(mainData.tableData.rows, filterSelected);
  const { billsChecked, handleOnChecked, handleCheckAll } = useCheckedBills(sortedTable);
  
  const handleModal = ({ target }) => {
    const { name } = target;
    setModalsStatus({
      ...modalsStatus,
      [name]: !modalsStatus[name],
    });
  };

  return (
    <section className="bill-section col-span-5 self-end lg:col-span-3 lg:order-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 pb-3 sm:col-span-1">
          <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">Facturas por pagar</h2>
        </div>
        <div className="col-span-2 flex justify-around gap-10 sm:col-span-1 sm:justify-self-end">
          <button type="button" className="text-sm font-bold text-pink uppercase" name="showModal" onClick={ handleModal }>Ver Todo</button>
          <button type="button" className="text-sm font-bold text-pink uppercase" name="orderModal" onClick={ handleModal }>Ordenar</button>
        </div>
        <div className="col-span-2 overflow-x-auto">
          <table className="w-full py-3 text-sm text-black-500">
            <thead className="text-black-700">
              <tr>
                <th className="py-3 px-4 bg-lightpurple whitespace-nowrap text-left">
                  <input type="checkbox" checked={ billsChecked.length === sortedTable.length } onChange={ handleCheckAll }/>
                </th>
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
                  <tr key={row.folio}>
                    <td><input type="checkbox" id={ row.folio } value={ row.folio } checked={ billsChecked.includes(row.folio) } onChange={ handleOnChecked } /></td>
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
      <BillsOrderModal modalsStatus={ modalsStatus } setModalsStatus={ setModalsStatus } setFilterSelected={ setFilterSelected }/>
      <BillsShowModal modalsStatus={ modalsStatus } setModalsStatus={ setModalsStatus } billsChecked={ billsChecked } bills={ sortedTable } />
    </section>
  )
}