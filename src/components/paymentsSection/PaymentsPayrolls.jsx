import { useState } from 'react';
import { payrollsData } from '../../data';
import { ArrowDownIcon } from '../../icons';
import { PaymentsDropdown } from '../../components';
import { cutDate, formatDate } from '../../helpers';


export const PaymentsPayrolls = () => {
  const [filterSelected, setFilterSelected] = useState('Pendientes por revisar');
  const [ isOpenedDropdown, setIsOpenedDropdown ] = useState(false);
  const payrollsFiltered = payrollsData.filter( payroll => (
    payroll.estado === filterSelected
  ));

  const handleToggleDropdown = () => {
    setIsOpenedDropdown(!isOpenedDropdown);
  };
  
  return (
    <div className="grid grid-cols-2 gap-3">
      <h3 className="col-span-2 text-center text-black-700 font-medium sm:col-span-1 sm:text-start lg:col-span-2 lg:text-center xl:col-span-1 xl:text-start">Mis Nóminas</h3>
      <div className="col-span-2 relative justify-self-center sm:col-span-1 sm:justify-self-end lg:col-span-2
      lg:justify-self-center xl:col-span-1 xl:justify-self-end">
        <button type="button" className="w-60 px-3 py-0.5 flex justify-between items-center gap-5 text-sm font-medium text-black-500 border-2 border-black-300 rounded-md sm:w-max lg:w-60 xl:w-52" onClick={ handleToggleDropdown }>{filterSelected}
            <ArrowDownIcon/>
        </button>
        <PaymentsDropdown isOpened={ isOpenedDropdown } setIsOpened={ setIsOpenedDropdown } setFilterSelected={ setFilterSelected } />
      </div>
      <div className='col-span-2 pr-1 h-60 overflow-y-auto'>
      {
        payrollsFiltered.map( payroll => (
          <div className="p-3 pb-0">
            <h4 className="pb-4 font-medium text-black-500">Facturas del {cutDate(payroll.fechaPago)}</h4>
            <div className="pb-2 overflow-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="pr-5 text-left text-sm font-medium text-black-300 whitespace-nowrap">Facturas</th>
                    <th className="pr-5 text-left text-sm font-medium text-black-300 whitespace-nowrap">Proovedores</th>
                    <th className="pr-5 text-left text-sm font-medium text-black-300 whitespace-nowrap">Monto</th>
                    <th className="pr-5 text-left text-sm font-medium text-black-300 whitespace-nowrap">Fecha de pago</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{payroll.facturas}</td>
                    <td>{payroll.proveedores}</td>
                    <td>${payroll.monto.toLocaleString()}</td>
                    <td>{formatDate(payroll.fechaPago)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}
