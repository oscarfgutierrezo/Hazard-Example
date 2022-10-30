import { Navbar, Sidebar, ChartSection, BillsSection, PaymentsSection } from './components';

export const App = () => {  
  return (
    <div className="p-5 sm:p-10 flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="grid grid-cols-5 gap-y-12 md:px-10">
          <section className="col-span-5 pt-10 lg:col-span-3 lg:order-1">
            <ChartSection/>
          </section>
          <section className="col-span-5 self-end lg:col-span-3 lg:order-3">
            <BillsSection/>
          </section>
          <PaymentsSection/>
        </div>
      </div>
    </div>
  )
}

