import { useState } from 'react';
import { PaymentsModalCreditLine, PaymentProgressBar } from '../../components';
import { creditOperations, formatNumber } from '../../helpers';
import { useTranslation } from 'react-i18next';

export const PaymentsCreditLine = () => {
  // Control sobre el idioma seleccionado
  const [t] = useTranslation('global');
  
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  // Controlar la línea de crédito
  const [creditLine, setCreditLine] = useState(150000000);
  const creditSpent = 150000000;

  // Obtener crédito disponible y porcentaje que representa el crédito consumido
  const { creditAvailable, percentCreditSpent } = creditOperations(creditLine, creditSpent);

  // Abrir el modal para modificar la línea de crédito
  const handleClick = () => {
    setIsOpenedModal(!isOpenedModal);
  };
  
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <h3 className="col-span-2 text-center font-medium text-black-700 sm:text-start lg:text-center xl:text-start">{ t("paymentsCreditLine.creditLine") }</h3>
        <p className="col-span-2 text-center text-2xl font-bold text-pink sm:col-span-1 sm:text-start lg:col-span-2 lg:text-center xl:col-span-1 xl:text-start">${formatNumber(creditLine)}</p>
        <div className="col-span-2 justify-self-center sm:col-span-1 sm:justify-self-end lg:col-span-2 lg:justify-self-center xl:col-span-1 xl:justify-self-end">
          <button type="button" className="w-60 py-1 px-3 text-sm text-white bg-purple/80 rounded-md duration-300 hover:bg-purple sm:w-max lg:w-60 xl:w-max" onClick={ handleClick }>{ t("paymentsCreditLine.increase") }</button>
        </div>
        <div className="col-span-2">
          <div className="p-4 grid grid-cols-2 border rounded-lg">
            <p className="text-sm font-medium text-black-500">{ t("paymentsCreditLine.spent") }</p>
            <p className="text-end text-sm font-medium text-black-500">{ t("paymentsCreditLine.available") }</p>
            <p className="font-bold">${formatNumber(creditSpent)}</p>
            <p className="text-end font-bold">${formatNumber(creditAvailable)}</p>
            <div className="col-span-2">
              <PaymentProgressBar progressPercentage={ percentCreditSpent }/>
            </div>
            <hr className="col-span-2 mt-2 mb-5" />
            <p className="text-sm font-medium text-black-500">{ t("paymentsCreditLine.nextDebt") }</p>
            <p className="text-end text-sm font-medium text-black-500">{ t("paymentsCreditLine.date") }</p>
          </div>
        </div>
      </div>
      <PaymentsModalCreditLine isOpened={ isOpenedModal } setIsOpened={ setIsOpenedModal } setCreditLine={ setCreditLine } creditLine={ creditLine } />
    </>
  )
}
