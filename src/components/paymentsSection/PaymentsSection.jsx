import { ArrowDownIcon } from "../../icons";
import { PaymentsModalCreditLine } from "../../components";
import { useEffect, useState } from "react";
import { creditOperations, formatNumber } from "../../helpers";

export const PaymentsSection = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [creditLine, setCreditLine] = useState(450000000);
  const { creditSpent, creditAvailable, percentCreditSpent } = creditOperations(creditLine);
  
  const handleToggleModal = () => {
    setModalIsOpened(!modalIsOpened);
  };

  return (
    <section className="payments-section col-span-5 lg:col-span-2 lg:row-span-2 lg:pt-10 lg:border-l lg:ml-8 lg:pl-8 lg:order-2">
      <h2 className="pb-7 text-center text-xl font-bold text-black-900 sm:text-left">Pagos</h2>
      <div className="pb-7 grid grid-cols-2 gap-3">
        <h3 className="col-span-2 text-center text-black-700 font-medium sm:text-start lg:text-center xl:text-start">Linea de crédito</h3>
        <p className="col-span-2 text-center text-2xl font-bold text-pink sm:col-span-1 sm:text-start lg:col-span-2 lg:text-center xl:col-span-1 xl:text-start">${formatNumber(creditLine)}</p>
        <div className="col-span-2 justify-self-center sm:col-span-1 sm:justify-self-end lg:col-span-2 lg:justify-self-center xl:col-span-1 xl:justify-self-end">
          <button type="button" className="w-60 py-1 px-3 text-sm text-white bg-purple rounded-md sm:w-max lg:w-60 xl:w-max" onClick={ handleToggleModal }>Incrementar línea</button>
        </div>
        <div className="col-span-2">
          <div className="p-4 grid grid-cols-2 border rounded-lg">
            <p className="text-sm font-medium text-black-500">Consumido</p>
            <p className="text-end text-sm font-medium text-black-500">Disponible</p>
            <p className="font-bold">${formatNumber(creditSpent)}</p>
            <p className="text-end font-bold">${formatNumber(creditAvailable)}</p>
            <div className="col-span-2">

            <div className={`w-[${percentCreditSpent}%] my-3 h-2 bg-pink rounded-full`}></div>
            </div>
            <hr className="col-span-2 mt-2 mb-5" />
            <p className="text-sm font-medium text-black-500">Próxima deuda a pagar</p>
            <p className="text-end text-sm font-medium text-black-500">07 de octubre de 2021</p>
          </div>
        </div>
      </div>
      <PaymentsModalCreditLine isOpened={ modalIsOpened } setIsOpened={ setModalIsOpened } setCreditLine={ setCreditLine } creditLine={ creditLine } />
      <div className="grid grid-cols-2 gap-3">
        <h3 className="col-span-2 text-center text-black-700 font-medium sm:col-span-1 sm:text-start lg:col-span-2 lg:text-center xl:col-span-1 xl:text-start">Mis Nóminas</h3>
        <div className="col-span-2 relative justify-self-center sm:col-span-1 sm:justify-self-end lg:col-span-2
        lg:justify-self-center xl:col-span-1 xl:justify-self-end">
          <button type="button" className="w-60 px-3 py-0.5 flex justify-between items-center gap-5 text-sm font-medium text-black-500 border-2 border-black-300 rounded-md sm:w-max lg:w-60 xl:w-max">En proceso de revisión
              <ArrowDownIcon/>
          </button>
        </div>
        <div className="col-span-2 p-3 pb-0">
          <h4 className="pb-4 font-medium text-black-500">Facturas del 07 Octubre</h4>
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
                  <td>238</td>
                  <td>32</td>
                  <td>$148.017.159</td>
                  <td>07 Oct, 2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-2 p-3 pb-0">
          <h4 className="pb-4 font-medium text-black-500">Facturas del 12 Octubre</h4>
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
                  <td>134</td>
                  <td>34</td>
                  <td>$663.862.159</td>
                  <td>12 Oct, 2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
