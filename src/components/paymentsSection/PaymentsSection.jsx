import { PaymentsCreditLine, PaymentsPayrolls } from '../../components';

export const PaymentsSection = () => {
  return (
    <section className="col-span-5 lg:col-span-2 lg:row-span-2 lg:pt-10 lg:border-l lg:ml-8 lg:pl-8 lg:order-2">
      <h2 className="pb-7 text-center text-xl font-bold text-black-900 sm:text-left">Pagos</h2>
      <PaymentsCreditLine/>
      <PaymentsPayrolls/>
    </section>
  )
}
