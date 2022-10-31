import { PaymentsCreditLine, PaymentsPayrolls } from '../../components';
import { useTranslation } from 'react-i18next';

export const PaymentsSection = () => {
  // Control sobre el idioma seleccionado
  const [t] = useTranslation('global');
  
  return (
    <div className="h-full flex flex-col gap-7 lg:pt-10 lg:ml-8 lg:pl-8 lg:border-l">
      <h2 className="text-center text-xl font-bold text-black-900 sm:text-left">{ t("paymentsSection.payments") }</h2>
      <div className='flex-grow flex flex-col gap-7 justify-between'>
        <PaymentsCreditLine/>
        <PaymentsPayrolls/>
      </div>
    </div>
  )
}
