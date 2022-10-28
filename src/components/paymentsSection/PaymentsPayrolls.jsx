import { useState } from 'react';
import { payrollsData } from '../../data';
import { PaymentsDropdown } from '../../components';
import { cutDate, formatDate } from '../../helpers';


export const PaymentsPayrolls = () => {
  const [filterSelected, setFilterSelected] = useState('Pendientes por revisar');
  const payrollsFiltered = payrollsData.filter( payroll => (
    payroll.estado === filterSelected
  ));
  
  return (
    <div className="grid grid-cols-2 gap-3">
      <h3 className="col-span-2 text-center text-black-700 font-medium sm:col-span-1 sm:text-start lg:col-span-2 lg:text-center xl:col-span-1 xl:text-start">Mis Nóminas</h3>
      <div className="col-span-2 justify-self-center sm:col-span-1 sm:justify-self-end lg:col-span-2
      lg:justify-self-center xl:col-span-1 xl:justify-self-end">
        <PaymentsDropdown filterSelected={ filterSelected } setFilterSelected={ setFilterSelected } />
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
