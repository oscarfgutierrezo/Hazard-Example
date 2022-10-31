import { useState } from 'react';
import { PaymentsDropdown } from '../../components';
import { payrollsData } from '../../data';
import { cutDate, formatDate } from '../../helpers';


export const PaymentsPayrolls = () => {
  const [filterSelected, setFilterSelected] = useState('Pendientes por revisar');
  
  // Filtrar array de nóminas en función del filtro seleccionado
  const payrollsFiltered = payrollsData.filter( payroll => (
    payroll.estado === filterSelected
  ));
  
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className='col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1'>
        <h3 className="text-center font-medium text-black-700 sm:text-start lg:text-center xl:text-start">Mis Nóminas</h3>
      </div>
      <div className="col-span-2 justify-self-center sm:col-span-1 sm:justify-self-end lg:col-span-2 lg:justify-self-center xl:col-span-1 xl:justify-self-end">
        <PaymentsDropdown filterSelected={ filterSelected } setFilterSelected={ setFilterSelected } />
      </div>
      <div className='col-span-2 pr-1 h-60 overflow-y-auto scrollbar'>
      {
        payrollsFiltered.map( payroll => {
          const { id, fechaPago, facturas, proveedores, monto } = payroll;
          return (
            <div key={ id } className="p-3 pb-0">
              <h4 className="pb-4 font-medium text-black-500">Facturas del {cutDate( fechaPago )}</h4>
              <div className="pb-2 overflow-auto scrollbar">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="payrolls-th">Facturas</th>
                      <th className="payrolls-th">Proovedores</th>
                      <th className="payrolls-th">Monto</th>
                      <th className="payrolls-th">Fecha de pago</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='payrolls-td'>{ facturas }</td>
                      <td className='payrolls-td'>{ proveedores }</td>
                      <td className='payrolls-td'>${ monto.toLocaleString() }</td>
                      <td className='payrolls-td'>{ formatDate( fechaPago) }</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
